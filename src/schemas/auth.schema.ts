import z from "zod";

export const loginSchema = z.object({
  email: z.email({
    error: (issue) =>
      issue.input == null
        ? "Email is required"
        : "Please provide a valid email",
  }),

  password: z
    .string("Password is required")
    .trim()
    .min(1, "Password is required"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
