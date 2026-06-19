"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

export function SpotifyNowPlaying() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/spotify");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setData(data);
        setError(null);
      } catch (e) {
        console.error("Error fetching Spotify data:", e);
        setError(e instanceof Error ? e.message : "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // Refresh data every minute
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (error) return null;
  if (isLoading || !data) {
    return (
      <div className="flex items-center gap-[18px]">
        <div className="w-[74px] h-[74px] bg-accent animate-pulse rounded-md" />
        <div className="flex flex-col gap-2">
          <div className="w-40 h-4 bg-accent animate-pulse rounded" />
          <div className="w-24 h-3 bg-accent animate-pulse rounded" />
        </div>
      </div>
    );
  }

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-fit items-center gap-[18px] no-underline group"
    >
      {data.albumImageUrl && (
        <Image
          src={data.albumImageUrl}
          alt={`${data.title} album art`}
          width={74}
          height={74}
          className="flex-none rounded-md shadow-sm"
          unoptimized
        />
      )}
      <div className="flex min-w-0 flex-col">
        <span className="text-lg font-medium text-foreground transition-colors group-hover:text-primary">
          {data.title}
        </span>
        <span className="mt-1 text-sm text-muted-foreground/70">
          {data.artist}
        </span>
      </div>
    </a>
  );
}
