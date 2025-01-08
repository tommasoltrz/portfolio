import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

if (!client_id || !client_secret || !refresh_token) {
  throw new Error("Missing required Spotify API credentials");
}

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  try {
    console.log("Requesting access token...");
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token,
      }).toString(),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Token response error:", {
        status: response.status,
        statusText: response.statusText,
        error,
      });
      throw new Error(`Failed to get access token: ${error}`);
    }

    const data = await response.json();
    console.log("Successfully got access token");
    return data;
  } catch (error) {
    console.error("Token request failed:", error);
    throw error;
  }
};

const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken();
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch recently played tracks");
  }

  return response.json();
};

export async function GET() {
  try {
    const { items } = await getRecentlyPlayed();

    if (!items?.length) {
      return NextResponse.json({
        error: "No recently played tracks found",
      });
    }

    const track = items[0].track;

    if (!track) {
      return NextResponse.json({
        error: "Track data is missing",
      });
    }

    const title = track.name;
    const artist = track.artists.map((_artist: any) => _artist.name).join(", ");
    const albumImageUrl = track.album.images[0]?.url;
    const songUrl = track.external_urls.spotify;

    if (!title || !artist || !albumImageUrl || !songUrl) {
      return NextResponse.json({
        error: "Missing required track data",
      });
    }

    return NextResponse.json({
      title,
      artist,
      albumImageUrl,
      songUrl,
    });
  } catch (e) {
    console.error("Error fetching Spotify data:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}
