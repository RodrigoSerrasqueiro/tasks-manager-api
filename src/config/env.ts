import z from "zod";

const envSchema = z.object({
  PORT: z.string().transform((value) => Number(value)),
  HOST_USERNAME: z.string(),
  HOST_PASSWORD: z.string(),
  HOST_CLUSTER: z.string(),
  HOST_DATABASE: z.string(),
});

export const env = envSchema.parse(process.env);
