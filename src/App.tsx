import React, { useState, useEffect } from 'react';
import { Home, Search, Facebook, Map, Info, Phone, Menu, X } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import RentalList from './components/RentalList';
import FacebookFeed from './components/FacebookFeed';
import LiveFeed from './components/LiveFeed';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('listings');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log('Fetching rental data...');
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'listings':
        return <RentalList />;
      case 'facebook':
        return <FacebookFeed />;
      case 'live':
        return <LiveFeed />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <RentalList />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} setActiveTab={setActiveTab} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8 overflow-x-auto">
          <nav className="bg-white shadow-lg rounded-lg">
            <ul className="flex">
              <li>
                <button
                  className={`px-4 py-2 rounded-lg ${activeTab === 'listings' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                  onClick={() => setActiveTab('listings')}
                >
                  <Home className="inline-block mr-2" size={18} />
                  Listings
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 rounded-lg ${activeTab === 'facebook' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                  onClick={() => setActiveTab('facebook')}
                >
                  <Facebook className="inline-block mr-2" size={18} />
                  Facebook Feed
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 rounded-lg ${activeTab === 'live' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                  onClick={() => setActiveTab('live')}
                >
                  <Map className="inline-block mr-2" size={18} />
                  Live Feed
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 rounded-lg ${activeTab === 'about' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                  onClick={() => setActiveTab('about')}
                >
                  <Info className="inline-block mr-2" size={18} />
                  About
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 rounded-lg ${activeTab === 'contact' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                  onClick={() => setActiveTab('contact')}
                >
                  <Phone className="inline-block mr-2" size={18} />
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}

export default App;