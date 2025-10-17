import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cabinet Connection",
  description: "Custom and Prebuilt Cabinetry in Albuquerque, NM",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeGoodsStore",
  name: "Cabinet Connection",
  image: "https://www.cabinetconnect.net/logo.png", // <-- IMPORTANT: CHANGE THIS URL
  url: "https://www.cabinetconnect.net/",
  telephone: "+15053361819",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2605 Princeton Dr NE, Ste B",
    addressLocality: "Albuquerque",
    addressRegion: "NM",
    postalCode: "87107",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.1112,
    longitude: -106.6207,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
