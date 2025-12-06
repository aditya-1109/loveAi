import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';



export function GiftCard({ gift, index, onClick }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-pink-100"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-pink-100 to-red-100">
        <img
          src={`https://source.unsplash.com/featured/?${encodeURIComponent(gift.image)}`}
          alt={gift.name}
          className="w-full h-full object-cover"
        />  
        
        {/* Like Button */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md"
        >
          <Heart
            className={`w-5 h-5 transition-all ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </motion.button>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
          <span className="text-pink-600">{gift.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-gray-800 mb-2">{gift.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{gift.description}</p>

        <div className="flex items-center justify-between">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">
            ${gift.price.toFixed(2)}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            View
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}