
import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle } from 'lucide-react';

const service = services.find(s => s.slug === 'supported-living-services');

const heroImage = PlaceHolderImages.find(p => p.id === 'supported-living-hero');
const introImage = PlaceHolderImages.find(p => p.id === 'supported-living-intro');
const offerImage = PlaceHolderImages.find(p => p.id === 'supported-living-offer');

export default function SupportedLivingPage() {
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
            Empowering independence with the right support.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <div className="container py-16 space-y-24">
          
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-lg max-w-none">
              <h2 className="font-headline text-3xl font-bold">Live Life on Your Terms</h2>
              <p>
                At Symbolic Care Group Ltd, we believe that everyone deserves the chance to live with dignity, choice, and control. Our Supported Living services are designed for adults who may need some assistance with daily life but wish to live as independently as possible in their own homes.
              </p>
              <p>
                We support individuals with learning disabilities, autism, mental health needs, physical disabilities, and complex care requirements, helping them build confidence and lead fulfilling lives within their communities.
              </p>
            </div>
            <div>
              {introImage && (
                <Image
                  src={introImage.imageUrl}
                  alt="Empowering independence"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                  data-ai-hint={introImage.imageHint}
                />
              )}
            </div>
          </section>

          <section>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-headline font-bold">What is Supported Living?</AccordionTrigger>
                <AccordionContent className="prose prose-lg max-w-none text-muted-foreground pt-4">
                  <p>
                    Supported Living is a flexible care and housing arrangement that enables people to live in their own homes — either alone or with others — while receiving tailored support to meet their specific needs.
                  </p>
                  <p>
                    Unlike traditional residential care, Supported Living offers individuals greater independence and autonomy. The person holds their own tenancy or occupancy agreement, chooses how their day is structured, and decides what support they want and when.
                  </p>
                  <p>
                    Our role is to ensure each person has the right balance between freedom and professional support, promoting independence and wellbeing every step of the way.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-2xl font-headline font-bold">What are the Benefits of Supported Living?</AccordionTrigger>
                <AccordionContent className="prose prose-lg max-w-none text-muted-foreground pt-4">
                    <ul className="space-y-4">
                        <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" /><div><strong>Increased Independence:</strong> Live in your own home with control over your daily routine, supported by trained staff when needed.</div></li>
                        <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" /><div><strong>Personalised Support:</strong> Our support is tailored to your unique goals — from managing household tasks and budgeting to accessing healthcare, education, or employment.</div></li>
                        <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" /><div><strong>Community Inclusion:</strong> We encourage social participation and community connection through local activities, volunteering, and shared experiences.</div></li>
                        <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" /><div><strong>Flexibility and Security:</strong> Support levels can be adjusted over time to match your changing needs, offering stability and reassurance.</div></li>
                        <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" /><div><strong>Opportunities and Growth:</strong> With our help, individuals gain skills, confidence, and access to new opportunities, from personal hobbies to career ambitions.</div></li>
                    </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="order-last md:order-first">
              {offerImage && (
                <Image
                  src={offerImage.imageUrl}
                  alt="Our Commitment"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                  data-ai-hint={offerImage.imageHint}
                />
              )}
            </div>
            <div className="prose lg:prose-lg max-w-none">
              <h2 className="font-headline text-3xl font-bold">What We Offer</h2>
              <p>
                Symbolic Care Group provides a range of Supported Living options for adults aged 18 and over, ensuring a person-centred approach to care and accommodation:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" /><span><strong>Shared Living with Support Staff:</strong> Shared homes with on-site or visiting support, fostering companionship and shared learning.</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" /><span><strong>Independent Housing with Flexible Support:</strong> Private accommodation with scheduled visits or 24-hour backup support.</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" /><span><strong>Accommodation with Support:</strong> Fully supported homes tailored to individuals who require structured daily assistance.</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" /><span><strong>Shared Lives Scheme:</strong> A homely arrangement where individuals live with approved carers who offer ongoing care and inclusion within family life.</span></li>
              </ul>
              <p>We have proudly supported many people to transition successfully from residential care or family homes into their own supported environments creating safe, empowering spaces to thrive.</p>
            </div>
          </section>

          <section className="prose lg:prose-lg max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-3xl font-bold">Our Commitment &amp; Locations</h2>
             <p>
                We follow the CQC Fundamental Standards of Care and the REACH Standards for Supported Living, ensuring that every person we support has choice and control, can access community opportunities, and lives in a home that feels truly their own. Every arrangement is developed in partnership with individuals, families, and local authorities.
            </p>
             <p>
                Our Supported Living services are available across Chelmsford and Colchester, with new schemes being developed in partnership with trusted landlords and housing providers.
            </p>
          </section>

          <section className="text-center">
            <h2 className="font-headline text-3xl font-bold">Ready to Find Your Home?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              If you’d like to learn more about our Supported Living services or discuss a placement, please contact our team. Live independently. Stay connected. Be supported — the Symbolic way.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </section>

        </div>
      </div>
    </div>
  );
}
