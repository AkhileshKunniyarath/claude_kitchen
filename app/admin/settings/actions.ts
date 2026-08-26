"use server";

import connectDB from "@/lib/db";
import { SiteConfigModel } from "@/models/SiteConfig";
import { revalidatePath } from "next/cache";

export async function updateSettings(formData: FormData) {
  await connectDB();
  
  // Create object from flat fields
  const updateData = {
    name: (formData.get("name") as string),
    description: (formData.get("description") as string),
    url: (formData.get("url") as string),
    phone: (formData.get("phone") as string),
    email: (formData.get("email") as string),
    whatsapp: (formData.get("whatsapp") as string),
    gtmId: (formData.get("gtmId") as string),
    address: {
      line1: (formData.get("addressLine1") as string),
      line2: (formData.get("addressLine2") as string),
      mapUrl: (formData.get("mapUrl") as string),
    },
    social: {
      instagram: (formData.get("socialInstagram") as string),
      facebook: (formData.get("socialFacebook") as string),
    },
  };

  // Keep hours as is for simplicity in this basic demo, or handle them specifically if needed
  // Since we don't have a complex form for hours, we just update the rest.
  await SiteConfigModel.findOneAndUpdate({}, { $set: updateData }, { new: true, upsert: true });

  revalidatePath("/", "layout");
  revalidatePath("/admin/settings");
}
