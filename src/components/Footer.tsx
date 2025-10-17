import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-slate-400">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: Brand and Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-teal-400">
              Cabinet Connection
            </Link>
            <p>Family-owned and serving Albuquerque since 1994.</p>
            <p>
              2605 Princeton Dr NE, Ste B<br />
              Albuquerque, NM 87107
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-teal-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-teal-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>Office: (505) 336-1819</li>
              <li>info@cabinetconnect.net</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Cabinet Connection. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
