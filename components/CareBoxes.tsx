const boxes = [
  {
    name: "Monthly Care Box",
    image: "/careboxes/monthly-care-box.png",
    price: "₹1,999",
    description: "Groceries, nutrition, and daily essentials.",
  },
  {
    name: "Diabetes Care Box",
    image: "/careboxes/diabetes-care-box.png",
    price: "₹2,499",
    description: "Healthy foods and diabetes-friendly products.",
  },
  {
    name: "Heart Wellness Box",
    image: "/careboxes/heart-care-box.png",
    price: "₹2,999",
    description: "Heart-conscious essentials for everyday wellness.",
  },
  {
    name: "Wellness Care Box",
    image: "/careboxes/wellness-care-box.png",
    price: "₹1,799",
    description: "Comfort, personal care, and wellness products.",
  },
];

export default function CareBoxes() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-extrabold text-center text-green-700">
          SeniorKart Care Boxes
        </h2>

        <p className="text-center text-gray-600 mt-4 text-lg">
          Thoughtfully curated boxes that bring comfort, care, and happiness to your loved ones.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-12">

          {boxes.map((box) => (
            <div
              key={box.name}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={box.image}
                alt={box.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {box.name}
                </h3>

                <p className="text-gray-600 mt-3">
                  {box.description}
                </p>

                <p className="text-2xl text-green-700 font-bold mt-5">
                  {box.price}
                </p>

                <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-800">
                  View Box
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}