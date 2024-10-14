import React from 'react';
import { MapPin, Euro, BedDouble, Bath, ExternalLink } from 'lucide-react';

const RentalList: React.FC = () => {
  const rentals = [
    {
      id: 1,
      title: 'Modern Apartment in Berlin',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 1200,
      location: 'Berlin',
      bedrooms: 2,
      bathrooms: 1,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.654394692827!2d13.404953776677382!3d52.52000687210677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1682523143810!5m2!1sen!2sus',
      nearbyAmenities: ['Supermarket', 'Park', 'Public Transport', 'Restaurants'],
    },
    {
      id: 2,
      title: 'Cozy Studio in Munich',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 800,
      location: 'Munich',
      bedrooms: 1,
      bathrooms: 1,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.523783669519!2d11.574606976561592!3d48.13743137130387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sMunich%2C%20Germany!5e0!3m2!1sen!2sus!4v1682523207557!5m2!1sen!2sus',
      nearbyAmenities: ['University', 'Cafes', 'Shopping Center', 'Gym'],
    },
    {
      id: 3,
      title: 'Spacious Family Home in Hamburg',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 1800,
      location: 'Hamburg',
      bedrooms: 4,
      bathrooms: 2,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.4812907111454!2d9.991348776715!3d53.55131297210702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b161837e1813b9%3A0x4263df27bd63aa0!2sHamburg%2C%20Germany!5e0!3m2!1sen!2sus!4v1682523247557!5m2!1sen!2sus',
      nearbyAmenities: ['School', 'Park', 'Hospital', 'Shopping Mall'],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rentals.map((rental) => (
        <div key={rental.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <img src={rental.image} alt={rental.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{rental.title}</h2>
            <div className="flex items-center mb-2 text-gray-600">
              <MapPin className="text-blue-500 mr-2" size={18} />
              <span>{rental.location}</span>
            </div>
            <div className="flex items-center mb-4 text-gray-600">
              <Euro className="text-green-500 mr-2" size={18} />
              <span className="text-xl font-bold">{rental.price} / month</span>
            </div>
            <div className="flex items-center justify-between mb-4 text-gray-600">
              <div className="flex items-center">
                <BedDouble className="text-blue-500 mr-1" size={18} />
                <span>{rental.bedrooms} bed</span>
              </div>
              <div className="flex items-center">
                <Bath className="text-blue-500 mr-1" size={18} />
                <span>{rental.bathrooms} bath</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-gray-700">Nearby Amenities:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {rental.nearbyAmenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-gray-700">Location:</h3>
              <iframe
                src={rental.mapUrl}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              View Details
              <ExternalLink className="ml-2" size={18} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RentalList;