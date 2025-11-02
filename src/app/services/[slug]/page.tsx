

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { permanentRedirect } from 'next/navigation';
import { Info } from 'lucide-react';

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return services
    .filter(service => 
      service.slug !== 'domiciliary-care' && 
      service.slug !== 'supported-living-services' &&
      service.slug !== 'respite-care' &&
      service.slug !== 'cqc-consultancy' &&
      service.slug !== 'specialist-services' &&
      service.slug !== 'other-services'
    )
    .map((service) => ({
      slug: service.slug,
    }));
}

export default function ServicePage({ params }: ServicePageProps) {
  if (params.slug === 'domiciliary-care') {
    permanentRedirect('/services/domiciliary-care');
  }

  if (params.slug === 'supported-living-services') {
    permanentRedirect('/services/supported-living-services');
  }
  
  if (params.slug === 'respite-care') {
    permanentRedirect('/services/respite-care');
  }

  if (params.slug === 'cqc-consultancy') {
    permanentRedirect('/services/cqc-consultancy');
  }

  if (params.slug === 'specialist-services') {
    permanentRedirect('/services/specialist-services');
  }
  
  if (params.slug === 'other-services') {
    permanentRedirect('/services/other-services');
  }

  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  if (service.slug === 'live-in-care' || service.slug === 'medical-services') {
    return (
      <div className="container py-24 text-center">
        <div className="max-w-md mx-auto bg-card p-8 rounded-lg shadow-sm border">
          <Info className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-3xl font-bold">{service.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Information coming soon.
          </p>
          <p className="mt-2 text-muted-foreground">
            Please check back later or contact us for more details.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    );
  }

  const image = PlaceHolderImages.find((p) => p.id === service.imageId);

  return (
    <div className="bg-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-headline text-4xl font-bold tracking-tight">{service.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground">{service.longDescription}</p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Enquire About This Service</Link>
            </Button>
          </div>
          <div>
            {image && (
              <Image
                src={image.imageUrl}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
