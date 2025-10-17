import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen bg-gray-900 flex justify-center items-center text-center px-4">
        {/* ... Hero content is unchanged ... */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Crafting Albuquerque's Finest Custom Cabinets
          </h1>
          <p className="text-lg text-gray-300">
            A Family Tradition of Quality Since 1994
          </p>
          <div>
            <Button asChild size="lg">
              <Link href="/portfolio">Explore Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        {/* ... Services content is unchanged ... */}
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Our Services</h2>
            <p className="text-lg text-muted-foreground mt-2">
              Quality solutions for every project and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Custom Cabinetry</CardTitle>
                <CardDescription>
                  Solutions built from scratch to perfectly fit your space.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Tailor-made designs for kitchens, bathrooms, and home offices
                  where every detail is crafted to your specification.
                </p>
                <Button asChild variant="link" className="px-0 pt-4">
                  <Link href="/services">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Prebuilt Cabinets</CardTitle>
                <CardDescription>
                  Stylish options from trusted brands for a faster timeline.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We offer a curated selection of high-quality stock and
                  prebuilt cabinets that provide excellent value and style.
                </p>
                <Button asChild variant="link" className="px-0 pt-4">
                  <Link href="/services">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Design & Installation</CardTitle>
                <CardDescription>
                  Expert guidance from our family team, from start to finish.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our experienced team is involved in every step, ensuring a
                  seamless process from the initial design to the final
                  installation.
                </p>
                <Button asChild variant="link" className="px-0 pt-4">
                  <Link href="/services">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Summary Section */}
      <section className="bg-slate-50 py-20 px-4">
        {/* ... About Us content is unchanged ... */}
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              A Family Tradition of Craftsmanship Since 1994
            </h2>
            <p className="text-muted-foreground text-lg">
              Cabinet Connection is a true family collaboration. We are
              personally involved in every project, from the initial design to
              the final installation in your home.
            </p>
            <p className="text-muted-foreground text-lg">
              This hands-on approach is our commitment to quality and our
              promise to you.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/about">Learn Our Story</Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden">
            <AspectRatio ratio={4 / 3}>
              <Image
                src="https://images.unsplash.com/photo-1581224463294-908316338239?q=80&w=2070&auto=format&fit=crop"
                alt="Craftsman working on wood in a workshop"
                fill
                className="object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-100 py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
