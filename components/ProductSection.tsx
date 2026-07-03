const products = [
  {
    name: "Digital BP Monitor",
    image: "/products/bp-monitor.jpg",
    price: "₹1,499",
    oldPrice: "₹1,999",
    rating: "★★★★★",
  },
  {
    name: "Adult Diapers",
    image: "/products/adult-diapers.jpg",
    price: "₹799",
    oldPrice: "₹999",
    rating: "★★★★★",
  },
  {
    name: "Walking Stick",
    image: "/products/walking-stick.jpg",
    price: "₹699",
    oldPrice: "₹899",
    rating: "★★★★☆",
  },
  {
    name: "Anti-slip Bath Mat",
    image: "/products/bath-mat.jpg",
    price: "₹499",
    oldPrice: "₹699",
    rating: "★★★★★",
  },
  {
    name: "Monthly Grocery Pack",
    image: "/products/grocery-pack.jpg",
    price: "₹1,999",
    oldPrice: "₹2,399",
    rating: "★★★★★",
  },
  {
    name: "Senior Nutrition Pack",
    image: "/products/nutrition-pack.jpg",
    price: "₹999",
    oldPrice: "₹1,299",
    rating: "★★★★★",
  },
  {
    name: "Home Care Kit",
    image: "/products/home-care-kit.jpg",
    price: "₹1,299",
    oldPrice: "₹1,699",
    rating: "★★★★☆",
  },
  {
    name: "Comfort Blanket",
    image: "/products/blanket.jpg",
    price: "₹899",
    oldPrice: "₹1,199",
    rating: "★★★★★",
  },
];

export default function ProductSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-extrabold text-center text-green-700">
          Popular Products
        </h2>

        <p className="text-center text-gray-500 mt-4 text-lg">
          Trusted essentials loved by thousands of families.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-12">

          {products.map((product) => (

            <div
              key={product.name}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300 border"
            >

              <div className="relative">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />

                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  SALE
                </div>

              </div>

              <div className="p-6">

                <div className="text-yellow-500">
                  {product.rating}
                </div>

                <h3 className="font-bold text-xl mt-3">
                  {product.name}
                </h3>

                <div className="flex items-center gap-3 mt-3">
                  <span className="text-2xl font-bold text-green-700">
                    {product.price}
                  </span>

                  <span className="line-through text-gray-400">
                    {product.oldPrice}
                  </span>
                </div>

                <button className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-bold">
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}