import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Logo() {
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

  if (!logoImage) {
    return (
      <Link href="/" className="font-bold text-2xl text-primary">
        Symbolic Care
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center" aria-label="Symbolic Care Home">
      <Image
        src={logoImage.imageUrl}
        alt={logoImage.description}
        width={480}
        height={100}
        priority
        className="h-40 w-auto"
        data-ai-hint={logoImage.imageHint}
      />
    </Link>
  );
}
