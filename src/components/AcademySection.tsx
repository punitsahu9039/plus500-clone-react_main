const AcademySection = () => {
  return (
    <section className="py-20 bg-plus500-blue text-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-8 animate-scale-in">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">🎓</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Futures Academy
          </h2>
          
          <p className="text-xl mb-12 opacity-90">
            Dive into our articles and videos to get an in-depth look at all you need to know about Futures trading.
          </p>
          
          <button className="bg-white text-plus500-blue hover:bg-gray-100 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-lg font-semibold shadow-lg">
            Learn to Trade
          </button>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;