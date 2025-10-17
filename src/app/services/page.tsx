import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Wrench, Bath, Tv, Briefcase } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const metadata: Metadata = {
  title: "Custom Cabinet Design & Installation Services | Albuquerque, NM",
  description:
    "From initial design to professional installation, Cabinet Connection offers a full range of custom cabinetry services for your Albuquerque home.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
      <div className="bg-gray-900">
        <div className="container mx-auto text-center px-4 pt-32 pb-16">
          <h1 className="text-5xl font-bold text-white">Our Services</h1>
          <p className="text-xl text-gray-300 mt-2 max-w-2xl mx-auto">
            From fully custom designs to quality prebuilt options, we have the
            perfect solution for your home or business.
          </p>
        </div>
      </div>

      {/* Custom Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Custom Cabinetry Solutions</h2>
            <p className="text-lg text-muted-foreground mt-2">
              For a truly unique, tailored design.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Wrench className="w-8 h-8 text-teal-600" />
                  <CardTitle>Custom Kitchen Cabinets</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The journey to your dream kitchen starts with a personal
                  consultation to design a layout that maximizes your space and
                  style.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Bath className="w-8 h-8 text-teal-600" />
                  <CardTitle>Custom Bathroom Vanities</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We create beautiful, practical vanities that maximize storage
                  in any space, built with durable materials and craftsmanship.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Tv className="w-8 h-8 text-teal-600" />
                  <CardTitle>Entertainment Centers & Built-ins</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seamlessly integrated solutions that add elegance and
                  practical function, from media centers to custom Murphy beds.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Briefcase className="w-8 h-8 text-teal-600" />
                  <CardTitle>Home Office Solutions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We build custom-fit desks, shelving, and workstations to
                  create an organized, professional, and productive environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Our Simple, Proven Process</h2>
            <p className="text-lg text-muted-foreground mt-2">
              We guide you every step of the way, from vision to reality.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-600 text-white font-bold text-2xl rounded-full mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-muted-foreground">
                We start with a conversation to understand your needs, style,
                and budget.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-600 text-white font-bold text-2xl rounded-full mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Design & Quote</h3>
              <p className="text-muted-foreground">
                Our team creates a detailed design and provides a transparent,
                no-obligation quote.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-600 text-white font-bold text-2xl rounded-full mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Sourcing & Preparation
              </h3>
              <p className="text-muted-foreground">
                Whether crafted in-house by our team or sourced from our trusted
                partners, we ensure every piece meets our high standards.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-600 text-white font-bold text-2xl rounded-full mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Installation</h3>
              <p className="text-muted-foreground">
                Our professional team ensures a perfect fit and flawless finish
                in your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prebuilt Cabinets Section with Logos */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Prebuilt & RTA Cabinetry</h2>
          <p className="text-lg text-muted-foreground mt-2 mb-12">
            Quality from trusted brands for a faster timeline and excellent
            value.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all">
              <Image
                src="/logos/sollid-cabinetry-logo.webp"
                alt="Sollid Cabinetry Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all">
              <Image
                src="/logos/1951-cabinetry-logo.webp"
                alt="1951 Cabinetry Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all">
              <Image
                src="/logos/nations-cabinetry-logo.webp"
                alt="Nations Cabinetry Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all">
              <Image
                src="/logos/pcs-cabinetry-logo.webp"
                alt="PCS Cabinetry Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all">
              <Image
                src="/logos/us-cabinet-depot-logo.webp"
                alt="US Cabinet Depot Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Projects Section */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Commercial Projects</h2>
            <p className="text-lg text-muted-foreground">
              We bring the same high standards of craftsmanship and reliable
              service to select commercial projects, offering durable and
              stylish solutions for businesses.
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2 pt-2">
              <li>Office kitchenettes & break rooms</li>
              <li>Custom reception desks</li>
              <li>Retail displays & fixtures</li>
              <li>Multi-family unit cabinetry</li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden">
            <AspectRatio ratio={4 / 3}>
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop"
                alt="Modern office kitchenette with custom cabinetry"
                fill
                className="object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-teal-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Ready to Discuss Your Project?</h2>
          <p className="text-lg mt-2 mb-6 max-w-2xl mx-auto">
            Whether it's a fully custom design or a prebuilt solution, our team
            is ready to help. Contact us for a free consultation.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get a Free Estimate</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
