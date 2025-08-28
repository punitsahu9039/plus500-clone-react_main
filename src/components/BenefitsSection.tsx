const BenefitsSection = () => {
  const benefits = [
    {
      icon: "📱",
      title: "Easy to use",
      description: "User-friendly platform designed for both beginners and experienced traders"
    },
    {
      icon: "⚡",
      title: "Fast execution",
      description: "Lightning-fast order execution with real-time market data"
    },
    {
      icon: "🔒",
      title: "Secure trading",
      description: "Bank-level security with advanced encryption and regulatory compliance"
    },
    {
      icon: "💰",
      title: "Competitive spreads",
      description: "Low spreads and transparent pricing with no hidden fees"
    },
    {
      icon: "📊",
      title: "Advanced tools",
      description: "Professional trading tools and comprehensive market analysis"
    },
    {
      icon: "🌍",
      title: "Global markets",
      description: "Access to international markets and diverse trading instruments"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Benefits of Trading with{" "}
            <span className="text-plus500-blue">Plus500</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;