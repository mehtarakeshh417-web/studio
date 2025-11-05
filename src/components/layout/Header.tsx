
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/shared/Logo';
import { navLinks } from '@/lib/data';
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
import { AccessibilityToolbar } from '@/components/shared/AccessibilityToolbar';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center px-8">
        <div className="flex items-center gap-6 mr-auto">
            <Logo />
        </div>

        <nav className="hidden md:flex items-center space-x-6 mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative text-base font-bold text-primary/80 transition-colors duration-300 hover:text-primary whitespace-nowrap',
                'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-transform after:duration-300 after:ease-in-out',
                pathname === link.href
                  ? 'text-primary after:w-full after:scale-x-100'
                  : 'after:w-full after:scale-x-0 hover:after:scale-x-100'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center justify-end ml-auto gap-4">
            <div className="hidden md:block">
              {isClient && <AccessibilityToolbar />}
            </div>
          <div className="hidden md:flex">
            <Button asChild>
              <Link href="/admin/login">Admin</Link>
            </Button>
          </div>

          <div className="flex items-center md:hidden">
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
      </div>
    </header>
  );
}
