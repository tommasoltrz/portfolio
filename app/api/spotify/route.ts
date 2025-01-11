import { NextResponse } from "next/server";

// Add runtime config to prevent edge caching
export const runtime = "edge";
export const dynamic = "force-dynamic";
export const revalidate = 0;

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
  console.log("Fetching recently played tracks...");
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("Failed to fetch tracks:", {
      status: response.status,
      statusText: response.statusText,
    });
    throw new Error("Failed to fetch recently played tracks");
  }

  return response.json();
};

export async function GET() {
  try {
    const { items } = await getRecentlyPlayed();

    if (!items?.length) {
      console.log("No recently played tracks found");
      return new NextResponse(
        JSON.stringify({ error: "No recently played tracks found" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control":
              "no-store, no-cache, must-revalidate, proxy-revalidate",
            Pragma: "no-cache",
            Expires: "0",
            "Surrogate-Control": "no-store",
          },
        }
      );
    }

    const track = items[0].track;

    if (!track) {
      return new NextResponse(
        JSON.stringify({ error: "Track data is missing" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control":
              "no-store, no-cache, must-revalidate, proxy-revalidate",
            Pragma: "no-cache",
            Expires: "0",
            "Surrogate-Control": "no-store",
          },
        }
      );
    }

    const title = track.name;
    const artist = track.artists
      .map((artist: { name: string }) => artist.name)
      .join(", ");
    const albumImageUrl = track.album.images[0]?.url;
    const songUrl = track.external_urls.spotify;

    if (!title || !artist || !albumImageUrl || !songUrl) {
      return new NextResponse(
        JSON.stringify({ error: "Missing required track data" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control":
              "no-store, no-cache, must-revalidate, proxy-revalidate",
            Pragma: "no-cache",
            Expires: "0",
            "Surrogate-Control": "no-store",
          },
        }
      );
    }

    console.log("Returning track data:", { title, artist });
    return new NextResponse(
      JSON.stringify({
        title,
        artist,
        albumImageUrl,
        songUrl,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "Surrogate-Control": "no-store",
        },
      }
    );
  } catch (e) {
    console.error("Error fetching Spotify data:", e);
    return new NextResponse(
      JSON.stringify({
        error: e instanceof Error ? e.message : "Internal Server Error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "Surrogate-Control": "no-store",
        },
      }
    );
  }
}
