
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
import { useToast } from '@/hooks/use-toast';
import { submitApplication } from '@/app/admin/dashboard/actions';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  cv: z.instanceof(FileList).refine((files) => files?.length === 1, "CV is required."),
});

type ApplicationFormValues = z.infer<typeof formSchema>;

type ApplicationFormProps = {
  jobId: string;
  jobTitle: string;
};

function SubmitButton() {
  const { isSubmitting } = useFormState();
  return (
    <Button type="submit" className="w-full" disabled={isSubmitting}>
      {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
    </Button>
  );
}

export function ApplicationForm({ jobId, jobTitle }: ApplicationFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const cvRef = form.register("cv");

  const onSubmit = async (values: ApplicationFormValues) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('jobId', jobId);
    formData.append('jobTitle', jobTitle);
    if (values.cv[0]) {
      formData.append('cv', values.cv[0]);
    }

    const result = await submitApplication(formData);

    if (result.success) {
      toast({
        title: "Application Sent!",
        description: "Thank you for applying. We will be in touch shortly.",
      });
      form.reset();
      router.push('/careers');
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: result.message || "Could not submit your application. Please try again.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Your contact number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cv"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload CV (PDF, DOC, DOCX)</FormLabel>
              <FormControl>
                <Input type="file" accept=".pdf,.doc,.docx" {...cvRef} />
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
