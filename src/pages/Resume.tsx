import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-plum mb-4">
            Resume
          </h1>
          <a
            href="https://drive.google.com/file/d/1dBpgSdS2Ri3YLxpj9oCJExnZFT__zahj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-rosegold text-ivory px-6 py-3 rounded-full hover:bg-rosegold/90 transition-colors"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-plum mb-6">Education</h2>
            <div>
              <h3 className="text-xl font-bold text-plum">
                Bachelor of Science in Computer Science(Honors)
              </h3>
              <p className="text-rosegold">
                Birla Institute of Technology and Science, Pilani • 2022 - 2027
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-plum">
                Bachelor of Techonology in Computer Science and Engineering
              </h3>
              <p className="text-rosegold">
                Nalla Narasimha Reddy Education Society’s Group of Institutions
                • 2022 - 2026
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-plum mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Shell Scripting',
                'Linux/Unix',
                'TypeScript',
                'MERN Stack',
                'Python',
                'AWS',
                'AI/ML and LLMs',
                'DevOps Tools',
                'DataBase tools',
                'Java Full Stack',
                'C/C++',
                'Power BI',
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-lavender/30 text-plum px-4 py-2 rounded-full text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
