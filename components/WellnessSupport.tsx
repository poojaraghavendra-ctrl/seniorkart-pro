export default function WellnessSupport() {
  const services = [
    {
      icon: "🏡",
      title: "Wellness Visits (If Needed)",
      description:
        "If requested, we can help arrange wellness visits every 15 days to check on your loved one's overall well-being.",
    },
    {
      icon: "📞",
      title: "Friendly Phone Check-ins",
      description:
        "Regular phone conversations to stay connected, provide companionship, and check how they are doing.",
    },
    {
      icon: "❤️",
      title: "Emotional Well-being Support",
      description:
        "Compassionate conversations that help reduce loneliness and promote emotional well-being.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Family Updates",
      description:
        "With your loved one's consent, we can share general well-being updates with family members.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-green-700 font-bold text-lg">
          CARE BEYOND DELIVERY
        </p>

        <h2 className="text-5xl font-extrabold text-center text-green-800 mt-3">
          Senior Wellness Support
        </h2>

        <p className="text-center text-gray-600 mt-6 text-lg max-w-4xl mx-auto leading-8">
          At SeniorKart, we believe caring goes beyond delivering products.
          When requested, we can help arrange wellness support services that
          provide reassurance to families and compassionate support for senior citizens.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-green-700 mt-6">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {service.description}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-16 bg-green-700 rounded-3xl text-white p-10 text-center">

          <h3 className="text-3xl font-bold">
            Need Additional Support for Your Loved One?
          </h3>

          <p className="mt-5 text-lg max-w-3xl mx-auto leading-8">
            Speak with our care team to understand how SeniorKart can help support
            your loved ones based on their individual needs and your location.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition"
          >
            Request a Wellness Consultation
          </a>

          <p className="mt-6 text-sm text-green-100">
            * Services are arranged based on individual needs, availability, and location.
          </p>

        </div>

      </div>
    </section>
  );
}