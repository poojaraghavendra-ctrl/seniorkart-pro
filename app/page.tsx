import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import CareBoxes from "@/components/CareBoxes";
import ProductSection from "@/components/ProductSection";
import BuildBoxCTA from "@/components/BuildYourBox";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChoose from "@/components/WhyChoose";
import WellnessSupport from "@/components/WellnessSupport";
import BuildYourBox from "@/components/BuildYourBox";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-gray-900">
      <Header />
      <Hero />
      <CategoryGrid />
      <CareBoxes />
      <WhyChoose />
      <WellnessSupport />
      <ProductSection />
      <BuildYourBox />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
