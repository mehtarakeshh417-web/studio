"use client";

import Link from 'next/link';
import type { Service } from '@/lib/data';
import { icons } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';
import { specialistServices } from '@/lib/data';

type HomeServiceCardProps = {
  service: Service;
};

export function HomeServiceCard({ service }: HomeServiceCardProps) {
  const { title, description, slug, icon } = service;
  const LucideIcon = icon ? icons[icon] : null;

  if (slug === 'specialist-services') {
    return (
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="h-full"
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex flex-col text-left items-start gap-4 p-6 rounded-lg border-2 border-primary/50 hover:border-primary hover:bg-primary/5 transition-all duration-300 h-full shadow-sm hover:shadow-lg cursor-pointer">
              <div className="flex w-full justify-between items-start">
                  <div className="flex items-start gap-4">
                     {LucideIcon && (
                        <div className="bg-primary/10 text-primary p-3 rounded-lg">
                        <LucideIcon className="h-7 w-7" />
                        </div>
                    )}
                    <div>
                        <h3 className="font-headline text-xl font-bold text-foreground">{title}</h3>
                        <p className="mt-2 text-muted-foreground">{description}</p>
                    </div>
                  </div>
                  <ChevronDown className="h-5 w-5 text-primary ml-2 mt-1" />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            {specialistServices.map((specialistService) => (
              <DropdownMenuItem key={specialistService.slug} asChild>
                <Link href={`/services/specialist/${specialistService.slug}`}>
                  {specialistService.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="h-full"
    >
      <Link href={`/services/${slug}`} className="h-full">
        <div className="flex flex-col text-left items-start gap-4 p-6 rounded-lg border-2 border-primary/50 hover:border-primary hover:bg-primary/5 transition-all duration-300 h-full shadow-sm hover:shadow-lg">
          {LucideIcon && (
            <div className="bg-primary/10 text-primary p-3 rounded-lg">
              <LucideIcon className="h-7 w-7" />
            </div>
          )}
          <div>
            <h3 className="font-headline text-xl font-bold text-foreground">{title}</h3>
            <p className="mt-2 text-muted-foreground">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
