import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Collections = () => {
  const images = [
    { 
        id: 6, 
        src: '/6.jpeg', 
        alt: 'Jewelry Collection 6',
        text: 'Minimalist Elegance',
    },
    { 

        id: 5, 
        src: '/5.jpeg', 
        alt: 'Jewelry Collection 5',
        text: 'Special Edition',
    },
    { 
      id: 1, 
      src: '/1.jpeg', 
      alt: 'Jewelry Collection 1',
      text: 'Glam Diva',
    },
    { 
      id: 2, 
      src: '/2.jpeg', 
      alt: 'Jewelry Collection 2',
      text: 'Traditional Grace',
    },
    { 
      id: 3, 
      src: '/3.jpeg', 
      alt: 'Jewelry Collection 3',
      text: 'Street Style',
    },
    { 
      id: 4, 
      src: '/4.jpeg', 
      alt: 'Jewelry Collection 4',
      text: 'Everyday Casual',
    },
    
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-light text-gray-800 text-center mb-16"
          >
            Our Collections
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {images.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="aspect-square relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <h3 className="text-white text-2xl font-light mb-2">{image.text}</h3>
                  <button className="bg-white/90 text-gray-800 px-6 py-2 rounded-full text-sm transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;