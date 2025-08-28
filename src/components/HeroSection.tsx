import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-plus500-gradient min-h-[600px] overflow-hidden animate-fade-in">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white/20 transform rotate-12 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 border-2 border-white/20 transform -rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-white/20 transform rotate-45 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-plus500-blue/20 to-transparent animate-pulse"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-scale-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              IT'S TRADING
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-plus500-light-blue mb-6 animate-scale-in" style={{animationDelay: '0.2s'}}>
              WITH A PLUS
            </h1>
            
            <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
              Over 30 million customers worldwide have already chosen Plus500.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="bg-plus500-light-blue hover:bg-plus500-light-blue/90 text-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-lg">
                Start Trading Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-plus500-blue px-8 py-4 text-lg hover:scale-105 transition-all duration-300">
                Try Free Demo
              </Button>
            </div>

            {/* Chicago Bulls Partnership */}
            <div className="text-center lg:text-left animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4 hover-scale cursor-pointer">
                <div className="w-16 h-16 bg-plus500-red rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">🐂</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">CHICAGO BULLS</div>
                  <div className="text-white/80">Official Partner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Mobile App Mockup */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl hover:shadow-3xl transition-all duration-300 hover-scale">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Content */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium">7:28</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="text-lg font-bold mb-4">All Popular ▼</div>
                    
                    {/* Trading Items */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 hover:bg-gray-50 rounded transition-colors">
                        <div>
                          <div className="font-medium">Micro E-mini S&P 500</div>
                          <div className="text-sm text-gray-500">0.12%</div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-500 font-bold">5,094.50</div>
                          <div className="text-sm">+0.05%</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 hover:bg-gray-50 rounded transition-colors">
                        <div>
                          <div className="font-medium">Micro E-mini S&P</div>
                          <div className="text-sm text-gray-500">Japan</div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-500 font-bold">44,695</div>
                          <div className="text-sm">+4.59%</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 hover:bg-gray-50 rounded transition-colors">
                        <div>
                          <div className="font-medium">Micro E-mini Russell 2000</div>
                        </div>
                        <div className="text-right">
                          <div className="text-red-500 font-bold">2,363.75</div>
                          <div className="text-sm">-3.02%</div>
                        </div>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="mt-6 h-48 bg-gray-50 rounded-lg flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 300 200">
                        <polyline
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                          points="0,150 50,120 100,100 150,80 200,90 250,70 300,60"
                          className="animate-pulse"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chicago Bulls Jersey */}
              <div className="absolute -right-8 top-8 w-24 h-32 bg-plus500-red rounded-lg transform rotate-12 shadow-lg hover:rotate-6 transition-transform duration-300 animate-scale-in" style={{animationDelay: '1s'}}>
                <div className="p-2 text-white text-center">
                  <div className="text-xs font-bold">NIKE</div>
                  <div className="text-xl font-bold mt-2">Plus500</div>
                  <div className="text-xs mt-1">TRADING</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;