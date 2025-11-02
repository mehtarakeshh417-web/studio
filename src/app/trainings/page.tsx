import { pageData } from "@/lib/data";

export default function TrainingsPage() {
  return (
    <div className="container py-16">
      <div className="prose lg:prose-xl max-w-4xl mx-auto">
        <h1 className="font-headline text-4xl font-bold">{pageData.trainings.title}</h1>
        <p className="lead">{pageData.trainings.content}</p>
        <p>
          Our comprehensive training curriculum includes:
        </p>
        <ul>
            <li>Mandatory Health & Safety Training</li>
            <li>First Aid and Basic Life Support</li>
            <li>Medication Administration</li>
            <li>Moving and Handling</li>
            <li>Dementia and Alzheimer's Care</li>
            <li>Palliative and End-of-Life Care</li>
            <li>Communication and Interpersonal Skills</li>
        </ul>
        <p>
            By investing in our team, we ensure that we are providing the highest quality of care to our clients, backed by the latest industry standards and best practices.
        </p>
      </div>
    </div>
  );
}
