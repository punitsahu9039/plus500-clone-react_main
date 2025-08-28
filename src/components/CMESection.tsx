const CMESection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-8 animate-scale-in">
            <div className="w-32 h-16 bg-gradient-to-r from-plus500-blue to-plus500-light-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
              CME
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Discover our bonuses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enhance your trading experience with our exclusive bonuses and rewards program.
          </p>
        </div>
        
        <div className="flex justify-center">
          <button className="bg-plus500-gradient hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl">
            Learn More About Bonuses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CMESection;