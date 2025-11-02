
import { JobList } from "./JobList";
import { AddJobForm } from "./AddJobForm";
import { getJobs, addJob, deleteJob } from "./actions";

export default async function AdminDashboardPage() {
  const jobs = await getJobs();

  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-headline text-4xl font-bold text-center mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground text-center mb-12">
          Manage job vacancies for your careers page.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
             <h2 className="font-headline text-2xl font-bold mb-4">Add New Vacancy</h2>
            <AddJobForm addJobAction={addJob} />
          </div>
          <div className="md:col-span-2">
            <h2 className="font-headline text-2xl font-bold mb-4">Current Vacancies</h2>
            <JobList jobs={jobs} deleteJobAction={deleteJob} />
          </div>
        </div>
      </div>
    </div>
  );
}
