import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      <Navbar />

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
      <Footer/>
    </div>
  );
};

export default LandingPage;