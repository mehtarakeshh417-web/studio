
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Briefcase, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Job } from './actions';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type JobListProps = {
  jobs: Job[];
  deleteJobAction: (id: string) => Promise<void>;
};

export function JobList({ jobs, deleteJobAction }: JobListProps) {
  const { toast } = useToast();

  const handleDelete = async (job: Job) => {
     try {
      await deleteJobAction(job.id);
      toast({
        title: 'Job Deleted',
        description: `The vacancy for "${job.title}" has been removed.`,
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: 'Could not delete the job. Please try again.',
      });
    }
  };

  if (jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center bg-card p-12 rounded-lg border border-dashed">
        <h3 className="font-headline text-xl font-bold">No Jobs Posted</h3>
        <p className="text-muted-foreground mt-2">
          Use the form on the left to add a new job vacancy.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id} className="flex items-center justify-between p-4">
          <div className="flex-grow">
            <h3 className="font-bold">{job.title}</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
                <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {job.type}</span>
            </div>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Delete job">
                    <Trash2 className="h-5 w-5 text-destructive" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will permanently delete the job opening for &quot;{job.title}&quot;. This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(job)} className="bg-destructive hover:bg-destructive/90">
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Card>
      ))}
    </div>
  );
}
