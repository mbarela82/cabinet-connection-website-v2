import { Metadata } from "next";
import { sanityClient } from "@/lib/sanity.client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SanityProject {
  _id: string;
  title: string;
  category: string;
  excerpt: string;
  description: any[];
  images: {
    url: string;
    alt: string | null;
  }[];
}

export const revalidate = 60;

export async function generateStaticParams() {
  const query = `*[_type == "portfolio"]{ "slug": slug.current }`;
  const slugs = await sanityClient.fetch<{ slug: string }[]>(query);
  return slugs.map((item) => ({ slug: item.slug }));
}

async function getProjectBySlug(slug: string) {
  const query = `*[_type == "portfolio" && slug.current == $slug][0]{
    _id,
    title,
    category,
    excerpt,
    description,
    "images": images[]{
      "alt": alt,
      "url": asset->url + '?fm=webp'
    }
  }`;

  const project = await sanityClient.fetch<SanityProject>(query, { slug });
  return project;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Cabinet Connection",
    };
  }

  return {
    title: `${project.title} | Cabinet Connection Portfolio`,
    description:
      project.excerpt ||
      `View details of the ${project.title} project by Cabinet Connection in Albuquerque, NM.`,
  };
}

export default async function ProjectDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Page Header */}
      <div className="bg-gray-900">
        <div className="container mx-auto text-center px-4 pt-32 pb-16">
          <h1 className="text-5xl font-bold text-white">{project.title}</h1>
          <p className="text-xl text-gray-300 mt-2 capitalize">
            {project.category}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-20 px-4 max-w-4xl space-y-12">
        {/* Image Carousel */}
        <div>
          {project.images && project.images.length > 0 ? (
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={image.url}
                        alt={image.alt || project.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </AspectRatio>
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
          <div className="prose prose-slate prose-lg max-w-none dark:prose-invert">
            <PortableText value={project.description} />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-teal-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Ready to Build Your Dream Space?
          </h2>
          <p className="text-lg mt-2 mb-6 max-w-2xl mx-auto">
            Let's bring this level of quality and craftsmanship to your home.
            Contact us for a free, no-obligation estimate.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get a Free Estimate</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
