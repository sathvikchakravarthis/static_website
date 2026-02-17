import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email.'),
  company: z.string().optional(),
  serviceInterested: z.string().min(1, 'Select a service.'),
  budgetRange: z.string().min(1, 'Select a budget range.'),
  message: z.string().min(20, 'Message should be at least 20 characters.')
});

export type ContactPayload = z.infer<typeof contactSchema>;
