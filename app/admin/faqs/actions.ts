"use server";

import connectDB from "@/lib/db";
import { FAQ } from "@/models/FAQ";
import { revalidatePath } from "next/cache";

export async function addFAQ(formData: FormData) {
  await connectDB();
  
  const newFAQ = {
    id: (formData.get("id") as string),
    question: (formData.get("question") as string),
    answer: (formData.get("answer") as string),
    category: (formData.get("category") as string) || "general",
  };

  await FAQ.create(newFAQ);
  revalidatePath("/admin/faqs");
  revalidatePath("/contact");
}

export async function deleteFAQ(id: string) {
  await connectDB();
  await FAQ.findByIdAndDelete(id);
  revalidatePath("/admin/faqs");
  revalidatePath("/contact");
}
