
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/shared/Logo';
import { navLinks, services } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AccessibilityToolbar } from '@/components/shared/AccessibilityToolbar';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const mainNavLinks = navLinks.filter(link => link.name !== 'Services');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center pl-4">
        <div className="flex flex-1 items-center justify-start">
           <div className="flex items-center gap-6">
              <Logo />
              <div className="hidden md:block ml-10">
                {isClient && <AccessibilityToolbar />}
              </div>
           </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative text-xs font-bold text-primary/80 transition-colors duration-300 hover:text-primary',
                'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-transform after:duration-300 after:ease-in-out',
                pathname === link.href
                  ? 'text-primary after:w-full after:scale-x-100'
                  : 'after:w-full after:scale-x-0 hover:after:scale-x-100'
              )}
            >
              {link.name}
            </Link>
          ))}
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative text-xs font-bold text-primary/80 transition-colors duration-300 hover:text-primary hover:bg-transparent after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-transform after:duration-300 after:ease-in-out data-[state=open]:text-primary data-[state=open]:after:scale-x-100 after:w-full after:scale-x-0 hover:after:scale-x-100 px-0 shadow-none hover:shadow-none hover:-translate-y-0">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/services">All Services</Link>
              </DropdownMenuItem>
              {services.map((service) => (
                <DropdownMenuItem key={service.slug} asChild>
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        
        <div className="flex flex-1 items-center justify-end gap-6">
            <div className="hidden md:flex items-center gap-4">
                <Button asChild>
                  <Link href="/admin/login">Admin</Link>
                </Button>
                <div className="flex items-center space-x-3 ml-4">
                  <a href="#" className="transition-opacity hover:opacity-80" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#1877F2"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.35c0 .732.593 1.325 1.325 1.325h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                  </a>
                  <a href="#" className="transition-opacity hover:opacity-80" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><defs><radialGradient id="ig-grad" cx="0.3" cy="1.2" r="1.1"><stop offset="0" stopColor="#F58529"/><stop offset="0.4" stopColor="#DD2A7B"/><stop offset="0.9" stopColor="#8134AF"/></radialGradient></defs><path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
                  </a>
                  <a href="#" className="transition-opacity hover:opacity-80" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
            </div>
          </div>

        <div className="flex items-center gap-4 md:hidden">
            {isClient && <AccessibilityToolbar />}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-sm">
                <SheetHeader>
                   <SheetTitle>
                      <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
                   </SheetTitle>
                </SheetHeader>
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b pb-6">
                    <Logo />
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col space-y-4 py-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          'text-xl font-bold transition-colors hover:text-primary',
                          pathname === link.href ? 'text-primary' : 'text-primary/90'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                     <Link
                        href="/admin/login"
                        className={cn(
                          'text-xl font-bold transition-colors hover:text-primary',
                          pathname === '/admin/login' ? 'text-primary' : 'text-primary/90'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Admin
                      </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
      </div>
    </header>
  );
}
