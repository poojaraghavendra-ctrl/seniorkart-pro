const testimonials = [
  "SeniorKart makes it easy to send monthly essentials to my parents.",
  "The care box idea is thoughtful and useful for families.",
  "Simple ordering, caring packaging and dependable support."
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center text-green-700">Trusted by Families</h2>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 mt-10">
        {testimonials.map((text) => (
          <div key={text} className="rounded-2xl bg-green-50 p-8 shadow">
            <p className="text-gray-700">“{text}”</p>
            <p className="mt-4 font-bold text-green-700">SeniorKart Customer</p>
          </div>
        ))}
      </div>
    </section>
  );
}
