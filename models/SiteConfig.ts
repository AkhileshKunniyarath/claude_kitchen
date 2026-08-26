import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAddress {
  line1: string;
  line2: string;
  mapUrl: string;
}

export interface IHours {
  day: string;
  time: string;
}

export interface ISocial {
  instagram: string;
  facebook: string;
  youtube: string;
}

export interface ISiteConfig extends Document {
  name: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: IAddress;
  hours: IHours[];
  social: ISocial;
  gtmId: string;
  gaId: string;
  metaPixelId: string;
  ogImage: string;
}

const SiteConfigSchema = new Schema<ISiteConfig>({
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  phone: { type: String, required: true },
  whatsapp: { type: String, required: true },
  email: { type: String, required: true },
  address: {
    line1: { type: String },
    line2: { type: String },
    mapUrl: { type: String },
  },
  hours: [
    {
      day: { type: String },
      time: { type: String },
    },
  ],
  social: {
    instagram: { type: String },
    facebook: { type: String },
    youtube: { type: String },
  },
  gtmId: { type: String },
  gaId: { type: String },
  metaPixelId: { type: String },
  ogImage: { type: String },
});

export const SiteConfigModel: Model<ISiteConfig> =
  mongoose.models.SiteConfig || mongoose.model<ISiteConfig>("SiteConfig", SiteConfigSchema);
