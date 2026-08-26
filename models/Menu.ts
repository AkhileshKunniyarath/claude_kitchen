import mongoose, { Schema, Document, Model } from "mongoose";

export interface IDish {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
  category: string;
  servingNote?: string;
}

export interface IMenuCategory extends Document {
  id: string;
  name: string;
  icon: string;
  description: string;
  dishes: IDish[];
}

const DishSchema = new Schema<IDish>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  tags: [{ type: String }],
  category: { type: String, required: true },
  servingNote: { type: String },
});

const MenuCategorySchema = new Schema<IMenuCategory>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  icon: { type: String, required: true },
  description: { type: String, required: true },
  dishes: [DishSchema],
});

export const MenuCategory: Model<IMenuCategory> =
  mongoose.models.MenuCategory || mongoose.model<IMenuCategory>("MenuCategory", MenuCategorySchema);
