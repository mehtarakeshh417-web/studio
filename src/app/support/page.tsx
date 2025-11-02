import { pageData, supportResources } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { icons } from "lucide-react";
import Link from 'next/link';
import { ExternalLink } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="container py-16">
      <div className="prose lg:prose-xl max-w-4xl mx-auto text-center">
        <h1 className="font-headline text-4xl font-bold">{pageData.support.title}</h1>
        <p className="lead">{pageData.support.content}</p>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {supportResources.map((category) => {
            const LucideIcon = category.icon ? icons[category.icon as keyof typeof icons] : null;
            return (
                <Card key={category.category} className="overflow-hidden flex flex-col">
                    <CardHeader className="bg-muted">
                        <CardTitle className="flex items-center gap-3 text-2xl font-headline">
                            {LucideIcon && <LucideIcon className="h-7 w-7 text-primary" />}
                            {category.category}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                       <ul className="divide-y h-full flex flex-col">
                         {category.links.map(link => (
                            <li key={link.name} className="flex-grow">
                                <Link 
                                    href={link.url}
                                    target={link.url.startsWith('http') || link.url.startsWith('tel:') ? '_blank' : undefined}
                                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="block p-6 hover:bg-primary/5 transition-colors h-full"
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
