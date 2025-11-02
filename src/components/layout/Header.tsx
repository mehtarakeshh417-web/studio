
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
  SheetTrigger,
} from "@/components/ui/sheet";
import { AccessibilityToolbar } from '@/components/shared/AccessibilityToolbar';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
           <div className="hidden md:block">
             {isClient && <AccessibilityToolbar />}
           </div>
        </div>
        
        <div className="flex items-center justify-end gap-4">
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-lg font-bold transition-colors hover:text-primary whitespace-nowrap',
                  pathname === link.href ? 'text-primary' : 'text-primary/70'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
              <Button asChild>
                <Link href="/admin/login">Admin</Link>
              </Button>
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
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b pb-6">
                    <Logo />
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
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
