const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-plus500-blue mb-4">
            FUTURES MARKETS FINALLY
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-plus500-blue mb-8">
            MADE ACCESSIBLE!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a new way to trade with attractive day margins, 
            and get access to a wide range of instruments.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Futures on S&P 500, NASDAQ 100, Bitcoin, EUR/USD, Oil, Gold, and many more!
          </p>
        </div>

        {/* Futures On Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Futures On</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📈</span>
              </div>
              <span className="text-sm font-medium">S&P 500</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">💹</span>
              </div>
              <span className="text-sm font-medium">NASDAQ</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">₿</span>
              </div>
              <span className="text-sm font-medium">Bitcoin</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">💱</span>
              </div>
              <span className="text-sm font-medium">EUR/USD</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🛢️</span>
              </div>
              <span className="text-sm font-medium">Oil</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🥇</span>
              </div>
              <span className="text-sm font-medium">Gold</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-8 mb-4">
            <div className="w-12 h-8 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
            <div className="w-12 h-8 bg-red-600 rounded-full text-white text-xs flex items-center justify-center font-bold">MC</div>
            <div className="w-12 h-8 bg-gray-800 rounded text-white text-xs flex items-center justify-center">🏦</div>
            <div className="w-12 h-8 bg-black rounded text-white text-xs flex items-center justify-center">📱</div>
            <div className="w-12 h-8 bg-blue-500 rounded text-white text-xs flex items-center justify-center">G</div>
          </div>
          <p className="text-sm text-gray-500">* Plus500 offers multiple global payment methods.</p>
        </div>

        {/* Trustpilot Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-green-50 px-8 py-4 rounded-lg">
            <div className="font-bold text-green-600">Trustpilot</div>
            <div className="text-sm">Reviews +16K</div>
            <div className="flex text-green-500">
              ★★★★★
            </div>
            <div className="font-bold text-green-600">Great</div>
            <div className="font-bold text-green-600">4.2</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;