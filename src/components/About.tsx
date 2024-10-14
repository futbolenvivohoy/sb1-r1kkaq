import React from 'react';
import { Home, Search, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">About GermanRentals</h2>
      <p className="text-gray-600 mb-8">
        GermanRentals is your one-stop platform for finding the perfect rental home in Germany. We aggregate listings from various sources and provide a comprehensive view of the rental market across major German cities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <Home className="mx-auto text-blue-500 mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Wide Selection</h3>
          <p className="text-gray-600">Browse through thousands of rental listings across Germany.</p>
        </div>
        <div className="text-center">
          <Search className="mx-auto text-blue-500 mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Easy Search</h3>
          <p className="text-gray-600">Find your ideal home with our powerful search and filter options.</p>
        </div>
        <div className="text-center">
          <Users className="mx-auto text-blue-500 mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Community Driven</h3>
          <p className="text-gray-600">Connect with landlords and other renters through our platform.</p>
        </div>
      </div>
    </div>
  );
};

export default About;