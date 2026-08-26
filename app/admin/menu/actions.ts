"use server";

import connectDB from "@/lib/db";
import { MenuCategory } from "@/models/Menu";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";

export async function addCategory(formData: FormData) {
  await connectDB();
  
  const newCat = {
    id: (formData.get("id") as string),
    name: (formData.get("name") as string),
    icon: (formData.get("icon") as string),
    description: (formData.get("description") as string),
    dishes: [],
  };

  await MenuCategory.create(newCat);
  revalidatePath("/admin/menu");
  revalidatePath("/menu");
}

export async function deleteCategory(id: string) {
  await connectDB();
  await MenuCategory.findByIdAndDelete(id);
  revalidatePath("/admin/menu");
  revalidatePath("/menu");
}

export async function addDish(categoryId: string, formData: FormData) {
  await connectDB();
  
  const newDish = {
    _id: new mongoose.Types.ObjectId(),
    id: (formData.get("id") as string),
    name: (formData.get("name") as string),
    description: (formData.get("description") as string),
    price: (formData.get("price") as string),
    image: (formData.get("image") as string) || "/images/menu/generated/hyderabadi-dum-biryani.jpg",
    tags: (formData.get("tags") as string).split(",").map(s => s.trim()).filter(Boolean),
    category: (formData.get("category") as string), // The string ID for the category ref
    servingNote: (formData.get("servingNote") as string),
  };

  await MenuCategory.findByIdAndUpdate(categoryId, {
    $push: { dishes: newDish }
  });

  revalidatePath("/admin/menu");
  revalidatePath("/menu");
  revalidatePath("/");
}

export async function deleteDish(categoryId: string, dishId: string) {
  await connectDB();
  await MenuCategory.findByIdAndUpdate(categoryId, {
    $pull: { dishes: { _id: dishId } }
  });
  
  revalidatePath("/admin/menu");
  revalidatePath("/menu");
  revalidatePath("/");
}
