import { pageData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="container py-16">
      <div className="prose lg:prose-xl max-w-4xl mx-auto text-center">
        <h1 className="font-headline text-4xl font-bold">{pageData.careers.title}</h1>
        <p className="lead">{pageData.careers.content}</p>
        <p>
            We offer competitive pay, flexible working hours, and a supportive team environment. If you are looking for a fulfilling career where you can truly make a difference, we would love to hear from you.
        </p>
        <Button asChild size="lg" className="mt-6">
            <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  );
}
