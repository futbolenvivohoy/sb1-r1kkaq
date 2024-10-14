import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-4">
            Have questions or need assistance? We're here to help! Reach out to us using any of the following methods:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-600">
              <Mail className="text-blue-500 mr-2" size={20} />
              <span>info@germanrentals.com</span>
            </li>
            <li className="flex items-center text-gray-600">
              <Phone className="text-blue-500 mr-2" size={20} />
              <span>+49 123 456 7890</span>
            </li>
            <li className="flex items-center text-gray-600">
              <MapPin className="text-blue-500 mr-2" size={20} />
              <span>Hauptstraße 123, 10115 Berlin, Germany</span>
            </li>
          </ul>
        </div>
        <div>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;