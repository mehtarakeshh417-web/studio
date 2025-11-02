'use server';
/**
 * @fileOverview An AI flow to generate job descriptions.
 *
 * - generateJobDescription - Generates a job description based on a title.
 * - JobDescriptionInput - The input type for the generateJobDescription function.
 * - JobDescriptionOutput - The return type for the generateJobDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const JobDescriptionInputSchema = z.object({
  title: z.string().describe('The job title.'),
});
export type JobDescriptionInput = z.infer<typeof JobDescriptionInputSchema>;

const JobDescriptionOutputSchema = z.object({
  description: z.string().describe('A detailed job description for the role.'),
  responsibilities: z.string().describe('A bulleted list of key responsibilities. Use markdown for bullet points.'),
  skills: z.string().describe('A bulleted list of required skills and qualifications. Use markdown for bullet points.'),
});
export type JobDescriptionOutput = z.infer<typeof JobDescriptionOutputSchema>;

export async function generateJobDescription(input: JobDescriptionInput): Promise<JobDescriptionOutput> {
  return jobDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'jobDescriptionPrompt',
  input: { schema: JobDescriptionInputSchema },
  output: { schema: JobDescriptionOutputSchema },
  prompt: `You are an expert recruitment assistant for a UK-based care provider called Symbolic Care.
  Your task is to generate a compelling and detailed job posting based on a job title.

  Job Title: {{{title}}}

  Please generate the following content:
  1.  A concise and engaging 'Job Description' that summarizes the role.
  2.  A list of 'Key Responsibilities' for the position. Format this as a markdown bulleted list.
  3.  A list of 'Required Skills' and qualifications. Format this as a markdown bulleted list.

  The tone should be professional, welcoming, and aligned with the values of a compassionate care provider.
  Ensure the output is in the correct JSON format.`,
});

const jobDescriptionFlow = ai.defineFlow(
  {
    name: 'jobDescriptionFlow',
    inputSchema: JobDescriptionInputSchema,
    outputSchema: JobDescriptionOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
