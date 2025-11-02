"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Service } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { icons } from 'lucide-react';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const { title, description, slug, icon, imageId } = service;
  const image = PlaceHolderImages.find(p => p.id === imageId);
  const LucideIcon = icon ? icons[icon] : null;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="flex flex-col overflow-hidden h-full shadow-md hover:shadow-xl transition-shadow duration-300">
        {image && (
          <div className="relative aspect-[3/2] w-full overflow-hidden">
              <Image
                  src={image.imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  data-ai-hint={image.imageHint}
              />
          </div>
        )}
        <CardHeader className="flex-row items-start gap-4">
          {LucideIcon && (
            <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <LucideIcon className="h-6 w-6" />
            </div>
          )}
          <div>
              <CardTitle className="font-headline text-xl">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href={`/services/${slug}`}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
