import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import CareBoxes from "@/components/CareBoxes";
import ProductSection from "@/components/ProductSection";
import BuildBoxCTA from "@/components/BuildBoxCTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-gray-900">
      <Header />
      <Hero />
      <CategoryGrid />
      <CareBoxes />
      <ProductSection />
      <BuildBoxCTA />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
