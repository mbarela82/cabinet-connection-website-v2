// src/components/PortfolioGallery.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PortfolioItem } from "@/types/portfolio"; // Import our new type
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Define the props interface to expect our Sanity data
interface PortfolioGalleryProps {
  projects: PortfolioItem[];
}

export default function PortfolioGallery({ projects }: PortfolioGalleryProps) {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  // The getImageUrl helper is no longer needed since Sanity provides full URLs.

  return (
    <>
      <Tabs value={filter} onValueChange={setFilter} className="mb-8">
        <TabsList>
          {/* Add your TabsTriggers for filtering here */}
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="kitchens">Kitchens</TabsTrigger>
          <TabsTrigger value="bathrooms">Bathrooms</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          // Use the new property names from Sanity
          return (
            <Link key={project._id} href={`/portfolio/${project.slug.current}`}>
              <Card className="overflow-hidden h-full group">
                <AspectRatio ratio={4 / 3}>
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl} // Directly use the imageUrl
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
