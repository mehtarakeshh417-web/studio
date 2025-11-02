'use server';
/**
 * @fileOverview A health assistant AI flow.
 *
 * - askHealthAssistant - A function that handles health-related questions.
 * - HealthAssistantInput - The input type for the askHealthAssistant function.
 * - HealthAssistantOutput - The return type for the askHealthAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const HealthAssistantInputSchema = z.object({
  query: z.string().describe('The user\'s health-related question.'),
});
export type HealthAssistantInput = z.infer<typeof HealthAssistantInputSchema>;

const HealthAssistantOutputSchema = z.object({
  answer: z.string().describe('The assistant\'s answer to the health query.'),
});
export type HealthAssistantOutput = z.infer<typeof HealthAssistantOutputSchema>;

export async function askHealthAssistant(input: HealthAssistantInput): Promise<HealthAssistantOutput> {
  return healthAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'healthAssistantPrompt',
  input: { schema: HealthAssistantInputSchema },
  output: { schema: HealthAssistantOutputSchema },
  prompt: `You are a helpful and empathetic AI Health Assistant from Symbolic Care. 
  Your goal is to provide clear, general health information and advice in a supportive manner.
  
  IMPORTANT: You must always include a disclaimer that you are not a medical professional and the user should consult a doctor for medical advice.
  
  User's question: {{{query}}}
  
  Provide a helpful response and remember to include the disclaimer.`,
});

const healthAssistantFlow = ai.defineFlow(
  {
    name: 'healthAssistantFlow',
    inputSchema: HealthAssistantInputSchema,
    outputSchema: HealthAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
