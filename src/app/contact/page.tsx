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
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main>
      {/* Page Header */}
      <div className="bg-slate-100 py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Let's start the conversation about your next project.
          </p>
        </div>
      </div>

      {/* Main Content */}
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
    </main>
  );
}
