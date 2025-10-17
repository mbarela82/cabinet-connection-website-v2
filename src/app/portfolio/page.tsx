import { sanityClient } from "@/lib/sanity.client";
import { PortfolioItem } from "@/types/portfolio";
import PortfolioGallery from "@/components/PortfolioGallery";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cabinetry Portfolio | Custom Kitchen & Bath Installs | Albuquerque",
  description:
    "Browse our portfolio of custom kitchen and bathroom cabinetry projects. See the quality craftsmanship Cabinet Connection brings to every Albuquerque home.",
};

export const revalidate = 60;

async function getPortfolioItems() {
  const query = `*[_type == "portfolio"]{
    _id,
    title,
    excerpt,
    category,
    slug,
    "imageUrl": images[0].asset->url + '?fm=webp'
  }`;
  const data = await sanityClient.fetch<PortfolioItem[]>(query);
  return data;
}

export default async function PortfolioPage() {
  const items = await getPortfolioItems();

  return (
    <main>
      {/* Page Header */}
      <div className="bg-gray-900">
        <div className="container mx-auto text-center px-4 pt-32 pb-16">
          <h1 className="text-5xl font-bold text-white">Our Work</h1>
          <p className="text-xl text-gray-300 mt-2">
            A showcase of our commitment to quality craftsmanship.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto py-20 px-4">
        <PortfolioGallery projects={items} />
      </div>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-teal-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Inspired by Our Work?</h2>
          <p className="text-lg mt-2 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can bring this level of quality and
            craftsmanship to your home.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get a Free Estimate</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
