import { notFound } from 'next/navigation';
import { supportResources } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { icons } from "lucide-react";
import Link from 'next/link';
import { ExternalLink } from "lucide-react";

type SpecialistServicePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return supportResources
    .filter(r => r.category !== 'Government and Training Guidance' && r.category !== 'Useful Emergency / Urgent Contacts')
    .map((resource) => ({
      slug: resource.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'),
    }));
}

export default function SpecialistServicePage({ params }: SpecialistServicePageProps) {
  const categoryData = supportResources.find(r => r.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === params.slug);

  if (!categoryData) {
    notFound();
  }

  const { category, icon, links } = categoryData;
  const LucideIcon = icon ? icons[icon as keyof typeof icons] : null;

  return (
    <div className="container py-16">
      <div className="prose lg:prose-xl max-w-4xl mx-auto mb-12">
        <h1 className="font-headline text-4xl font-bold flex items-center gap-4">
          {LucideIcon && <LucideIcon className="h-10 w-10 text-primary" />}
          {category}
        </h1>
        <p className="lead">
          Find trusted information, advice, and support from leading UK-based organizations dedicated to {category.toLowerCase()}.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Support Links & Resources</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="divide-y">
            {links.map(link => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block p-6 hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-lg text-primary">{link.name}</p>
                      <p className="text-muted-foreground mt-1">{link.description}</p>
                    </div>
                    {link.url.startsWith('http') && <ExternalLink className="h-5 w-5 text-muted-foreground ml-4 flex-shrink-0" />}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
