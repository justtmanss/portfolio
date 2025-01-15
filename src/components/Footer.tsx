import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-lavender/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/justtmanss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum hover:text-rosegold transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/manasvi-agrawal-847b48229/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum hover:text-rosegold transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:manasvi.g.agrawal@gmail.com"
              className="text-plum hover:text-rosegold transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <p className="text-plum font-roboto text-sm">
            © {new Date().getFullYear()} Manasvi Agrawal. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-rosegold text-ivory p-2 rounded-full shadow-lg hover:bg-rosegold/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;