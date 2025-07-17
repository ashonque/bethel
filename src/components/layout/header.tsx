"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { href: '#', label: 'About' },
  { href: '#', label: 'Features' },
  { href: '#', label: 'FAQ' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label }: { href: string, label: string }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground"
      )}
      onClick={() => setIsMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <span className="font-headline text-lg">Bethel Youth United</span>
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <NavLink key={link.label} {...link} />
              ))}
            </nav>
        </div>

        <div className="hidden items-center gap-4 md:flex">
           <Button variant="ghost">Log in</Button>
           <Button>
                Sign Up <ArrowRight className="ml-2 h-4 w-4"/>
           </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px]">
              <div className="flex h-full flex-col">
                 <div className="mb-8 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsMenuOpen(false)}>
                        <span className="font-headline text-lg">Bethel Youth United</span>
                    </Link>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                    <Button variant="ghost">Log in</Button>
                    <Button>
                        Sign Up <ArrowRight className="ml-2 h-4 w-4"/>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
