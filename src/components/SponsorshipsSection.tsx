const SponsorshipsSection = () => {
  const sponsorships = [
    {
      name: "Legia Warsaw",
      image: "🏟️",
      description: "Official Partner"
    },
    {
      name: "Chicago Bulls", 
      image: "🏀",
      description: "Official Partner"
    },
    {
      name: "BSC Young Boys",
      image: "⚽",
      description: "Official Partner"
    }
  ];

  return (
    <section className="py-20 bg-plus500-blue text-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Sports Partnerships
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Plus500 is proud to partner with world-class sports teams across the globe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sponsorships.map((sponsor, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover-scale animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">{sponsor.image}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {sponsor.name}
              </h3>
              <p className="opacity-80">
                {sponsor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorshipsSection;