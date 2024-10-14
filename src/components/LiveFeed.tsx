import React, { useState, useEffect } from 'react';
import { MapPin, Euro, BedDouble, Bath, RefreshCw } from 'lucide-react';

const LiveFeed: React.FC = () => {
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchListings = async () => {
    setLoading(true);
    // Simulating API call to fetch live listings
    const response = await fetch('https://api.example.com/listings');
    const data = await response.json();
    setListings(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchListings();
    const interval = setInterval(fetchListings, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <RefreshCw className="animate-spin text-blue-500" size={48} />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Live Rental Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{listing.title}</h3>
              <div className="flex items-center mb-2 text-gray-600">
                <MapPin className="text-blue-500 mr-1" size={16} />
                <span>{listing.location}</span>
              </div>
              <div className="flex items-center mb-2 text-gray-600">
                <Euro className="text-green-500 mr-1" size={16} />
                <span>{listing.price} / month</span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <div className="flex items-center">
                  <BedDouble className="text-blue-500 mr-1" size={16} />
                  <span>{listing.bedrooms} bed</span>
                </div>
                <div className="flex items-center">
                  <Bath className="text-blue-500 mr-1" size={16} />
                  <span>{listing.bathrooms} bath</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveFeed;