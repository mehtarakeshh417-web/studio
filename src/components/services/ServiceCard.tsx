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

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const { title, description, slug, icon: Icon, imageId } = service;
  const image = PlaceHolderImages.find(p => p.id === imageId);

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="flex flex-col overflow-hidden h-full shadow-md hover:shadow-xl transition-shadow duration-300">
        {image && (
          <div className="aspect-w-16 aspect-h-9 overflow-hidden">
              <Image
                  src={image.imageUrl}
                  alt={title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  data-ai-hint={image.imageHint}
              />
          </div>
        )}
        <CardHeader className="flex-row items-start gap-4">
          <div className="bg-primary/10 text-primary p-3 rounded-lg">
              <Icon className="h-6 w-6" />
          </div>
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
