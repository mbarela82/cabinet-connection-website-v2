import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
      <div className="bg-slate-100 py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="text-xl text-muted-foreground mt-2 max-w-2xl mx-auto">
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
                <CardTitle>Custom Kitchen Cabinets</CardTitle>
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
                <CardTitle>Custom Bathroom Vanities</CardTitle>
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
                <CardTitle>Entertainment Centers & Built-ins</CardTitle>
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
                <CardTitle>Home Office Solutions</CardTitle>
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

      {/* Prebuilt Cabinets Section */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Prebuilt & RTA Cabinetry</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Quality from trusted brands for a faster timeline and excellent
            value.
          </p>
          <div className="mt-8">
            <p className="font-semibold">Our Trusted Partners Include:</p>
            <p className="text-muted-foreground mt-2">
              Sollid Cabinetry, 1951 Cabinetry, Tidwell Cabinetry by Nations,
              PCS Cabinetry, and US Cabinet Depot (RTA)
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Projects Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold">Commercial Projects</h2>
          <p className="text-lg text-muted-foreground mt-2">
            We bring the same high standards of craftsmanship and reliable
            service to select commercial projects, including office
            kitchenettes, reception desks, retail displays, and multi-family
            units.
          </p>
        </div>
      </section>
    </main>
  );
}
