import connectDB from "@/lib/db";
import { SiteConfigModel } from "@/models/SiteConfig";
import { siteConfig as fallbackSiteConfig } from "@/data/site-config";
import { updateSettings } from "./actions";

export const dynamic = "force-dynamic";

export default async function SettingsAdmin() {
  await connectDB();
  const dbConfig = await SiteConfigModel.findOne({}).lean();
  const config: any = dbConfig || fallbackSiteConfig;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-charcoal">Global Settings</h1>
      </div>

      <div className="bg-white rounded-2xl border border-sand p-8 max-w-3xl">
        <form action={updateSettings} className="space-y-8">
          
          <section>
            <h2 className="text-lg font-bold text-charcoal mb-4 border-b border-sand pb-2">General</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Restaurant Name</label>
                <input name="name" defaultValue={config.name} required className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Description</label>
                <textarea name="description" defaultValue={config.description} required rows={3} className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Website URL</label>
                <input name="url" defaultValue={config.url} required className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">GTM ID</label>
                <input name="gtmId" defaultValue={config.gtmId} className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-4 border-b border-sand pb-2">Contact & Social</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Phone Number</label>
                <input name="phone" defaultValue={config.phone} required className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">WhatsApp Number</label>
                <input name="whatsapp" defaultValue={config.whatsapp} required className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Email</label>
                <input name="email" type="email" defaultValue={config.email} required className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Instagram URL</label>
                <input name="socialInstagram" defaultValue={config.social.instagram} className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Facebook URL</label>
                <input name="socialFacebook" defaultValue={config.social.facebook} className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-4 border-b border-sand pb-2">Address</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Line 1</label>
                <input name="addressLine1" defaultValue={config.address.line1} required className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Line 2</label>
                <input name="addressLine2" defaultValue={config.address.line2} required className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Google Maps URL</label>
                <input name="mapUrl" defaultValue={config.address.mapUrl} required className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
            </div>
          </section>

          <div className="flex justify-end pt-4">
            <button type="submit" className="bg-gold text-charcoal font-bold py-3 px-8 rounded-xl hover:bg-gold-light transition-colors">
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
