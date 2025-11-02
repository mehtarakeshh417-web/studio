import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/shared/Logo";
import { navLinks, socialLinks, footerLogos } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm">
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
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-bold tracking-wider uppercase">Contact Us</h3>
            <div className="mt-4 space-y-2 text-sm">
              <p>123 Care Street, London, UK</p>
              <p>Email: contact@symboliccare.co.uk</p>
              <p>Phone: 020 1234 5678</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <h3 className="text-center font-bold tracking-wider uppercase">
            Our Accreditations
          </h3>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {footerLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-16 w-32"
              >
                <Image
                  src={logo.imageUrl}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Symbolic Care. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-primary"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
