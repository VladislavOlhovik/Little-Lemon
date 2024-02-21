import { z } from 'zod';

export const bookSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First Name is required')
    .max(20, 'First Name must be less than 20 characters'),
  lastName: z
    .string()
    .min(1, 'Last Name is required')
    .max(20, 'Last Name must be less than 20 characters'),
  email: z.string().email('Invalid email address'),
  prefix: z.string().min(1, 'Prefix is required'),
  phone: z.string().regex(/^\+?[1-9]\d{9}$/, 'Invalid phone number format'),
});

export type BookSchemaType = z.infer<typeof bookSchema>;
