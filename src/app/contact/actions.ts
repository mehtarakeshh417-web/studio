"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof formSchema>;

export async function submitContactForm(
  values: ContactFormValues
): Promise<{ success: boolean; message: string }> {
  const validation = formSchema.safeParse(values);

  if (!validation.success) {
    return { success: false, message: "Invalid form data." };
  }

  try {
    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just log it and simulate a delay.
    console.log("New contact form submission:", validation.data);
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: "Form submitted successfully." };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "An unexpected error occurred." };
  }
}
