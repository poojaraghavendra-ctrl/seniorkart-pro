const categories = [
  {
    name: "Groceries",
    count: "500+ Daily Essentials",
    icon: "🛒",
    image: "/categories/groceries.jpg",
  },
  {
    name: "Health Essentials",
    count: "300+ Health Products",
    icon: "💊",
    image: "/categories/health.jpg",
  },
  {
    name: "Medical Devices",
    count: "100+ Trusted Devices",
    icon: "🩺",
    image: "/categories/medical.jpg",
  },
  {
    name: "Personal Care",
    count: "250+ Personal Care Items",
    icon: "🧴",
    image: "/categories/personal-care.jpg",
  },
  {
    name: "Mobility Aids",
    count: "150+ Mobility Solutions",
    icon: "🚶",
    image: "/categories/mobility.jpg",
  },
  {
    name: "Nutrition",
    count: "200+ Nutrition Products",
    icon: "🍎",
    image: "/categories/nutrition.jpg",
  },
  {
    name: "Home Care",
    count: "150+ Home Care Items",
    icon: "🏠",
    image: "/categories/home-care.jpg",
  },
  {
    name: "Care Boxes",
    count: "Curated Care for Every Need",
    icon: "🎁",
    image: "/categories/care-box.jpg",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-green-700 font-bold text-xl">
          Shop by Categories
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-900 mt-3">
          Everything for Senior Care, All in One Place
        </h2>

        <p className="text-center text-gray-600 mt-4 text-lg">
          Carefully selected products to make everyday life easier, healthier and happier.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {categories.map((category) => (
            <a
              href="/products"
              key={category.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition block"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                    {category.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.name}
                    </h3>

                    <p className="text-gray-600 mt-1">{category.count}</p>

                    <span className="inline-block mt-4 text-green-700 font-bold">
                      Shop Now →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}