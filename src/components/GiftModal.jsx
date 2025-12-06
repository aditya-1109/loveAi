import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Heart, Star } from 'lucide-react';



export function GiftModal({ gift, onClose }) {
  const handleSelect = () => {
    // Handle gift selection
    alert(`Selected: ${gift.name}`);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all"
          >
            <X className="w-6 h-6 text-gray-600" />
          </motion.button>

          <div className="overflow-y-auto max-h-[90vh]">
            {/* Image */}
            <div className="relative h-80 bg-gradient-to-br from-pink-100 to-red-100">
              <img
                src={`https://source.unsplash.com/featured/?${encodeURIComponent(gift.image)}`}
                alt={gift.name}
                className="w-full h-full object-cover"
              />
              
              {/* Floating Hearts */}
              <motion.div
                className="absolute top-6 left-6"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart className="w-12 h-12 text-red-500 fill-red-500 opacity-80" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-4 py-1 bg-gradient-to-r from-pink-100 to-red-100 text-pink-700 rounded-full">
                  {gift.category}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Title & Price */}
              <h2 className="text-gray-800 mb-2">{gift.name}</h2>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mb-6">
                ${gift.price.toFixed(2)}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">{gift.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-gray-800 mb-3">What's Included:</h3>
                <div className="space-y-2">
                  {gift.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSelect}
                  className="flex-1 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Select This Gift
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 border-2 border-pink-300 rounded-full hover:bg-pink-50 transition-all"
                >
                  <Heart className="w-6 h-6 text-pink-500" />
                </motion.button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl">
                <p className="text-gray-600 text-center">
                  💝 Free shipping on orders over $50 • 30-day returns
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
