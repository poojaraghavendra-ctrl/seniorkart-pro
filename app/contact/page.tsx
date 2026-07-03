import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-green-700">Contact SeniorKart</h1>
        <div className="mt-8 bg-white rounded-3xl shadow p-8">
          <p className="text-xl"><strong>Phone / WhatsApp:</strong> +91 89043 28298</p>
          <p className="text-xl mt-4"><strong>Email:</strong> Pooja.raghavendra@gmail.com</p>
          <p className="text-gray-600 mt-6">For orders, care boxes and customer support, contact us directly on WhatsApp.</p>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
