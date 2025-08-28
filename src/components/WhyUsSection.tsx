const WhyUsSection = () => {
  const features = [
    {
      icon: "🛠️",
      title: "Professional Support",
      description: "24/7 customer support at your disposal."
    },
    {
      icon: "⭐",
      title: "Reputable",
      description: "With over four decades of experience in the field, our firm is a full member of the CME Group and the National Futures Association."
    },
    {
      icon: "🔒",
      title: "Protected & Secure",
      description: "We follow regulatory requirements to the letter, keeping your data safe and your funds in segregated accounts."
    },
    {
      icon: "✅",
      title: "Reliable",
      description: "Plus500 Ltd is listed on the London Stock Exchange's Main Market for Listed Companies & included in the FTSE 250."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-plus500-blue mb-8">
            Why Us?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-plus500-light-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-plus500-blue mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;