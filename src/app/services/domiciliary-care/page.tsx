
import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const service = services.find(s => s.slug === 'domiciliary-care');

const section1Image = PlaceHolderImages.find(p => p.id === 'domiciliary-care-section-1');
const section2Image = PlaceHolderImages.find(p => p.id === 'domiciliary-care-section-2');
const heroImage = PlaceHolderImages.find(p => p.id === 'service-domiciliary-care');

const personalServices = [
    "Bathing, showering & washing",
    "Morning, Afternoon. Evening & night-time routine",
    "Oral hygiene",
    "Face, nail & hair care",
    "Support with shaving",
    "Meal preparation",
    "Gardening",
    "Household cleaning & chores",
    "Pet care services"
];

const healthServices = [
    "Frailty assessment",
    "Mobility support",
    "Movement & Exercise",
    "Support moving position in bed, to stretch & prevent sores",
    "Changing or maintaining a stoma or catheter bag",
    "Toileting & incontinence care",
    "Nutrition & hydration checks",
    "Dementia & Alzheimers care",
    "Support with medication",
    "Peg feeding And so much more"
];

const socialSupport = [
    "Chaperone Services for:",
    "Shopping",
    "A day out",
    "Places of worship",
    "Social gatherings",
    "Companionship",
    "Hospital appointments",
    "GP appointments",
    "Family celebrations And so much more"
];


export default function DomiciliaryCarePage() {
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
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-4xl px-4">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline">
                        {service.title}
                    </h1>
                    <p className="mt-6 text-lg md:text-xl">
                        {service.description}
                    </p>
                </div>
            </section>

            <div className="bg-background">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-24">
                    {/* Section 1 */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="prose lg:prose-lg max-w-none">
                            <h2 className="font-headline text-3xl font-bold">Our Care</h2>
                            <p>
                                At Symbolic Care, we are committed to delivering a comprehensive range of personalized Domiciliary Care services that cater to your unique needs and preferences. Whether you require occasional assistance or around-the-clock care, our skilled and compassionate caregivers will work closely with you to ensure that you receive the highest level of care and support.
                            </p>
                            <p>
                                We understand that maintaining your independence and well-being is crucial, and we strive to provide you with the tools and resources necessary to achieve these goals. With a focus on person-centred care, we aim to exceed your expectations and empower you to lead a fulfilling life in the comfort of your own home.
                            </p>
                             <Button asChild size="lg" className="mt-4">
                                <Link href="/contact">Enquire About Our Care</Link>
                            </Button>
                        </div>
                        <div>
                            {section1Image && (
                                <Image
                                    src={section1Image.imageUrl}
                                    alt="Our Care"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                                    data-ai-hint={section1Image.imageHint}
                                />
                            )}
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                         <div className="order-last md:order-first">
                            {section2Image && (
                                <Image
                                    src={section2Image.imageUrl}
                                    alt="Support at home"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                                    data-ai-hint={section2Image.imageHint}
                                />
                            )}
                        </div>
                        <div className="prose lg:prose-lg max-w-none">
                            <h2 className="font-headline text-3xl font-bold">Do I need support at home?</h2>
                            <p>
                                If you are someone who values their independence and wishes to continue living in the familiar surroundings of your own home, but requires additional support and assistance, in – Domiciliary Care may be the right choice for you.
                            </p>
                            <p>
                                Whether you have difficulty with daily routines such as bathing, dressing, and cooking, or require help with managing your medications and medical appointments, our team of skilled caregivers can provide the necessary support to ensure your comfort and safety.
                            </p>
                             <p>
                                At Symbolic Care, we understand that every home is unique and we work closely with you to identify any potential safety hazards and make the necessary adjustments to ensure that your living space is safe and secure. With our in – Domiciliary Care services, you can continue to enjoy the comforts of home while receiving the compassionate and personalized care that you deserve.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="text-center">
                        <h2 className="font-headline text-3xl font-bold">How We Can Support You</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our Domiciliary Care services are extensive and tailored to meet your specific needs. Here's a glimpse of how we can help.
                        </p>
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                            <div className="bg-card p-6 rounded-lg shadow-sm border border-primary/20">
                                <h3 className="font-headline text-xl font-bold mb-4">Personal Services</h3>
                                <ul className="space-y-2">
                                    {personalServices.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                             <div className="bg-card p-6 rounded-lg shadow-sm border border-primary/20">
                                <h3 className="font-headline text-xl font-bold mb-4">Health And Wellbeing</h3>
                                <ul className="space-y-2">
                                    {healthServices.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                             <div className="bg-card p-6 rounded-lg shadow-sm border border-primary/20">
                                <h3 className="font-headline text-xl font-bold mb-4">Social Support</h3>
                                <ul className="space-y-2">
                                    {socialSupport.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
