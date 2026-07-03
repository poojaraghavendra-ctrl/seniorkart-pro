type ProductCardProps = {
  name: string;
  description: string;
  price: number;
  badge: string;
};

export default function ProductCard({ name, description, price, badge }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition">
      <div className="h-32 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-green-700 text-2xl">{badge}</div>
      <h3 className="text-xl font-bold mt-5">{name}</h3>
      <p className="text-gray-600 mt-2 min-h-12">{description}</p>
      <p className="font-bold text-xl mt-4">₹{price.toLocaleString("en-IN")}</p>
      <button className="mt-4 bg-green-700 text-white px-5 py-3 rounded-lg w-full hover:bg-green-800">Add to Cart</button>
    </div>
  );
}
