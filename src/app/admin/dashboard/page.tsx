
import { JobList } from "./JobList";
import { AddJobForm } from "./AddJobForm";
import { ApplicationList } from "./ApplicationList";
import { getJobs, addJob, deleteJob, getApplications } from "./actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Briefcase } from "lucide-react";

export default async function AdminDashboardPage() {
  const jobs = await getJobs();
  const applications = await getApplications();

  return (
    <div className="container py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-headline text-4xl font-bold text-center mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground text-center mb-12">
          Manage job vacancies and view candidate applications.
        </p>
        
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="jobs">
              <Briefcase className="mr-2 h-4 w-4" />
              Job Vacancies
            </TabsTrigger>
            <TabsTrigger value="applications">
               <Users className="mr-2 h-4 w-4" />
              Applications ({applications.length})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="jobs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              <div className="md:col-span-1">
                <h2 className="font-headline text-2xl font-bold mb-4">Add New Vacancy</h2>
                <AddJobForm addJobAction={addJob} />
              </div>
              <div className="md:col-span-2">
                <h2 className="font-headline text-2xl font-bold mb-4">Current Vacancies</h2>
                <JobList jobs={jobs} deleteJobAction={deleteJob} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="applications">
             <ApplicationList applications={applications} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
