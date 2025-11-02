
import { supportResources } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { icons } from "lucide-react";
import Link from 'next/link';
import { ExternalLink } from "lucide-react";

export default function SpecialistServicesPage() {
  const specialistCategories = supportResources.filter(
    (category) =>
      category.category !== 'Government and Training Guidance' &&
      category.category !== 'Useful Emergency / Urgent Contacts'
  );

  return (
    <div className="container py-16">
      <div className="prose lg:prose-xl max-w-4xl mx-auto text-center">
        <h1 className="font-headline text-4xl font-bold">Specialist Services</h1>
        <p className="lead">
          Find trusted information, advice, and support from leading UK-based organizations dedicated to various specialist care areas.
        </p>
      </div>

      <div className="mt-16 space-y-12">
        {specialistCategories.map((category) => {
            const LucideIcon = category.icon ? icons[category.icon as keyof typeof icons] : null;
            return (
                <Card key={category.category} className="overflow-hidden">
                    <CardHeader className="bg-muted">
                        <CardTitle className="flex items-center gap-3 text-2xl font-headline">
                            {LucideIcon && <LucideIcon className="h-7 w-7 text-primary" />}
                            {category.category}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                       <ul className="divide-y">
                         {category.links.map(link => (
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
            )
        })}
      </div>
    </div>
  );
}
