import mongoose, { Schema, Document, Model } from "mongoose";

export interface IFAQ extends Document {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQSchema = new Schema<IFAQ>({
  id: { type: String, required: true, unique: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: { type: String, required: true },
});

export const FAQ: Model<IFAQ> =
  mongoose.models.FAQ || mongoose.model<IFAQ>("FAQ", FAQSchema);
