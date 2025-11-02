import { services } from '@/lib/data';
import { ServiceCard } from '@/components/services/ServiceCard';

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a wide range of person-centered care services to support you in your own home.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
