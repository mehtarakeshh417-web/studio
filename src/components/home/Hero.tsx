
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
  
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl px-4 animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline">
          A Reliable and Ethical GP led Care Provider
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90">
          Providing compassionate and professional adult care services in London.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/services">Our Services</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
