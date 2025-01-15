import { z } from "zod";

export const markTaskAsCompletedSchema = z.object({
  id: z
    .string()
    .min(24, { message: "The default id must be 24 characters long." }),
});
