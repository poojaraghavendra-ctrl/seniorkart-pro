import { careBoxes } from "@/data/products";

export default function CareBoxes() {
  return (
    <section className="bg-green-50 py-16">
      <h2 className="text-4xl font-bold text-center text-green-700">Our Most Loved Care Boxes</h2>
      <p className="text-center text-gray-600 mt-3">Ready-made monthly care solutions for your loved ones.</p>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 mt-10">
        {careBoxes.map((box) => (
          <div key={box.name} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="h-32 bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl flex items-center justify-center font-bold text-green-700">SeniorKart Box</div>
            <h3 className="text-xl font-bold mt-5">{box.name}</h3>
            <p className="text-gray-600 mt-2">{box.description}</p>
            <p className="font-bold text-xl mt-4">{box.price}</p>
            <button className="mt-4 bg-green-700 text-white px-5 py-3 rounded-lg w-full hover:bg-green-800">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
