import connectDB from "@/lib/db";
import { FAQ } from "@/models/FAQ";
import { addFAQ, deleteFAQ } from "./actions";
import { Trash2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function FAQsAdmin() {
  await connectDB();
  const faqs = await FAQ.find({}).lean();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-charcoal">Manage FAQs</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        {/* List */}
        <div className="space-y-4">
          {faqs.map((f: any) => (
            <div key={f._id.toString()} className="bg-white p-6 rounded-2xl border border-sand flex justify-between gap-4">
              <div>
                <div className="text-xs bg-sand/50 text-charcoal/70 px-2 py-1 rounded-md w-fit mb-2 uppercase tracking-wider font-bold">
                  {f.category}
                </div>
                <div className="font-bold text-lg text-charcoal mb-2">{f.question}</div>
                <p className="text-charcoal/80 text-sm">{f.answer}</p>
              </div>
              <form action={async () => {
                "use server";
                await deleteFAQ(f._id.toString());
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
          <h2 className="text-xl font-bold text-charcoal mb-6">Add FAQ</h2>
          <form action={addFAQ} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">ID (unique slug)</label>
              <input name="id" required className="w-full border border-sand rounded-xl px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Category</label>
              <select name="category" className="w-full border border-sand rounded-xl px-4 py-2 bg-white">
                <option value="ordering">Ordering & Delivery</option>
                <option value="food">Food & Preparation</option>
                <option value="events">Catering & Events</option>
                <option value="general">General</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Question</label>
              <input name="question" required className="w-full border border-sand rounded-xl px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Answer</label>
              <textarea name="answer" required rows={4} className="w-full border border-sand rounded-xl px-4 py-2" />
            </div>
            
            <button type="submit" className="w-full bg-gold text-charcoal font-bold py-3 rounded-xl hover:bg-gold-light transition-colors mt-4">
              Add FAQ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
