import Header from "@/components/Header";
import BuildBoxCTA from "@/components/BuildBoxCTA";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function BuildBoxPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <section className="py-14 bg-green-50 text-center">
        <h1 className="text-5xl font-bold text-green-700">Build Your Own Box</h1>
        <p className="mt-4 text-gray-600">Choose products and we pack them together in a SeniorKart box.</p>
      </section>
      <BuildBoxCTA />
      <ProductSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
