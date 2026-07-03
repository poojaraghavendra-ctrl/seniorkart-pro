export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-50 via-white to-yellow-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-green-700 font-bold mb-4">Carefully curated. Beautifully packed.</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Everything Seniors Need.<br />
            <span className="text-green-700">Delivered with Care.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            SeniorKart helps families send groceries, health essentials, personal care products,
            mobility aids and curated Care Boxes to senior citizens.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/products" className="bg-green-700 text-white px-7 py-3 rounded-lg font-semibold text-center hover:bg-green-800">Shop Now</a>
            <a href="/build-box" className="border border-green-700 text-green-700 px-7 py-3 rounded-lg font-semibold text-center hover:bg-green-50">Build Your Box</a>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="bg-green-700 text-white rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-yellow-300">SeniorKart Care Box</h3>
            <p className="mt-4">A thoughtfully packed care box with essentials seniors need.</p>
            <ul className="mt-6 space-y-3 text-lg">
              <li>✔ Groceries</li>
              <li>✔ Health Essentials</li>
              <li>✔ Personal Care</li>
              <li>✔ Nutrition Products</li>
              <li>✔ Comfort & Safety Items</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
