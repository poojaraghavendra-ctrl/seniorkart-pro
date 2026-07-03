import { categories } from "@/data/products";

export default function CategoryGrid() {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center text-green-700">Shop by Category</h2>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 mt-10">
        {categories.map((item) => (
          <div key={item} className="bg-white rounded-2xl shadow-lg p-8 text-center font-semibold hover:shadow-xl hover:-translate-y-1 transition">
            <div className="text-3xl mb-3">💚</div>{item}
          </div>
        ))}
      </div>
    </section>
  );
}
