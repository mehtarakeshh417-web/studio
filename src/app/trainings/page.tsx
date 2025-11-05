
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const heroImage = PlaceHolderImages.find(p => p.id === 'trainings-hero');
const section1Image = PlaceHolderImages.find(p => p.id === 'trainings-section-1');
const section2Image = PlaceHolderImages.find(p => p.id === 'trainings-section-2');
const oliverMcGowanLogo = PlaceHolderImages.find(p => p.id === 'oliver-mcgowan-logo');


export default function TrainingsPage() {
  return (
    <div>
      <section className="relative h-[50vh] min-h-[300px] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="A team in a training session"
            fill
            priority
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline text-primary-foreground">
            Training & Development
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/90">
            Investing in our team to deliver outstanding, compassionate care.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-24">

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div className="prose lg:prose-lg max-w-none">
                    <h2 className="font-headline text-3xl font-bold">Our Commitment to Excellence</h2>
                    <p className="text-muted-foreground">
                        At Symbolic Care Group, we are committed to delivering safe, effective and person-centred care by investing in high-quality staff development. Our training and qualification programmes are aligned with CQC expectations and sector-recognised standards to ensure our team has the skills, knowledge and values needed to deliver outstanding care.
                    </p>
                    <p className="text-muted-foreground">We provide a structured learning pathway including:</p>
                    <ul>
                        <li>Care Certificate training and support</li>
                        <li>Level 2, Level 3 and Level 5 Health and Social Care qualifications (RQF)</li>
                        <li>Mandatory and statutory training aligned with Skills for Care</li>
                        <li>Continuous professional development for frontline and leadership teams</li>
                        <li>Specialist training tailored to diverse care needs and service types</li>
                    </ul>
                </div>
                <div>
                    {section1Image && (
                        <Image
                            src={section1Image.imageUrl}
                            alt="A group of caregivers in a training session"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg object-cover w-full h-auto"
                            data-ai-hint={section1Image.imageHint}
                        />
                    )}
                </div>
            </section>

             <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="prose lg:prose-lg max-w-none order-last md:order-first">
                    <h2 className="font-headline text-3xl font-bold">Aligned with Quality Standards</h2>
                    <p className="text-muted-foreground">
                       Our programmes are designed in line with the CQC's key questions, supporting competence in:
                    </p>
                     <ul>
                        <li>Safe practice and safeguarding</li>
                        <li>Effective, evidence-based care</li>
                        <li>Compassionate and dignity-led support</li>
                        <li>Responsive delivery that meets individual needs</li>
                        <li>Well-led culture focused on quality and improvement</li>
                    </ul>
                    <p className="text-muted-foreground">
                        With our training pathways and strong partner network, we equip our workforce with up-to-date knowledge, confidence and practical skills that meet regulatory standards and enhance the quality of care we provide. When we invest in our people, the individuals we support receive compassionate, high-quality and safe care they can trust.
                    </p>
                     <p className="text-muted-foreground">To support high-quality learning, we proudly work in partnership with:</p>
                      <div className="flex items-center gap-8 mt-4">
                        <Link href="https://www.skillsprovider.co.uk" target="_blank" rel="noopener noreferrer" className="relative w-40 h-16">
                            <Image src="https://i.supaimg.com/8782d8dc-4457-498d-b2f3-2e4fac44622b.png" alt="Skills Provider Limited Logo" layout="fill" objectFit="contain" />
                        </Link>
                        <Link href="https://www.flourishlearning.co.uk" target="_blank" rel="noopener noreferrer" className="relative w-40 h-16">
                           <Image src="https://res.cloudinary.com/dncupgwgb/image/upload/v1762366462/download_jk7oxz.jpg" alt="Flourish Learning Logo" layout="fill" objectFit="contain" />
                        </Link>
                     </div>
                </div>
                 <div>
                    {section2Image && (
                        <Image
                            src={section2Image.imageUrl}
                            alt="A carer receiving a certificate"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg object-cover w-full h-auto"
                            data-ai-hint={section2Image.imageHint}
                        />
                    )}
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-muted p-8 md:p-12 rounded-lg">
                <div>
                     {oliverMcGowanLogo && (
                        <Image
                            src={oliverMcGowanLogo.imageUrl}
                            alt="Oliver McGowan Training Logo"
                            width={400}
                            height={200}
                            className="object-contain w-full h-auto mx-auto"
                            data-ai-hint={oliverMcGowanLogo.imageHint}
                        />
                    )}
                </div>
                <div className="prose lg:prose-lg max-w-none">
                    <h2 className="font-headline text-3xl font-bold">Oliver McGowan Training</h2>
                    <p className="text-muted-foreground">
                       At Symbolic Care Group, we are committed to promoting safe, compassionate and inclusive care for every individual. As part of our dedication to improving learning disability and autism awareness across the sector, we facilitate access to the Oliver McGowan Mandatory Training on Learning Disability and Autism.
                    </p>
                    <p className="text-muted-foreground">
                        This training is delivered in partnership with our approved training provider, Skills Provider Ltd, who are authorised to deliver the Oliver McGowan Training programme. Through this collaboration, we ensure our learners receive high-quality, evidence-based training that meets national standards and supports best practice across health and social care settings.
                    </p>
                    <p className="text-muted-foreground">
                       Participants will gain essential knowledge, enhanced confidence, and practical understanding to support people with learning disabilities and autistic people with dignity, empathy, and respect.
                    </p>
                    <Button asChild>
                        <Link href="https://skillsprovider.org.uk/the-oliver-mcgowan-training/" target="_blank" rel="noopener noreferrer">Learn More</Link>
                    </Button>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
}
