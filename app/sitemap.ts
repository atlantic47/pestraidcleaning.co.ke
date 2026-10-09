import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pestraidcleaning.co.ke";

  const staticRoutes = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const blogRoutes = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
