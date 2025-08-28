import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center hover-scale cursor-pointer">
            <div className="text-2xl font-bold text-plus500-blue">
              Plus500
            </div>
            <div className="w-6 h-6 bg-plus500-light-blue rounded ml-1 flex items-center justify-center">
              <span className="text-white text-sm font-bold">+</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div 
              className="flex items-center space-x-1 text-foreground hover:text-plus500-blue cursor-pointer transition-colors story-link"
              onClick={() => toggleDropdown('markets')}
            >
              <span>MARKETS</span>
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'markets' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div 
              className="flex items-center space-x-1 text-foreground hover:text-plus500-blue cursor-pointer transition-colors story-link"
              onClick={() => toggleDropdown('company')}
            >
              <span>COMPANY</span>
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div 
              className="flex items-center space-x-1 text-foreground hover:text-plus500-blue cursor-pointer transition-colors story-link"
              onClick={() => toggleDropdown('learn')}
            >
              <span>LEARN</span>
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'learn' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <span className="text-foreground hover:text-plus500-blue cursor-pointer transition-colors story-link">SUPPORT</span>
            <span className="text-foreground hover:text-plus500-blue cursor-pointer transition-colors story-link">MARGINS</span>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1 text-foreground hover:text-plus500-blue cursor-pointer transition-colors story-link">
              <span>LOGIN</span>
            </div>
            <div className="flex items-center space-x-1 text-foreground hover:text-plus500-blue cursor-pointer transition-colors">
              <span>EN</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <Button className="bg-plus500-light-blue hover:bg-plus500-light-blue/90 text-white hover:scale-105 transition-all duration-300">
              Start Trading
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <span className="text-foreground hover:text-plus500-blue cursor-pointer">MARKETS</span>
              <span className="text-foreground hover:text-plus500-blue cursor-pointer">COMPANY</span>
              <span className="text-foreground hover:text-plus500-blue cursor-pointer">LEARN</span>
              <span className="text-foreground hover:text-plus500-blue cursor-pointer">SUPPORT</span>
              <span className="text-foreground hover:text-plus500-blue cursor-pointer">MARGINS</span>
              <span className="text-foreground hover:text-plus500-blue cursor-pointer">LOGIN</span>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;