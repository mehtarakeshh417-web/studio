
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

const service = services.find(s => s.slug === 'respite-care');

const heroImage = PlaceHolderImages.find(p => p.id === 'respite-care-hero');
const dutiesImage = PlaceHolderImages.find(p => p.id === 'respite-care-duties');
const whyChooseImage = PlaceHolderImages.find(p => p.id === 'respite-care-choose');

const duties = [
    "Clinical Support – such as catheter care, medication prompts, or continence management.",
    "Personal Care – assistance with washing, dressing, bathing, toileting, or grooming.",
    "Mobility Support – helping individuals move safely around their home or use mobility aids.",
    "Companionship – emotional reassurance and meaningful social interaction throughout the day.",
    "Meal Preparation – preparing nutritious meals based on personal preferences.",
    "Light Housekeeping – laundry, tidying, and maintaining a comfortable living environment."
];

const whyChooseReasons = [
    "CQC-Regulated and Fully Insured Provider",
    "Trained Carers skilled in dementia, learning disabilities, and complex care",
    "Transparent Pricing with no hidden fees",
    "Flexible Short-Term and Long-Term Options",
    "24/7 Office Support and Emergency Response",
    "Family-Centred Approach that values your input and peace of mind"
];


export default function RespiteCarePage() {
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
            Because everyone deserves time to rest — with complete peace of mind.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-24">

            <section className="prose lg:prose-lg max-w-4xl mx-auto text-center">
                <p>
                    At Symbolic Care Group Ltd, we understand that caring for a loved one can be incredibly rewarding — but also physically and emotionally demanding. Our Respite Care services, also known as Short-Term Care, provide temporary relief for family carers or professional caregivers, allowing them to rest, recharge, or attend to other responsibilities while knowing their loved one is safe, supported, and cared for with dignity.
                </p>
                 <p>
                    Whether it’s for a few days, a few weeks, or longer, our respite care is flexible, reliable, and completely person-centred.
                </p>
            </section>

             <section>
                <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-2xl font-headline font-bold">What Is Respite Care?</AccordionTrigger>
                        <AccordionContent className="prose prose-lg max-w-none text-muted-foreground pt-4">
                            <p>Respite care is short-term support that offers carers a break while ensuring their loved ones continue to receive high-quality care in a familiar, comfortable setting. This can be planned in advance for example, when you’re going on holiday or need to recover from illness or arranged at short notice if an emergency arises.</p>
                            <p>We provide respite care to adults with learning disabilities, autism, mental health needs, physical disabilities, or age-related conditions, ensuring continuity of care that mirrors the individual’s usual daily routine.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-2xl font-headline font-bold">What Our Respite Carers Do?</AccordionTrigger>
                        <AccordionContent className="prose prose-lg max-w-none text-muted-foreground pt-4">
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <p>Our highly trained care professionals seamlessly integrate into the client’s established routine, ensuring minimal disruption. Before any care begins, our Care Manager completes a comprehensive assessment in your home to understand the person’s preferences, routines, and needs.</p>
                                    <p>A detailed support plan is then developed, so our carers know exactly how to deliver care the way you do.</p>
                                    <p className="font-bold mt-4">Typical respite care duties include:</p>
                                    <ul className="space-y-2 mt-2">
                                        {duties.map((duty, index) => (
                                            <li key={index} className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" /><span>{duty}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    {dutiesImage && (
                                        <Image
                                            src={dutiesImage.imageUrl}
                                            alt="Companion smiling"
                                            width={500}
                                            height={350}
                                            className="rounded-lg shadow-lg object-cover w-full h-auto aspect-[10/7]"
                                            data-ai-hint={dutiesImage.imageHint}
                                        />
                                    )}
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-2xl font-headline font-bold">What are the types of respite care we offer?</AccordionTrigger>
                        <AccordionContent className="prose prose-lg max-w-none text-muted-foreground pt-4">
                            <h4 className="font-bold">Live-In Respite Care</h4>
                            <p>A professional carer lives in your home 24 hours a day, providing around-the-clock support. Ideal for complex needs, short-term recovery, or full-time caregiver relief.</p>
                             <h4 className="font-bold mt-4">Visiting Respite Care</h4>
                            <p>For those who require shorter visits, from a few hours a day to a few days per week, our visiting carers provide flexible, part-time support that fits around your life.</p>
                            <p>We tailor every package to your exact requirements, ensuring flexibility, compassion, and complete transparency.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-2xl font-headline font-bold">Where Can Respite Care Take Place?</AccordionTrigger>
                        <AccordionContent className="prose prose-lg max-w-none text-muted-foreground pt-4">
                           <p>Respite care with Symbolic Care Group can take place:</p>
                           <ul className="list-disc pl-6 space-y-2">
                                <li>In your own home (our preferred model, to maintain comfort and familiarity);</li>
                                <li>In a supported living setting or assisted accommodation; or</li>
                                <li>Within a short-term residential care arrangement, where appropriate.</li>
                           </ul>
                           <p>If the carer is staying overnight, we simply request a separate room for them to rest during breaks.</p>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5">
                        <AccordionTrigger className="text-2xl font-headline font-bold">How Long Does Respite Care Last?</AccordionTrigger>
                        <AccordionContent className="prose prose-lg max-w-none text-muted-foreground pt-4">
                           <p>Respite care can last for:</p>
                           <ul className="list-disc pl-6 space-y-2">
                                <li>A few hours per day for planned or emergency cover;</li>
                                <li>Several days or weeks to allow a carer to take time off; or</li>
                                <li>Up to a month or longer, for example between hospital discharge and permanent care arrangements.</li>
                           </ul>
                           <p>We adapt to each situation — whether you need care once, occasionally, or at regular intervals throughout the year.</p>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-6">
                        <AccordionTrigger className="text-2xl font-headline font-bold">Funding and Payment Options</AccordionTrigger>
                        <AccordionContent className="prose prose-lg max-w-none text-muted-foreground pt-4">
                           <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Private Funding</strong> – You can pay directly for the care you choose.</li>
                                <li><strong>Local Authority Funding</strong> – Following an assessment, your local council may fully or partially fund respite care.</li>
                                <li><strong>Direct Payments</strong> – Funding is paid directly to you by the council, allowing you to choose your preferred care provider.</li>
                                <li><strong>NHS or Continuing Healthcare Funding</strong> – For individuals with specific medical or complex health needs.</li>
                                <li><strong>Equity Release or Private Financial Planning</strong> – For longer-term care solutions.</li>
                           </ol>
                            <p>Our care team can provide free advice on the most suitable and sustainable funding options.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="text-2xl font-headline font-bold">Respite Care Costs</AccordionTrigger>
                        <AccordionContent className="prose prose-lg max-w-none text-muted-foreground pt-4">
                            <p>At Symbolic Care Group Ltd, we believe in full transparency and no hidden charges.</p>
                             <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Live-In Respite Care:</strong> from £150 per day, with dedicated 24-hour support and a named Care Manager.</li>
                                <li><strong>Visiting Respite Care:</strong> from £19.75 per hour, with flexible scheduling to fit your needs.</li>
                           </ul>
                           <p>Prices may vary depending on location, level of support required, and duration of care. Every package includes continuous office support and care supervision.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger className="text-2xl font-headline font-bold">Who Uses Respite Care?</AccordionTrigger>
                        <AccordionContent className="prose prose-lg max-w-none text-muted-foreground pt-4">
                            <p>Respite care is suitable for:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Family carers who need a break or are going on holiday;</li>
                                <li>People recovering from illness or surgery before returning to independent living;</li>
                                <li>Individuals with disabilities or chronic conditions requiring temporary support;</li>
                                <li>Older adults needing short-term assistance while a relative is away.</li>
                            </ul>
                            <p>We provide respite care for all adults aged 18 and above, including younger adults with disabilities and older people requiring companionship or condition-led care.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="text-2xl font-headline font-bold">How to Arrange Respite Care?</AccordionTrigger>
                        <AccordionContent className="prose prose-lg max-w-none text-muted-foreground pt-4">
                             <p>Arranging respite care with us is simple and stress-free:</p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>Contact our care team via phone or email.</li>
                                <li>We’ll arrange a free, no-obligation home assessment to discuss your needs.</li>
                                <li>You’ll have the opportunity to share your preferences and routines.</li>
                                <li>We’ll match you with a skilled, compatible carer based on experience and personality.</li>
                                <li>Once confirmed, your support plan will be finalised — and care can begin right away.</li>
                            </ol>
                            <p>We are fully regulated by the Care Quality Commission (CQC), ensuring you can rest assured that your loved one is receiving safe, high-quality, and compassionate care.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

             <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div className="prose lg:prose-lg max-w-none">
                    <h2 className="font-headline text-3xl font-bold">Why Choose Symbolic Care Group?</h2>
                     <ul className="space-y-4">
                        {whyChooseReasons.map((reason, index) => (
                           <li key={index} className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" /><span>{reason}</span></li>
                        ))}
                    </ul>
                    <p>
                        At Symbolic Care Group Ltd, respite care isn’t just about covering a gap — it’s about ensuring continuity, compassion, and trust. Whether you’re caring for an elderly relative or an adult with complex needs, we’re here to help you take a well-earned break with complete confidence.
                    </p>
                </div>
                 <div>
                    {whyChooseImage && (
                        <Image
                            src={whyChooseImage.imageUrl}
                            alt="A yellow flower symbolizing care"
                            width={500}
                            height={350}
                            className="rounded-lg shadow-lg object-cover w-full h-auto aspect-[10/7]"
                            data-ai-hint={whyChooseImage.imageHint}
                        />
                    )}
                </div>
            </section>

            <section className="text-center">
                <h2 className="font-headline text-3xl font-bold">Get in Touch</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    If you’d like to learn more or arrange respite care for yourself or a loved one, please contact our friendly care team.
                </p>
                <Button asChild size="lg" className="mt-8">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </section>

        </div>
      </div>
    </div>
  );
}
