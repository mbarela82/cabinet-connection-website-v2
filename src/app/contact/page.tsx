import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us for a Free Custom Cabinet Quote | Albuquerque",
  description:
    "Ready to start your project? Contact Cabinet Connection today for a free, no-obligation quote on custom cabinets for your Albuquerque home.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Page Header */}
      <div className="bg-gray-900">
        <div className="container mx-auto text-center px-4 pt-32 pb-16">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          <p className="text-xl text-gray-300 mt-2">
            Let's start the conversation about your next project.
          </p>
        </div>
      </div>

      {/* Main Content - Form and Info Side-by-Side */}
      <div className="container mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Column 1: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold">Our Showroom & Shop</h2>
              <p className="text-lg text-muted-foreground mt-2">
                2605 Princeton Dr NE, Ste B<br />
                Albuquerque, NM 87107
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Phone</h2>
              <p className="text-lg text-muted-foreground mt-2">
                Office: (505) 336-1819
              </p>
              <p className="text-lg text-muted-foreground">
                Mario Barela: (505) 480-9672
              </p>
              <p className="text-lg text-muted-foreground">
                Mark Barela: (505) 379-7319
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Email</h2>
              <a
                href="mailto:info@cabinetconnection.net"
                className="text-lg text-teal-600 hover:underline"
              >
                info@cabinetconnect.net
              </a>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Hours</h2>
              <p className="text-lg text-muted-foreground mt-2">
                Monday – Friday: 8:00 AM – 5:00 PM
              </p>
              <p className="text-lg text-muted-foreground">
                Saturday & Sunday: Closed
              </p>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Full-Width Map Section */}
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.8212389272567!2d-106.62328078796959!3d35.11117437266286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8722747e76d53325%3A0xc0f3c84f828ac2aa!2sCabinet%20Connection!5e0!3m2!1sen!2sus!4v1760732572329!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map of Cabinet Connection Location"
        ></iframe>
      </div>
    </main>
  );
}
