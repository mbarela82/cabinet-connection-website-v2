// src/app/sitemap.ts

import { MetadataRoute } from "next";
import { sanityClient } from "@/lib/sanity.client";

// Define the type for the data we're fetching
type PortfolioSlug = {
  slug: {
    current: string;
  };
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.cabinetconnect.net";

  // 1. Get all portfolio project slugs from Sanity
  const query = `*[_type == "portfolio"]{ slug }`;
  const projects = await sanityClient.fetch<PortfolioSlug[]>(query);

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug.current}`,
    lastModified: new Date(), // Optional: use a date from your CMS if available
  }));

  // 2. Define your static page URLs
  const staticUrls = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/portfolio`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    // Add any other static pages here
  ];

  // 3. Combine and return all URLs
  return [...staticUrls, ...projectUrls];
}
