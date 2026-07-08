"use client";

import { useState } from "react";

const products = [
  { name: "Rice 5kg", price: 350, category: "Groceries", icon: "🍚" },
  { name: "Toor Dal 1kg", price: 180, category: "Groceries", icon: "🫘" },
  { name: "Cooking Oil 1L", price: 160, category: "Groceries", icon: "🛢️" },
  { name: "Tea Powder", price: 120, category: "Groceries", icon: "☕" },
  { name: "BP Monitor", price: 1499, category: "Health", icon: "🩺" },
  { name: "Thermometer", price: 299, category: "Health", icon: "🌡️" },
  { name: "Adult Diapers", price: 799, category: "Personal Care", icon: "🧴" },
  { name: "Moisturizer", price: 199, category: "Personal Care", icon: "🧼" },
  { name: "Walking Stick", price: 699, category: "Mobility", icon: "🚶" },
  { name: "Greeting Card", price: 49, category: "Add-ons", icon: "💌" },
  { name: "Gift Packing", price: 99, category: "Add-ons", icon: "🎁" },
];

export default function BuildBoxPageClient() {
  const [selected, setSelected] = useState<string[]>([]);

  const selectedProducts = products.filter((p) => selected.includes(p.name));
  const total = selectedProducts.reduce((sum, p) => sum + p.price, 0);

  const toggle = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  const message = encodeURIComponent(
    `Hello SeniorKart, I want to build my care box:\n\n${selectedProducts
      .map((item) => `${item.name} - ₹${item.price}`)
      .join("\n")}\n\nTotal: ₹${total}`
  );

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-green-700 text-center">
          Build Your Own Care Box
        </h1>

        <p className="text-center text-gray-600 mt-4 text-lg">
          Select products and send your custom box request on WhatsApp.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <button
                key={product.name}
                onClick={() => toggle(product.name)}
                className={`text-left rounded-3xl shadow p-6 border transition ${
                  selected.includes(product.name)
                    ? "bg-green-50 border-green-700"
                    : "bg-white border-gray-100"
                }`}
              >
                <div className="text-5xl">{product.icon}</div>
                <p className="text-sm text-green-700 font-bold mt-4">
                  {product.category}
                </p>
                <h3 className="text-2xl font-bold mt-2">{product.name}</h3>
                <p className="text-2xl text-green-700 font-bold mt-3">
                  ₹{product.price}
                </p>
                <p className="mt-4 font-bold">
                  {selected.includes(product.name) ? "✓ Added" : "+ Add"}
                </p>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-28">
            <h2 className="text-3xl font-bold text-green-700">
              Your Care Box
            </h2>

            {selectedProducts.length === 0 ? (
              <p className="text-gray-500 mt-6">No items selected yet.</p>
            ) : (
              <div className="mt-6 space-y-4">
                {selectedProducts.map((item) => (
                  <div key={item.name} className="flex justify-between border-b pb-3">
                    <span>{item.name}</span>
                    <span className="font-bold">₹{item.price}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between text-2xl font-bold mt-8 pt-5 border-t">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <a
              href={`https://wa.me/918904328298?text=${message}`}
              className="block text-center mt-6 bg-green-700 text-white py-4 rounded-xl font-bold hover:bg-green-800"
            >
              Send Box Request
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}