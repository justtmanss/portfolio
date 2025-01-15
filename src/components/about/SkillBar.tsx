import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-plum font-medium">{skill}</span>
        <span className="text-plum/80">{percentage}%</span>
      </div>
      <div className="h-2 bg-lavender/30 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-rosegold rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;