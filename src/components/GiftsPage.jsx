import { useMemo, useState } from 'react';
import { Heart, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { GiftCard } from './GiftCard';
import { GiftModal } from './GiftModal';



const gifts= [
  {
    id: 1,
    name: 'Rose Bouquet Deluxe',
    price: 89.99,
    image: 'roses bouquet',
    category: 'Flowers',
    description: 'A stunning arrangement of 24 premium red roses, beautifully wrapped with elegant ribbon.',
    features: ['24 Premium Roses', 'Elegant Wrapping', 'Free Card Message', 'Same Day Delivery'],
  },
  {
    id: 2,
    name: 'Chocolate Heart Box',
    price: 45.99,
    image: 'chocolate hearts box',
    category: 'Chocolates',
    description: 'Handcrafted artisan chocolates in a beautiful heart-shaped box.',
    features: ['20 Artisan Chocolates', 'Heart-Shaped Box', 'Premium Belgian Chocolate', 'Gift Wrapped'],
  },
  {
    id: 3,
    name: 'Romantic Dinner Set',
    price: 129.99,
    image: 'romantic dinner candles',
    category: 'Experiences',
    description: 'Complete romantic dinner experience with candles, wine, and gourmet meal kit.',
    features: ['Gourmet Meal Kit', 'Premium Wine', 'Scented Candles', 'Recipe Instructions'],
  },
  {
    id: 4,
    name: 'Love Letter Kit',
    price: 34.99,
    image: 'vintage letter paper',
    category: 'Stationery',
    description: 'Beautiful vintage-style stationery set perfect for writing love letters.',
    features: ['30 Premium Papers', 'Wax Seal Set', 'Calligraphy Pen', 'Decorative Envelopes'],
  },
  {
    id: 5,
    name: 'Heart Pendant Necklace',
    price: 159.99,
    image: 'heart necklace jewelry',
    category: 'Jewelry',
    description: 'Elegant sterling silver heart pendant with sparkling crystals.',
    features: ['Sterling Silver', 'Crystal Accents', 'Gift Box Included', 'Lifetime Warranty'],
  },
  {
    id: 6,
    name: 'Spa Day Package',
    price: 199.99,
    image: 'spa relaxation',
    category: 'Experiences',
    description: 'Luxurious spa day for two with massage, facials, and relaxation.',
    features: ['Couples Massage', 'Facial Treatment', 'Aromatherapy', 'Champagne & Snacks'],
  },
  {
    id: 7,
    name: 'Personalized Photo Album',
    price: 54.99,
    image: 'photo album vintage',
    category: 'Keepsakes',
    description: 'Custom leather-bound photo album with your names engraved.',
    features: ['Leather Bound', 'Custom Engraving', '50 Photo Slots', 'Luxury Gift Box'],
  },
  {
    id: 8,
    name: 'Champagne & Strawberries',
    price: 79.99,
    image: 'champagne strawberries',
    category: 'Gourmet',
    description: 'Premium champagne with chocolate-covered strawberries.',
    features: ['Premium Champagne', 'Hand-Dipped Strawberries', 'Elegant Presentation', 'Chilled Delivery'],
  },
  {
    id: 9,
    name: 'Couple星空 Projector',
    price: 69.99,
    image: 'star projector night',
    category: 'Decor',
    description: 'Create a romantic starry night ambiance with this galaxy projector.',
    features: ['Multiple Light Modes', 'Remote Control', 'Bluetooth Speaker', 'Timer Function'],
  },
];

export function GiftsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGift, setSelectedGift] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

      const filteredGifts = useMemo(() => {
    return gifts.filter((gift) => {
      const matchesSearch =
        gift.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gift.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gift.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || gift.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

const categories = ["all", ...new Set(gifts.map((gift) => gift.category))];



  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-12">
     
        {/* Header */}
        <div className="relative z-10 pt-10 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-[#E04587] fill-[#E04587]" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              Gifts of Love
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Curated collection of beautiful gifts for your special moments
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search gifts, categories, or descriptions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-[#FBCFE8] focus:border-[#FF4F9A] focus:outline-none bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 text-gray-800 placeholder-gray-500"
            />
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-love-pink-300/0 to-red-300/0 pointer-events-none"
              animate={{
                boxShadow: searchQuery
                  ? "0 0 20px 0 rgba(255, 128, 202, 0.3)"
                  : "0 0 0 0 rgba(255, 128, 202, 0)",
              }}
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-10 flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#FF4F9A] to-red-500 text-white shadow-lg"
                  : "bg-white/60 backdrop-blur-sm border border-[#FBCFE8] text-gray-700 hover:border-[#EC4899] hover:bg-white/80"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
              <motion.span
                initial={false}
                animate={{
                  opacity: selectedCategory === category ? 1 : 0,
                }}
                className="ml-2 inline-block"
              >
                ✓
              </motion.span>
            </motion.button>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mb-6"
        >
          Showing {filteredGifts.length} gift{filteredGifts.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Gift Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredGifts.map((gift, index) => (
            <GiftCard
              key={gift.id}
              gift={gift}
              index={index}
              onClick={() => setSelectedGift(gift)}
            />
          ))}
        </motion.div>

        {filteredGifts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500">No gifts found matching your search.</p>
          </motion.div>
        )}
      </div>

      {/* Gift Modal */}
      {selectedGift && (
        <GiftModal gift={selectedGift} onClose={() => setSelectedGift(null)} />
      )}
    </div>
  );
}
