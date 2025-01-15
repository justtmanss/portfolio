import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-lavender"></div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className={`relative flex items-center mb-8 ${
            index % 2 === 0 ? 'flex-row-reverse' : ''
          }`}
        >
          <div className="flex-1">
            <div className={`p-6 bg-white rounded-lg shadow-md ${
              index % 2 === 0 ? 'ml-6' : 'mr-6'
            }`}>
              <span className="text-rosegold font-bold">{item.year}</span>
              <h3 className="text-lg font-bold text-plum mt-1">{item.title}</h3>
              <p className="text-plum/80 mt-2">{item.description}</p>
            </div>
          </div>
          <div className="w-4 h-4 bg-rosegold rounded-full border-4 border-ivory absolute left-1/2 transform -translate-x-1/2"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;