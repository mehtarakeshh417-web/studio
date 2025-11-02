
import { CheckCircle, Heart, Award, CalendarClock, TrendingUp, ShieldCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'why-choose-us-hero');

const reasons: { title: string; description: string; icon: LucideIcon }[] = [
    {
        title: "Personalized, Compassionate Care",
        description: "We understand that each individual has unique needs. Our approach to care is fully personalized—we work with you to develop a care plan tailored specifically to you.",
        icon: Heart
    },
    {
        title: "Experienced and Skilled Caregivers",
        description: "Our team is comprised of highly trained, compassionate caregivers with extensive experience in providing care for individuals with a variety of needs.",
        icon: Award
    },
    {
        title: "Flexible Care Options",
        description: "Whether you need care for just a few hours a week or 24-hour live-in support, we offer flexible options to suit your specific needs, which can be adjusted as your needs change.",
        icon: CalendarClock
    },
    {
        title: "Promoting Independence",
        description: "We are dedicated to helping you maintain as much independence as possible, empowering you to live an active and fulfilling life.",
        icon: TrendingUp
    },
    {
        title: "Focus on Safety and Well-Being",
        description: "Your safety is our top priority. Our caregivers are trained to ensure your environment is safe, minimizing risks and promoting overall well-being.",
        icon: ShieldCheck
    },
    {
        title: "Companionship and Emotional Support",
        description: "Care is not just about physical support—it’s also about emotional and social well-being. Our caregivers provide companionship and meaningful support.",
        icon: Users
    }
];

export default function WhyChooseUsPage() {
  return (
    <div className="bg-background">
        <section className="relative h-[50vh] min-h-[300px] w-full flex items-center justify-center text-center text-white">
            {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt="A compassionate caregiver"
                fill
                priority
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
            />
            )}
            <div className="absolute inset-0 bg-primary/80" />
            <div className="relative z-10 max-w-4xl px-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline text-primary-foreground">
                Why Choose Symbolic Care
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/90">
                Your trust is our highest priority. Discover the difference our compassionate care makes.
            </p>
            </div>
        </section>

        <div className="container py-16 sm:py-24">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Your Partner in Exceptional Care</h2>
                <p className="mt-6 text-lg text-muted-foreground">
                    At Symbolic Care, we believe in delivering exceptional, person-centered care that makes a real difference. Choosing us means entrusting your care to a dedicated team who prioritize dignity, respect, and independence.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {reasons.map((reason) => {
                    const Icon = reason.icon;
                    return (
                        <div key={reason.title} className="bg-card p-8 rounded-lg shadow-sm border border-transparent hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/10 text-primary p-4 rounded-full">
                                    <Icon className="h-8 w-8" />
                                </div>
                                <h3 className="mt-6 text-xl font-bold font-headline">{reason.title}</h3>
                                <p className="mt-2 text-muted-foreground">{reason.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
}
