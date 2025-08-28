const StatsSection = () => {
  const stats = [
    { value: "$800+", label: "Billion", subtitle: "Traded Value" },
    { value: "2800*", label: "Instruments", subtitle: "" },
    { value: "30+", label: "Million", subtitle: "Registered Customers" },
    { value: "300+", label: "Million", subtitle: "Positions Opened" },
    { value: "60+", label: "Countries", subtitle: "" }
  ];

  return (
    <section className="py-20 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-plus500-blue mb-8">
            Over 30 million customers worldwide have already chosen Plus500.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-scale-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-plus500-blue mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-700">
                {stat.label}
              </div>
              {stat.subtitle && (
                <div className="text-sm text-gray-500 mt-1">
                  {stat.subtitle}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 max-w-4xl mx-auto">
            * Instrument availability is subject to jurisdiction. Futures trading by U.S. market participants occurs through Plus500US Financial Services LLC, a registered futures commission merchant.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;