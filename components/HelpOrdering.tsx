export default function HelpOrdering() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="text-yellow-300 font-bold tracking-wide">
          WE'RE HERE TO HELP
        </p>

        <h2 className="text-5xl font-extrabold mt-4">
          Not Comfortable Ordering Online?
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-green-100">
          No problem. Our team is happy to help you place your order over the phone or WhatsApp.
          We make shopping simple and stress-free for seniors and their families.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white text-gray-800 rounded-3xl p-8 shadow-xl">
            <div className="text-5xl">📞</div>

            <h3 className="text-2xl font-bold mt-5">
              Call to Order
            </h3>

            <p className="mt-4 text-gray-600">
              Speak with our team and we'll help you place your order.
            </p>

            <p className="mt-6 text-green-700 font-bold text-xl">
              +91 89043 28298
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-3xl p-8 shadow-xl">
            <div className="text-5xl">💬</div>

            <h3 className="text-2xl font-bold mt-5">
              WhatsApp Ordering
            </h3>

            <p className="mt-4 text-gray-600">
              Send us your shopping list and we'll take care of the rest.
            </p>

            <a
              href="https://wa.me/918904328298"
              className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-xl font-bold"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="bg-white text-gray-800 rounded-3xl p-8 shadow-xl">
            <div className="text-5xl">❤️</div>

            <h3 className="text-2xl font-bold mt-5">
              Order for Parents
            </h3>

            <p className="mt-4 text-gray-600">
              Living in another city or country? We'll deliver directly to your loved ones.
            </p>

            <a
              href="/build-box"
              className="inline-block mt-6 bg-yellow-400 text-green-900 px-6 py-3 rounded-xl font-bold"
            >
              Start an Order
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}