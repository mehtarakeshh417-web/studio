import { pageData } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="container py-16">
      <div className="prose lg:prose-xl max-w-4xl mx-auto">
        <h1 className="font-headline text-4xl font-bold">{pageData.about.title}</h1>
        <p className="lead">{pageData.about.content}</p>
        <p>
            Our team of dedicated professionals is the backbone of our service. We are nurses, carers, and support staff who are passionate about what we do. We believe in building strong relationships with our clients based on trust, respect, and open communication. Our commitment to excellence is reflected in our rigorous training programs and our continuous efforts to improve and innovate our care practices.
        </p>
        <p>
            Based in the heart of London, we are proud to serve our local community, offering a familiar and friendly face to those who need it most. We understand the importance of home and are dedicated to helping our clients live there safely and happily for as long as possible.
        </p>
      </div>
    </div>
  );
}
