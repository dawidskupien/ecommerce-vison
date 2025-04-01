import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email("Please enter your email in format: example@gmail.com"),
  password: z.string().min(8, "Password must contain at least 8 characters"),
  token: z.string().optional().nullable()
});
