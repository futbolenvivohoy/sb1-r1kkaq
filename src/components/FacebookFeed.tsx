import React from 'react';
import { Facebook, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const FacebookFeed: React.FC = () => {
  const facebookPosts = [
    {
      id: 1,
      groupName: 'Berlin Rentals',
      postContent: 'Beautiful 2-bedroom apartment available in Kreuzberg. €1200/month. Contact for more info!',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      likes: 15,
      comments: 3,
      shares: 2,
    },
    {
      id: 2,
      groupName: 'Munich Housing',
      postContent: 'Cozy studio near Marienplatz. Perfect for students! €800/month. Available from next month.',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      likes: 8,
      comments: 1,
      shares: 1,
    },
  ];

  return (
    <div className="space-y-6">
      {facebookPosts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-center mb-2">
              <Facebook className="text-blue-600 mr-2" size={24} />
              <span className="font-semibold text-gray-800">{post.groupName}</span>
            </div>
            <p className="text-gray-600 mb-4">{post.postContent}</p>
            <img src={post.image} alt="Rental property" className="w-full h-64 object-cover rounded-md mb-4" />
            <div className="flex justify-between text-gray-500">
              <div className="flex items-center">
                <ThumbsUp size={18} className="mr-1" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle size={18} className="mr-1" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center">
                <Share2 size={18} className="mr-1" />
                <span>{post.shares}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacebookFeed;