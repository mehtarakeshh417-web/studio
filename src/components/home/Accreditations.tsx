
import Image from 'next/image';
import Link from 'next/link';

const accreditations = [
  {
    name: 'CQC',
    imageUrl: 'https://i.supaimg.com/871cff10-f5c7-4a8f-b961-d95c7e0053b3.png',
    href: 'https://www.cqc.org.uk/provider/1-20703282817',
  },
  {
    name: 'ICO',
    imageUrl: 'https://i.supaimg.com/16f9e984-4b15-4e9d-ba54-b3bceb362dba.png',
    href: 'https://ico.org.uk/',
  },
  {
    name: 'Skills for Care',
    imageUrl: 'https://i.supaimg.com/1a9a1f14-79eb-42c1-b55b-b4262f7cccff.png',
    href: 'https://www.skillsforcare.org.uk/Home.aspx',
  },
  {
    name: 'Skills Provider',
    imageUrl: 'https://i.supaimg.com/8782d8dc-4457-498d-b2f3-2e4fac44622b.png',
    href: 'https://skillsprovider.org.uk/',
  },
  {
    name: 'Disability Confident Committed',
    imageUrl: 'https://i.supaimg.com/4e4d880d-0ad5-4a7e-be7e-fdf34814632f.png',
    href: 'https://www.gov.uk/government/publications/disability-confident-guidance-for-levels-1-2-and-3/level-1-disability-confident-committed',
  },
];

export function Accreditations() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container text-center animate-fade-in-up animation-delay-500">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-secondary-foreground">Our Accreditations</h2>
        <p className="mt-4 text-lg text-secondary-foreground/80">
          We are proud to be recognized by these leading industry bodies.
        </p>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {accreditations.map((accreditation) => (
            <Link
              key={accreditation.name}
              href={accreditation.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-[4.68rem] w-[9.36rem] hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src={accreditation.imageUrl}
                alt={`${accreditation.name} logo`}
                fill
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
