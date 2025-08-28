const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-plus500-light-blue mb-4">
              Plus500
            </div>
            <p className="text-gray-400 mb-4">
              Trading with a Plus. Over 30 million customers worldwide have already chosen Plus500.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-plus500-light-blue rounded-full flex items-center justify-center hover-scale cursor-pointer">
                <span className="text-white">f</span>
              </div>
              <div className="w-10 h-10 bg-plus500-light-blue rounded-full flex items-center justify-center hover-scale cursor-pointer">
                <span className="text-white">t</span>
              </div>
              <div className="w-10 h-10 bg-plus500-light-blue rounded-full flex items-center justify-center hover-scale cursor-pointer">
                <span className="text-white">in</span>
              </div>
            </div>
          </div>

          {/* Trading */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-plus500-light-blue">Trading</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Start Trading</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Demo Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Trading Platform</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Mobile Trading</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Futures Academy</a></li>
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-plus500-light-blue">Markets</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">S&P 500</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">NASDAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Bitcoin</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">EUR/USD</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Oil & Gold</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-plus500-light-blue">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">24/7 Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Legal Documents</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Plus500. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Risk Disclosure</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Cookie Policy</a>
            </div>
          </div>
          
          <div className="mt-8 text-xs text-gray-500">
            <p className="mb-2">
              * Plus500 offers multiple global payment methods. Futures trading by U.S. market participants occurs through Plus500US Financial Services LLC, a registered futures commission merchant.
            </p>
            <p>
              Trading derivatives carries significant risks and is not suitable for all investors. You should carefully consider your objectives, financial situation, needs and level of experience before entering into any margined transactions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;