import React from 'react';
import { Home, Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen, setActiveTab }) => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Home className="text-white mr-2" size={24} />
          <h1 className="text-2xl font-bold">GermanRentals</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-blue-200" onClick={() => setActiveTab('listings')}>Home</a>
          <a href="#" className="hover:text-blue-200" onClick={() => setActiveTab('about')}>About</a>
          <a href="#" className="hover:text-blue-200" onClick={() => setActiveTab('contact')}>Contact</a>
        </nav>
        <div className="flex items-center">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search rentals..."
              className="bg-white text-gray-800 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          </div>
          <button
            className="md:hidden ml-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-600">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <a href="#" className="block text-white hover:text-blue-200" onClick={() => setActiveTab('listings')}>Home</a>
            <a href="#" className="block text-white hover:text-blue-200" onClick={() => setActiveTab('about')}>About</a>
            <a href="#" className="block text-white hover:text-blue-200" onClick={() => setActiveTab('contact')}>Contact</a>
          </nav>
          <div className="px-4 pb-4">
            <input
              type="text"
              placeholder="Search rentals..."
              className="w-full bg-white text-gray-800 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;