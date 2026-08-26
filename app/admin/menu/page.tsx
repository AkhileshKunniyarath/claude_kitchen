import connectDB from "@/lib/db";
import { MenuCategory } from "@/models/Menu";
import { addCategory, deleteCategory, addDish, deleteDish } from "./actions";
import { Trash2, Plus } from "lucide-react";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function MenuAdmin() {
  await connectDB();
  const categories = await MenuCategory.find({}).lean();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-charcoal">Manage Menu</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        {/* Categories List */}
        <div className="space-y-8">
          {categories.map((cat: any) => (
            <div key={cat._id.toString()} className="bg-white rounded-2xl border border-sand overflow-hidden">
              <div className="bg-sand/30 p-6 flex justify-between items-center border-b border-sand">
                <div>
                  <h2 className="text-xl font-bold text-charcoal flex items-center gap-2">
                    <span className="text-2xl">{cat.icon}</span> {cat.name}
                  </h2>
                  <p className="text-sm text-charcoal/70 mt-1">{cat.description}</p>
                </div>
                <form action={async () => {
                  "use server";
                  await deleteCategory(cat._id.toString());
                }}>
                  <button className="text-red-500 hover:bg-red-50 p-2 rounded-xl transition-colors" aria-label="Delete Category">
                    <Trash2 size={20} />
                  </button>
                </form>
              </div>

              <div className="p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {cat.dishes.map((dish: any) => (
                    <div key={dish._id.toString()} className="border border-sand rounded-xl p-4 flex gap-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                        <Image src={dish.image} alt={dish.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-charcoal text-sm">{dish.name}</h3>
                          <form action={async () => {
                            "use server";
                            await deleteDish(cat._id.toString(), dish._id.toString());
                          }}>
                            <button className="text-red-400 hover:text-red-600">
                              <Trash2 size={16} />
                            </button>
                          </form>
                        </div>
                        <div className="text-gold font-bold text-sm">{dish.price}</div>
                        <p className="text-xs text-charcoal/60 mt-1 line-clamp-2">{dish.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Forms */}
        <div className="space-y-6">
          {/* Add Dish Form */}
          <div className="bg-white p-6 rounded-2xl border border-sand">
            <h2 className="text-xl font-bold text-charcoal mb-6">Add New Dish</h2>
            <form action={async (formData) => {
              "use server";
              const catId = formData.get("categoryId") as string;
              await addDish(catId, formData);
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Category</label>
                <select name="categoryId" required className="w-full border border-sand rounded-xl px-4 py-2 bg-white">
                  {categories.map((c: any) => (
                    <option key={c._id.toString()} value={c._id.toString()}>{c.name}</option>
                  ))}
                </select>
              </div>
              <input type="hidden" name="category" value="auto" />
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">ID (unique slug)</label>
                <input name="id" required className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Dish Name</label>
                <input name="name" required className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Description</label>
                <textarea name="description" required rows={3} className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal/70 mb-1">Price</label>
                  <input name="price" required placeholder="₹320" className="w-full border border-sand rounded-xl px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal/70 mb-1">Serving Note</label>
                  <input name="servingNote" placeholder="Serves 1" className="w-full border border-sand rounded-xl px-4 py-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Tags (comma separated)</label>
                <input name="tags" placeholder="signature, bestseller" className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Image URL</label>
                <input name="image" placeholder="/images/menu/generated/..." className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <button type="submit" className="w-full bg-gold text-charcoal font-bold py-3 rounded-xl hover:bg-gold-light transition-colors mt-4">
                Add Dish
              </button>
            </form>
          </div>

          {/* Add Category Form */}
          <div className="bg-white p-6 rounded-2xl border border-sand">
            <h2 className="text-xl font-bold text-charcoal mb-6">Add Category</h2>
            <form action={addCategory} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">ID (slug)</label>
                <input name="id" required className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Name</label>
                <input name="name" required className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Emoji Icon</label>
                <input name="icon" required className="w-full border border-sand rounded-xl px-4 py-2" placeholder="🥘" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Description</label>
                <textarea name="description" required rows={2} className="w-full border border-sand rounded-xl px-4 py-2" />
              </div>
              <button type="submit" className="w-full border-2 border-gold text-charcoal font-bold py-3 rounded-xl hover:bg-gold/10 transition-colors mt-4">
                Add Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
