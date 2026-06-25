import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kartik-baghel.netlify.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // We will dynamically add case study pages here if needed, or rely on static ones
  ];
}
