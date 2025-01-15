import React, { useState } from 'react';
import ProjectCard from '../components/portfolio/ProjectCard';
import ProjectFilter from '../components/portfolio/ProjectFilter';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'GAIN',
    description: 'Growth and Investment Advisory Network',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Python'],
    githubUrl: 'https://github.com/justtmanss/GAIN',
    liveUrl: 'https://gain-zeta.vercel.app/',
    category: 'Full Stack with AI/ML',
  },
  {
    title: 'AI Dog Images Classifier ',
    description: 'An AI-powered image classification tool',
    image:
      'https://images.unsplash.com/photo-1547954575-855750c57bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Python', 'TorchVision'],
    githubUrl: 'https://github.com/justtmanss/pretrained_dog_classifier',
    category: 'AI/ML',
  },
  {
    title: 'AI Face Mask Detector ',
    description:
      'A comprehensive machine learning project for detecting face masks in images or real-time video streams. This project is designed to aid in public safety efforts by identifying individuals wearing or not wearing masks using computer vision techniques.',
    image:
      'https://images.unsplash.com/photo-1612066518884-2eda70eb3100?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Python', 'TensorFlow', 'cv2', 'keras'],
    githubUrl: 'https://github.com/justtmanss/Face-Mask-Detection-master',
    category: 'AI/ML',
  },
  {
    title: 'Aerodemy',
    description:
      'Startup where  we provide new students with resources required to get into aviation.',
    image:
      'https://plus.unsplash.com/premium_photo-1661964062531-dcbd3b63d1bd?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'Node.js', 'MongoDB', 'Python'],
    githubUrl: 'https://github.com/justtmanss/aerodemy-main',
    liveUrl: 'https://aerodemy-main.vercel.app/',
    category: 'Web Development',
  },
  {
    title: 'MediSmiles',
    description:
      'Introduction to a Real Time, AI-driven, B2B and B2C Comprehensive Healthcare service, coming soon!',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'TailWind CSS', 'Vite', 'TypeScript'],
    githubUrl: 'https://github.com/justtmanss/medi-smiles-intro',
    liveUrl: 'https://medismiles.vercel.app/',
    category: 'Web Development',
  },
];

const categories = ['All', 'Web Development', 'AI/ML', 'Full Stack with AI/ML'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-plum mb-4">
            My Projects
          </h1>
          <p className="text-plum/80 max-w-2xl mx-auto">
            Explore my latest projects and creative works
          </p>
        </motion.div>

        <ProjectFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
