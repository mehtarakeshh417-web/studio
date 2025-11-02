import { pageData } from "@/lib/data";
import { CheckCircle } from "lucide-react";

const reasons = [
    {
        title: "GP-Led Care",
        description: "Our services are overseen by general practitioners, ensuring a high standard of clinical excellence and safety."
    },
    {
        title: "Person-Centered Approach",
        description: "We create bespoke care plans that are tailored to the individual needs, preferences, and goals of each client."
    },
    {
        title: "Ethical and Transparent",
        description: "We operate with complete transparency and adhere to the highest ethical standards in all our interactions."
    },
    {
        title: "Highly-Trained Carers",
        description: "Our carers are not only qualified and experienced but also undergo continuous training and development."
    },
    {
        title: "Compassionate Support",
        description: "We believe in caring with kindness and empathy, building trusting relationships with our clients and their families."
    },
    {
        title: "Flexible and Reliable",
        description: "We offer a range of flexible services and are committed to providing reliable and consistent support."
    }
]

export default function WhyChooseUsPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-headline text-4xl font-bold">{pageData.whyChooseUs.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{pageData.whyChooseUs.content}</p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
            <div key={reason.title} className="bg-card p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">{reason.title}</h3>
                        <p className="mt-1 text-muted-foreground">{reason.description}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
