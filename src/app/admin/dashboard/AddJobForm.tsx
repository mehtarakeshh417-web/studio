
'use client';

import { useForm, useFormState } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import type { Job } from './actions';
import { generateJobDescription } from '@/ai/flows/job-description-flow';
import { Sparkles, Loader2 } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters.'),
  location: z.string().min(2, 'Location is required.'),
  type: z.enum(['Full-time', 'Part-time', 'Contract']),
  salary: z.string().min(3, 'Salary is required.'),
  experienceLevel: z.enum(['Entry-Level', 'Mid-Level', 'Senior']),
  description: z.string().min(20, 'Description must be at least 20 characters.'),
  responsibilities: z.string().min(20, 'Responsibilities must be at least 20 characters.'),
  skills: z.string().min(10, 'Skills must be at least 10 characters.'),
});


type AddJobFormValues = z.infer<typeof formSchema>;

type AddJobFormProps = {
  addJobAction: (data: Omit<Job, 'id'>) => Promise<void>;
};

function SubmitButton() {
  const { isSubmitting } = useFormState();
  return (
    <Button type="submit" className="w-full" disabled={isSubmitting}>
      {isSubmitting ? 'Adding Job...' : 'Add Job'}
    </Button>
  );
}

export function AddJobForm({ addJobAction }: AddJobFormProps) {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<AddJobFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      location: '',
      type: 'Full-time',
      salary: '',
      experienceLevel: 'Entry-Level',
      description: '',
      responsibilities: '',
      skills: '',
    },
  });

  const handleGenerateDescription = async () => {
    const title = form.getValues('title');
    if (!title) {
      toast({
        variant: 'destructive',
        title: 'Title is required',
        description: 'Please enter a job title before generating.',
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateJobDescription({ title });
      form.setValue('description', result.description, { shouldValidate: true });
      form.setValue('responsibilities', result.responsibilities, { shouldValidate: true });
      form.setValue('skills', result.skills, { shouldValidate: true });
      toast({
        title: 'Content Generated',
        description: 'Job details have been filled in.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: 'Could not generate job description. Please try again.',
      });
    } finally {
      setIsGenerating(false);
    }
  };


  const onSubmit = async (values: AddJobFormValues) => {
    try {
      await addJobAction(values);
      toast({
        title: 'Job Added Successfully',
        description: `The vacancy for "${values.title}" has been posted.`,
      });
      form.reset();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: 'Could not add the job. Please try again.',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-card p-6 rounded-lg border">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <div className="flex gap-2 items-center">
                <FormControl>
                  <Input placeholder="e.g., Senior Care Assistant" {...field} />
                </FormControl>
                <Button type="button" variant="outline" size="icon" onClick={handleGenerateDescription} disabled={isGenerating} aria-label="Generate with AI">
                  {isGenerating ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="e.g., London" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Job Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a job type" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="experienceLevel"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Experience Level</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    <SelectItem value="Entry-Level">Entry-Level</SelectItem>
                    <SelectItem value="Mid-Level">Mid-Level</SelectItem>
                    <SelectItem value="Senior">Senior</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary</FormLabel>
              <FormControl>
                <Input placeholder="e.g., £30,000 per year" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the role, responsibilities, and requirements..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="responsibilities"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key Responsibilities</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="List the key responsibilities of the role..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Required Skills</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="List the required skills, qualifications, or experience..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
    </Form>
  );
}
