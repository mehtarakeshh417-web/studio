
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/shared/Logo";
import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-secondary-foreground/80">
              A reliable and ethical GP-led care provider in London.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-bold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-bold tracking-wider uppercase">Support</h3>
             <ul className="mt-4 space-y-2">
              {navLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
               <li>
                  <Link
                    href="/admin/login"
                    className="text-sm transition-colors hover:text-primary"
                  >
                    Admin
                  </Link>
                </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-bold tracking-wider uppercase">Contact Us</h3>
            <div className="mt-4 space-y-2 text-sm">
              <p>72 Patching Hall Lane, Chelmsford CM1 4DB</p>
              <p>Email: info@symboliccaregroup.org.uk</p>
              <p>Phone: <span className="font-bold">01245922249</span></p>
              <p>Mobile: <span className="font-bold">+44 7353992009</span></p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-secondary-foreground/80">
            &copy; {new Date().getFullYear()} Symbolic Care. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
