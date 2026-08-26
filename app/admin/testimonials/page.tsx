import connectDB from "@/lib/db";
import { Testimonial } from "@/models/Testimonial";
import { addTestimonial, deleteTestimonial } from "./actions";
import { Trash2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function TestimonialsAdmin() {
  await connectDB();
  const testimonials = await Testimonial.find({}).lean();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-charcoal">Manage Testimonials</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        {/* List */}
        <div className="space-y-4">
          {testimonials.map((t: any) => (
            <div key={t._id.toString()} className="bg-white p-6 rounded-2xl border border-sand flex justify-between gap-4">
              <div>
                <div className="font-bold text-lg text-charcoal">{t.author}</div>
                <div className="text-sm text-charcoal/60 mb-2">{t.role}</div>
                <p className="text-charcoal/80 italic mb-3">"{t.content}"</p>
                <div className="flex gap-2">
                  {(t.highlights || []).map((h: string) => (
                    <span key={h} className="text-xs bg-gold/20 text-gold-dark px-2 py-1 rounded-md">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <form action={async () => {
                "use server";
                await deleteTestimonial(t._id.toString());
              }}>
                <button className="text-red-500 hover:bg-red-50 p-2 rounded-xl transition-colors">
                  <Trash2 size={20} />
                </button>
              </form>
            </div>
          ))}
        </div>

        {/* Add Form */}
        <div className="bg-white p-6 rounded-2xl border border-sand h-fit sticky top-8">
          <h2 className="text-xl font-bold text-charcoal mb-6">Add Testimonial</h2>
          <form action={addTestimonial} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">ID (unique slug)</label>
              <input name="id" required className="w-full border border-sand rounded-xl px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Author Name</label>
              <input name="author" required className="w-full border border-sand rounded-xl px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Role / Context</label>
              <input name="role" required className="w-full border border-sand rounded-xl px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Content</label>
              <textarea name="content" required rows={4} className="w-full border border-sand rounded-xl px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Rating (1-5)</label>
              <input name="rating" type="number" min="1" max="5" defaultValue="5" required className="w-full border border-sand rounded-xl px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Highlights (comma separated)</label>
              <input name="highlights" className="w-full border border-sand rounded-xl px-4 py-2" placeholder="e.g. Authentic Dum, Perfect Spice" />
            </div>
            
            <button type="submit" className="w-full bg-gold text-charcoal font-bold py-3 rounded-xl hover:bg-gold-light transition-colors mt-4">
              Add Testimonial
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
