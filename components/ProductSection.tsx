import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center text-green-700">Popular Products</h2>
      <p className="text-center text-gray-600 mt-3">Start with carefully selected daily essentials.</p>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} name={product.name} description={product.description} price={product.price} badge={product.badge} />
        ))}
      </div>
    </section>
  );
}
