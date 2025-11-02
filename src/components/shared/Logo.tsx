import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Logo() {
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

  if (!logoImage) {
    return (
      <Link href="/" className="font-bold text-xl text-primary">
        Symbolic Care
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center" aria-label="Symbolic Care Home">
      <Image
        src={logoImage.imageUrl}
        alt={logoImage.description}
        width={360}
        height={80}
        priority
        className="h-14 w-auto"
        data-ai-hint={logoImage.imageHint}
      />
    </Link>
  );
}
