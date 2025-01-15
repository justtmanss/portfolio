import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts } from '../utils/blogUtils';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
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
            Blog
          </h1>
          <p className="text-plum/80 max-w-2xl mx-auto mb-8">
            Thoughts, tutorials, and insights about everything I do and Explore in the realm of Computer Science.
          </p>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg border border-lavender/50 focus:border-rosegold focus:ring-2 focus:ring-rosegold/20 outline-none"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;