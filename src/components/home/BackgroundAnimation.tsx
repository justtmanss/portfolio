import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Main gradient circle */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(183,110,121,0.15) 0%, rgba(216,191,216,0.05) 50%, rgba(255,250,240,0) 100%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-[15%] w-72 h-72 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(216,191,216,0.1) 0%, rgba(216,191,216,0) 70%)',
        }}
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-40 right-[10%] w-96 h-96"
        style={{
          background: 'radial-gradient(circle, rgba(255,193,193,0.1) 0%, rgba(255,193,193,0) 70%)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Small floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-rosegold/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;