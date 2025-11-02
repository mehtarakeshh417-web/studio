import { ContactForm } from './ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We're here to help. Reach out to us with any questions or to schedule a consultation.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-bold font-headline">Get in Touch Directly</h2>
                    <p className="mt-2 text-muted-foreground">
                        Find our contact details below. We look forward to hearing from you.
                    </p>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg flex-shrink-0">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Our Office</h3>
                        <p className="text-muted-foreground">123 Care Street, London, UK</p>
                    </div>
                </div>
                 <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg flex-shrink-0">
                        <Mail className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Email Us</h3>
                        <p className="text-muted-foreground">contact@symboliccare.co.uk</p>
                    </div>
                </div>
                 <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg flex-shrink-0">
                        <Phone className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">020 1234 5678</p>
                    </div>
                </div>
            </div>
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold font-headline mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
