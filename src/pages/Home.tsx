import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundAnimation from '../components/home/BackgroundAnimation';

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="min-h-screen relative bg-gradient-to-br from-ivory via-lavender/20 to-blush/20 overflow-hidden">
        <BackgroundAnimation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-plum mt-8">
              Hi, I'm <span className="text-rosegold">Manasvi Agrawal</span>
            </h1>

            <div className="font-roboto text-xl md:text-2xl text-plum/80 h-20">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Problem Solver',
                  2000,
                  'AI/ML Enthusiast',
                  2000,
                  'Web3 Developer',
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <Link
                to="/portfolio"
                className="inline-block bg-rosegold text-ivory px-8 py-3 rounded-full font-roboto font-medium hover:bg-rosegold/90 transition-colors transform hover:scale-105"
              >
                Explore My Work
              </Link>
            </motion.div>

            <motion.button
              onClick={scrollToProjects}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="pt-16"
            >
              <ArrowDown className="mx-auto text-plum/50" size={32} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <section id="featured-projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-plum mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-plum mb-4">GAIN</h3>
              <p className="text-plum/80">
                Growth and Investment Advisory Network.
              </p>
              <Link
                to="/portfolio"
                className="inline-block mt-4 text-rosegold hover:underline"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;