"use server";

import { z } from "zod";

const prayerRequestSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  request: z.string().min(10),
});

export async function submitPrayerRequest(values: z.infer<typeof prayerRequestSchema>) {
  const validatedFields = prayerRequestSchema.safeParse(values);

  if (!validatedFields.success) {
    console.error("Validation failed:", validatedFields.error.flatten().fieldErrors);
    return { success: false, error: "Invalid data." };
  }

  // In a real application, you would save this data to a database.
  // For this example, we'll just log it to the server console.
  console.log("New Prayer Request Received:");
  console.log("Name:", validatedFields.data.name || "Anonymous");
  console.log("Email:", validatedFields.data.email || "Not provided");
  console.log("Request:", validatedFields.data.request);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}
