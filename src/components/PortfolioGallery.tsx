"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// ... (other imports)
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// ... (interface definitions are the same)
interface Project {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  images: { url: string }[] | null;
}
interface PortfolioGalleryProps {
  projects: Project[];
}

export default function PortfolioGallery({ projects }: PortfolioGalleryProps) {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const getImageUrl = (url: string) => {
    if (url.startsWith("http")) {
      return url; // It's a full URL from Cloudinary
    }
    return `http://localhost:1337${url}`; // It's a relative URL from local Strapi
  };

  return (
    <>
      <Tabs value={filter} onValueChange={setFilter} /* ... */>
        {/* ... TabsList code is the same ... */}
      </Tabs>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const imageUrl = project.images?.[0]?.url;
          return (
            <Link key={project.id} href={`/portfolio/${project.slug}`}>
              <Card className="overflow-hidden h-full group">
                <AspectRatio ratio={4 / 3}>
                  {imageUrl ? (
                    <Image
                      src={getImageUrl(imageUrl)} // USE THE HELPER FUNCTION
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="bg-slate-200 h-full w-full"></div>
                  )}
                </AspectRatio>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
}
