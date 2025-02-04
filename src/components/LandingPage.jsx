import { motion } from 'framer-motion';
import { useState } from 'react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl font-light text-gray-800"
            >
              AURA JEWEL
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Collections', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ height: isMenuOpen ? 'auto' : 0 }}
            className={`md:hidden overflow-hidden ${isMenuOpen ? 'pb-4' : ''}`}
          >
            {['Home', 'Collections', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <img 
            src="/hero-jewelry.jpeg" 
            alt="Elegant jewelry collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <motion.div 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6">AURA JEWEL</h1>
          <p className="text-xl md:text-2xl font-light">Embrace Your Unique Brilliance</p>
        </motion.div>
      </motion.section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-800">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become a globally admired jewelry brand that celebrates individuality, empowers self-expression, and enhances the unique aura of every woman.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/vision-image.jpeg" 
              alt="Elegant jewelry piece" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <img 
              src="/mission-image.jpeg" 
              alt="Sustainable jewelry crafting" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To craft high-quality, stylish, and sustainable jewelry that reflects the diverse personalities and journeys of women, while fostering inclusivity, innovation, and ethical practices in the jewelry industry.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;