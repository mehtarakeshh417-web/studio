import { pageData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="container py-16">
      <div className="prose lg:prose-xl max-w-4xl mx-auto text-center">
        <h1 className="font-headline text-4xl font-bold">{pageData.support.title}</h1>
        <p className="lead">{pageData.support.content}</p>
        <p>
            Our team is available to answer your questions and provide the information you need to make an informed decision. We are committed to being a trusted partner in your care journey.
        </p>
        <Button asChild size="lg" className="mt-6">
            <Link href="/contact">Contact Our Team</Link>
        </Button>
      </div>
    </div>
  );
}
