import Header from "@/components/Header";
import CareBoxes from "@/components/CareBoxes";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function CareBoxesPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <section className="py-14 bg-green-50 text-center">
        <h1 className="text-5xl font-bold text-green-700">SeniorKart Care Boxes</h1>
        <p className="mt-4 text-gray-600">Monthly care boxes packed thoughtfully for your loved ones.</p>
      </section>
      <CareBoxes />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
