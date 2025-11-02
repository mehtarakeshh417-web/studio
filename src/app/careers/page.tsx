
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getJobs } from '@/app/admin/dashboard/actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Briefcase, FileText, Info, DollarSign, Award } from 'lucide-react';

export default async function CareersPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'careers-hero');
  const jobs = await getJobs();

  return (
    <div>
      <section className="relative h-[50vh] min-h-[300px] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Join our dedicated team"
            fill
            priority
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline text-primary-foreground">
            Join Our Team
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/90">
            Make a meaningful impact. Build a fulfilling career in care with us.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-headline text-3xl font-bold">Current Openings</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are looking for compassionate and dedicated individuals to join our growing team. Explore our open positions below and start your journey with Symbolic Care today.
            </p>
          </div>

          {jobs.length > 0 ? (
            <div className="space-y-8">
              {jobs.map((job) => (
                <Card key={job.id} className="flex flex-col md:flex-row">
                  <CardHeader className="flex-grow">
                    <CardTitle className="font-headline text-2xl">{job.title}</CardTitle>
                    <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
                      <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {job.location}</span>
                      <span className="flex items-center gap-2"><Briefcase className="h-4 w-4" /> {job.type}</span>
                      <span className="flex items-center gap-2"><DollarSign className="h-4 w-4" /> {job.salary}</span>
                      <span className="flex items-center gap-2"><Award className="h-4 w-4" /> {job.experienceLevel}</span>
                    </CardDescription>
                    <div className="pt-4 space-y-4 text-sm text-muted-foreground">
                        <div>
                            <h4 className="font-bold text-foreground">Description</h4>
                            <p className="line-clamp-2">{job.description}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground">Key Responsibilities</h4>
                            <p className="line-clamp-2">{job.responsibilities}</p>
                        </div>
                         <div>
                            <h4 className="font-bold text-foreground">Required Skills</h4>
                            <p className="line-clamp-2">{job.skills}</p>
                        </div>
                    </div>
                  </CardHeader>
                  <CardFooter className="p-6 items-center border-t md:border-t-0 md:border-l">
                    <Button asChild className="w-full md:w-auto">
                       <Link href={`/careers/apply?jobId=${job.id}&jobTitle=${encodeURIComponent(job.title)}`}>
                        <FileText className="mr-2 h-4 w-4" /> Apply Now
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center bg-card p-12 rounded-lg border">
                <Info className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-headline text-2xl font-bold">No Open Positions</h3>
                <p className="mt-4 text-lg text-muted-foreground">
                    There are currently no vacancies available. Please check back later.
                </p>
                 <p className="mt-2 text-muted-foreground">
                    Alternatively, you can send us your CV, and we will contact you if a suitable position becomes available.
                </p>
                <Button asChild size="lg" className="mt-8">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
