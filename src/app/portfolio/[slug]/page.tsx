import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

// Interface for a single project
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  slug: string;
  images:
    | {
        url: string;
        alternativeText: string | null;
      }[]
    | null;
}

// Helper function to get the correct image URL
const getImageUrl = (url: string) => {
  if (url.startsWith("http")) {
    return url; // It's a full URL from Cloudinary
  }
  return `http://localhost:1337${url}`; // It's a relative URL from local Strapi
};

// Function to fetch a single project by its slug
async function getProjectBySlug(slug: string): Promise<Project | null> {
  const strapiUrl = process.env.STRAPI_URL || "http://localhost:1337";
  try {
    const res = await fetch(
      `${strapiUrl}/api/projects?filters[slug][$eq]=${slug}&populate=*`
    );
    if (!res.ok) {
      return null;
    }
    const responseData = await res.json();
    if (responseData.data.length === 0) {
      return null;
    }
    return responseData.data[0];
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="container mx-auto py-40 text-center">
        Project not found.
      </div>
    );
  }

  const { title, category, images, description } = project;

  return (
    <main>
      {/* Page Header */}
      <div className="bg-slate-100 py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="text-xl text-muted-foreground mt-2 capitalize">
            {category}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-20 px-4 max-w-4xl space-y-12">
        {/* Image Carousel */}
        <div>
          {images && images.length > 0 ? (
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="p-0">
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            src={getImageUrl(image.url)}
                            alt={image.alternativeText || title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </AspectRatio>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-16" />
              <CarouselNext className="mr-16" />
            </Carousel>
          ) : (
            <div className="bg-slate-200 rounded-lg">
              <AspectRatio ratio={16 / 9} />
            </div>
          )}
        </div>

        {/* Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Project Details</h2>
          <div
            className="prose prose-slate prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{
              __html: description.replace(/\n/g, "<br />"),
            }}
          />
        </div>
      </div>
    </main>
  );
}
