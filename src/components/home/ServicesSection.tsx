import { services } from '@/lib/data';
import { HomeServiceCard } from '@/components/home/HomeServiceCard';

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Core Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive, person-centered care designed to meet your unique needs.
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <HomeServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
