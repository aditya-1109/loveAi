import { Heart, Gift, Sparkles, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar({ currentPage, onNavigate }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      className="relative z-50 bg-white/80 backdrop-blur-md border-b border-pink-200/50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <Heart className="w-8 h-8 text-red-500 fill-red-500" />
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart className="w-8 h-8 text-red-400" />
              </motion.div>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
              LoveAI
            </span>
          </motion.div>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            <NavLink
              icon={<Home className="w-5 h-5" />}
              label="Home"
              active={currentPage === 'home'}
              onClick={() => onNavigate('home')}
            />
            <NavLink
              icon={<Gift className="w-5 h-5" />}
              label="Gifts"
              active={currentPage === 'gifts'}
              onClick={() => onNavigate('gifts')}
            />
            <NavLink
              icon={<Sparkles className="w-5 h-5" />}
              label="Inspiration"
              active={false}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}


function NavLink({ icon, label, active, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
        active
          ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg'
          : 'text-gray-700 hover:bg-pink-100'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span className='md:flex hidden'>{label}</span>
    </motion.button>
  );
}
