import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(3, { message: "The title must have at least 3 characters." }),
  description: z.string().min(10, {
    message: "The description must be at least 10 characters long.",
  }),
  images: z
    .array(
      z.string().url({ message: "There are invalid URLs in the images field" }),
      { message: "The images field is mandatory." }
    )
    .min(1, {
      message: "You must associate at least one image with this task.",
    }),
});
