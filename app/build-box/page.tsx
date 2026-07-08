import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BuildBoxPageClient from "./BuildBoxPageClient";

export default function BuildBoxPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <BuildBoxPageClient />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}