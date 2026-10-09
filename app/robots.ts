import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://pestraidcleaning.co.ke/sitemap.xml",
    host: "https://pestraidcleaning.co.ke",
  };
}
