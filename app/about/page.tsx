import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-green-700">About SeniorKart</h1>
        <p className="mt-6 text-lg text-gray-700 leading-8">
          SeniorKart was created to make caring for senior citizens simpler. We curate trusted daily essentials,
          health support products, comfort items, groceries and care boxes, then pack them thoughtfully and deliver them with care.
        </p>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
