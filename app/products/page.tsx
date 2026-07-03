import Header from "@/components/Header";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <section className="py-14 bg-green-50 text-center">
        <h1 className="text-5xl font-bold text-green-700">Shop Products</h1>
        <p className="mt-4 text-gray-600">Curated daily essentials for senior citizens.</p>
      </section>
      <ProductSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
