const features = [
  {
    icon: "❤️",
    title: "Made for Senior Citizens",
    description:
      "Every product is carefully chosen keeping the comfort, health, and safety of senior citizens in mind.",
  },
  {
    icon: "📦",
    title: "Curated Care Boxes",
    description:
      "Send personalized care boxes filled with groceries, wellness products, and thoughtful gifts to your loved ones.",
  },
  {
    icon: "🚚",
    title: "Fast & Reliable Delivery",
    description:
      "We pack every order with care and deliver it safely to senior citizens across India.",
  },
  {
    icon: "🏥",
    title: "Trusted Health Essentials",
    description:
      "From BP monitors to walkers and personal care items, everything comes from trusted brands.",
  },
  {
    icon: "🛍️",
    title: "One-Stop Senior Store",
    description:
      "Groceries, healthcare, nutrition, mobility aids, personal care, and gift boxes—all in one place.",
  },
  {
    icon: "🤝",
    title: "Packed with Love",
    description:
      "Every SeniorKart box is packed with care, making families feel closer even when they live far away.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-extrabold text-center text-green-700">
          Why Choose SeniorKart?
        </h2>

        <p className="text-center text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
          SeniorKart is more than an online store. It is a caring platform that
          helps families provide essential products and thoughtful gifts to their
          parents and grandparents with love and convenience.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="text-2xl font-bold mt-6 text-green-700">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}