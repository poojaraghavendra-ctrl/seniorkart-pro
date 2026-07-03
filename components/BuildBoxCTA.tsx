export default function BuildBoxCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-3xl p-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold text-green-700">Build Your Own Care Box</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the products your loved one needs. We pack everything in a SeniorKart box and deliver it with care.
          </p>
          <a href="/build-box" className="inline-block mt-6 bg-green-700 text-white px-7 py-3 rounded-lg hover:bg-green-800">Start Building</a>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-6 rounded-xl shadow">Choose Products</div>
          <div className="bg-white p-6 rounded-xl shadow">We Pack</div>
          <div className="bg-white p-6 rounded-xl shadow">Delivered</div>
        </div>
      </div>
    </section>
  );
}
