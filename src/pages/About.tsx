import React from 'react';
import Timeline from '../components/about/Timeline';
import SkillBar from '../components/about/SkillBar';
import { motion } from 'framer-motion';

const timelineItems = [
  {
    year: '2024',
    title: 'Student Intern',
    description: 'Student Intern at a Blockchain/Web3 Based startup DappLooker',
  },
  {
    year: '2023',
    title: 'Student Intern',
    description: 'Developed a Java-based projects @ Navodita Infotech.',
  },
  {
    year: '2023',
    title: 'Web Development Intern(Summer Intern) @ KWK ',
    description:
      'Key role in developing the websites UI, ensuring an engaging and user-friendly experience.',
  },
  {
    year: '2022',
    title: 'Computer Science Freshman',
    description:
      'Started professional journey in tech through my bachelors degree',
  },
  {
    year: '2021',
    title: 'My First Internship',
    description:
      'Key role in a cross-functional project by working with the Computer/Electrical department to implement a Project ',
  },
];

const skills = [
  { skill: 'Python', percentage: 95 },
  { skill: 'MERN Stack', percentage: 92 },
  { skill: 'Database Servers', percentage: 87 },
  { skill: 'Java', percentage: 95 },
  { skill: 'C & C++', percentage: 90 },
  { skill: 'Shell scripting and Linux', percentage: 90 },
  { skill: 'Data Visualization', percentage: 100 },
  { skill: 'DevOps Tools', percentage: 95 },
];

const About = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-plum mb-4">
            About Me
          </h1>
          <p className="text-plum/80 max-w-2xl mx-auto">
            Passionate about creating beautiful and functional experiences for
            all
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-plum mb-8">My Journey</h2>
            <Timeline items={timelineItems} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-plum mb-8">Skills</h2>
            {skills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
