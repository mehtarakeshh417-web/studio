"use client";

import Link from 'next/link';
import type { Service } from '@/lib/data';
import { icons } from 'lucide-react';
import { motion } from 'framer-motion';

type HomeServiceCardProps = {
  service: Service;
};

export function HomeServiceCard({ service }: HomeServiceCardProps) {
  const { title, description, slug, icon } = service;
  const LucideIcon = icon ? icons[icon] : null;

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
