import { z } from "zod";

export const propertyFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Title must be at least 5 characters")
    .max(200, "Title cannot exceed 200 characters"),

  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters"),

  rent: z
    .string()
    .min(1, "Rent is required")
    .refine(
      (value) => !Number.isNaN(Number(value)) && Number(value) > 0,
      "Rent must be greater than 0",
    ),

  location: z
    .string()
    .trim()
    .min(2, "Location must be at least 2 characters")
    .max(100, "Location cannot exceed 100 characters"),

  bedrooms: z
    .string()
    .refine(
      (value) =>
        value === "" || (Number.isInteger(Number(value)) && Number(value) > 0),
      "Bedrooms must be a whole number greater than 0",
    ),

  bathrooms: z
    .string()
    .refine(
      (value) =>
        value === "" || (Number.isInteger(Number(value)) && Number(value) > 0),
      "Bathrooms must be a whole number greater than 0",
    ),

  size: z
    .string()
    .refine(
      (value) =>
        value === "" || (!Number.isNaN(Number(value)) && Number(value) > 0),
      "Size must be greater than 0",
    ),

  amenities: z.string(),

  images: z.string(),

  categoryId: z
    .string()
    .trim()
    .min(1, "Category is required")
    .refine(
      (value) => z.uuid().safeParse(value).success,
      "Invalid category ID",
    ),
});

export type PropertyFormValues = z.infer<typeof propertyFormSchema>;
