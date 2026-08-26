"use server";

import connectDB from "@/lib/db";
import { Testimonial } from "@/models/Testimonial";
import { revalidatePath } from "next/cache";

export async function addTestimonial(formData: FormData) {
  await connectDB();
  
  const newTestimonial = {
    id: (formData.get("id") as string),
    author: (formData.get("author") as string),
    role: (formData.get("role") as string),
    content: (formData.get("content") as string),
    rating: Number((formData.get("rating") as string)),
    highlights: (formData.get("highlights") as string).split(",").map(s => s.trim()).filter(Boolean),
  };

  await Testimonial.create(newTestimonial);
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
}

export async function deleteTestimonial(id: string) {
  await connectDB();
  await Testimonial.findByIdAndDelete(id);
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
}
