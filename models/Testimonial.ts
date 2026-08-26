import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITestimonial extends Document {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  source: string;
  date: string;
}

const TestimonialSchema = new Schema<ITestimonial>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  source: { type: String, required: true },
  date: { type: String, required: true },
});

export const Testimonial: Model<ITestimonial> =
  mongoose.models.Testimonial || mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);
