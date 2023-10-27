import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    password: z.string().optional(),
  }),
});

export const SignUpValidation = {
  createUserZodSchema,
};
