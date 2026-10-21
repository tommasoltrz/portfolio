import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/privacy", "/cookies"].map((path) => ({
    url: new URL(path, "https://tommasolaterza.com").href,
  }));
}
