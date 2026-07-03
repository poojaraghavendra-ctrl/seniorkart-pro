export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <div className="h-14 w-14 rounded-2xl bg-white text-green-700 flex items-center justify-center font-bold text-xl">SK</div>
          <h3 className="text-2xl font-bold mt-4">SeniorKart</h3>
          <p className="mt-3">Everything Seniors Need, Delivered with Care.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl">Quick Links</h3>
          <p className="mt-3">Home</p><p>Shop</p><p>Care Boxes</p><p>Build Your Box</p>
        </div>
        <div>
          <h3 className="font-bold text-xl">Contact</h3>
          <p className="mt-3">+91 89043 28298</p>
          <p>Pooja.raghavendra@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
