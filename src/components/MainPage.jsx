import { useState } from 'react';
import { Send, Sparkles, Zap, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedBackground } from './AnimatedBackground';
import { apiFunction } from '../../api/apiFunction';
import { AIApi } from '../../api/apis';

export function MainPage() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setMessages([...messages, { type: 'user', text: prompt }]);
    

    const response = await apiFunction("post", [], {message: prompt}, AIApi);

    if(response){
      console.log(response.output)
      setPrompt('');
      setMessages((prev) => [
        ...prev,
        {
          type: 'ai',
          text: `${response.output}`,
        },
      ]);
    }

  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col">
      <AnimatedBackground />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-8 max-w-5xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-pink-200/50 shadow-lg mb-6"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Sparkles className="w-4 h-4 text-pink-500" />
            </motion.div>
            <span className="text-pink-700">Powered by AI • Create Love Stories</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-500 to-pink-600 animate-gradient">
                Craft Your Perfect
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-pink-400/20 to-red-400/20 blur-2xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-red-500">
              Love Experience
            </span>
          </motion.h1>

         
        </motion.div>

        {/* Chat Container - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
          className="w-full max-w-5xl mb-12"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-pink-200/50 overflow-hidden">
              {/* Messages Area */}
              <div className="h-[400px] overflow-y-auto p-8">
                {messages.length === 0 ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <motion.div
                        className="relative inline-block"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <div className="relative md:mt-0 mt-15">
                          <Sparkles className="w-20 h-20 text-pink-400 mx-auto" />
                          <motion.div
                            className="absolute inset-0"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                          >
                            <Sparkles className="w-20 h-20 text-pink-300 mx-auto" />
                          </motion.div>
                        </div>
                      </motion.div>

                      <div>
                        <h3 className="text-gray-800 mb-3">Ready to create magic? ✨</h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                          Describe your perfect romantic moment, special occasion, or heartfelt message
                        </p>
                      </div>

                      {/* Example Prompts */}
                      <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
                        {[
                          '💝 Anniversary celebration',
                          '🌹 Romantic proposal',
                          '💌 Love letter',
                          '🎁 Birthday surprise',
                        ].map((example, i) => (
                          <motion.button
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setPrompt(example)}
                            className="px-4 py-2 bg-gradient-to-r from-pink-100 to-red-100 hover:from-pink-200 hover:to-red-200 text-pink-700 rounded-full border border-pink-200 transition-all"
                          >
                            {example}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.4, type: 'spring' }}
                        className={`flex ${
                          message.type === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[75%] px-6 py-4 rounded-2xl ${
                            message.type === 'user'
                              ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg'
                              : 'bg-white/90 border-2 border-pink-200 text-gray-800 shadow-md'
                          }`}
                        >
                          {message.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Input Area - Enhanced */}
              <form onSubmit={handleSubmit} className="p-6 border-t border-pink-200/50 bg-gradient-to-r from-pink-50/50 to-red-50/50 backdrop-blur-sm">
                <div className="flex gap-3">
                  <div className="flex-1 relative group">
                    <input
                      type="text"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Describe your romantic vision..."
                      className="w-full px-6 py-5 rounded-2xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none bg-white/90 placeholder-gray-400 transition-all shadow-sm focus:shadow-lg"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 to-red-400 opacity-0 group-focus-within:opacity-20 blur-xl transition-opacity pointer-events-none"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-8 py-5 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <Send className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Send</span>
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
        >
          <FeatureCard
            icon={<Heart className="w-8 h-8 text-pink-500" />}
            title="Personalized"
            description="AI-crafted romantic experiences designed uniquely for you"
            delay={0.9}
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-red-500" />}
            title="Instant"
            description="Get your custom romantic URL in just seconds"
            delay={1.0}
          />
          <FeatureCard
            icon={<Sparkles className="w-8 h-8 text-pink-500" />}
            title="Beautiful"
            description="Stunning designs that capture the essence of love"
            delay={1.1}
          />
        </motion.div>

        {/* footer section */}
         <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-8 mt-4 max-w-5xl"
        >
        

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 max-w-3xl mx-auto mb-4"
          >
            Tell us your romantic vision, and our AI will create a stunning personalized experience
            tailored just for you and your loved one
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-6 text-gray-600"
          >
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>10k+ Love Stories</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-pink-500" />
              <span>Instant Creation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


function FeatureCard({ icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-red-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"
      />
      <div className="relative bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-pink-200/50 shadow-lg hover:shadow-2xl transition-all">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block"
        >
          {icon}
        </motion.div>
        <h3 className="text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
