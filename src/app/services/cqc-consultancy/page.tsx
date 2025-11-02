
import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, ShieldCheck, Users, Mic, Award } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const service = services.find(s => s.slug === 'cqc-consultancy');

const heroImage = PlaceHolderImages.find(p => p.id === 'cqc-hero');
const promiseImage = PlaceHolderImages.find(p => p.id === 'cqc-promise');

const whyChooseUs = [
    "Hands-on support from experienced care compliance professionals",
    "Clear, step-by-step guidance through the CQC registration journey",
    "Real-world coaching on leadership, governance and inspection readiness",
    "Tailored documentation built around your service model",
    "Friendly, practical support that boosts confidence as well as competence"
];

const ourServices = [
    {
        title: "New Provider Registration",
        description: "CQC registration consultancy for registering new domiciliary and supported living services.",
        icon: ShieldCheck
    },
    {
        title: "GP-Led Interview Coaching",
        description: "GP-led interview preparation and mock interview coaching.",
        icon: Users
    },
    {
        title: "Live Training Sessions",
        description: "Live Teams training sessions designed for new providers and managers.",
        icon: Mic
    }
];

const interviewPrep = [
    "NHS GP-delivered insight into CQC processes and expectations",
    "One-to-one online training via Microsoft Teams",
    "Mock interviews with real inspection-style questions",
    "Practical feedback to build confidence and clarity",
    "Ideal for Registered Manager applicants, Nominated Individuals, Aspirant managers and new providers"
];

export default function CqcConsultancyPage() {
  if (!service) return null;

  return (
    <div>
      <section className="relative h-[50vh] min-h-[300px] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={service.title}
            fill
            priority
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline text-primary-foreground">
            {service.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/90">
            Your expert partner in CQC compliance and registration.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-24">

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="prose lg:prose-lg max-w-none">
                    <h2 className="font-headline text-3xl font-bold">Why Choose Symbolic Care?</h2>
                    <p className="text-muted-foreground">
                        Navigating the CQC registration process can be complex. We provide the expert, hands-on support you need to succeed with confidence.
                    </p>
                    <ul className="mt-6 space-y-4">
                        {whyChooseUs.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div className="bg-muted p-8 rounded-lg">
                    <h3 className="font-headline text-2xl font-bold text-center mb-6">Our Core Services</h3>
                    <div className="space-y-6">
                        {ourServices.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Card key={item.title} className="bg-card">
                                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                        <div className="p-3 bg-primary/10 rounded-full">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                 </div>
            </section>

            <section className="bg-primary/5 p-12 rounded-lg">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h2 className="font-headline text-3xl font-bold">GP-Led CQC Interview Preparation</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                           Gain a competitive edge with our specialist interview coaching, designed and delivered by an NHS GP.
                        </p>
                    </div>
                    <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {interviewPrep.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

             <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div>
                    {promiseImage && (
                        <Image
                            src={promiseImage.imageUrl}
                            alt="Our promise to you"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg object-cover w-full h-auto aspect-[3/2]"
                            data-ai-hint={promiseImage.imageHint}
                        />
                    )}
                 </div>
                <div className="prose lg:prose-lg max-w-none">
                    <h2 className="font-headline text-3xl font-bold">Our Promise to You</h2>
                    <p className="text-muted-foreground">
                        We don’t overwhelm you with jargon. We guide you clearly, support you personally, and help you feel ready, organised and confident throughout your CQC journey.
                    </p>
                     <Button asChild size="lg" className="mt-4">
                        <Link href="/contact">Start Your Journey Today</Link>
                    </Button>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
}
