import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getBlogPost } from '../../utils/blogUtils';

const BlogPost = () => {
  const { id } = useParams();
  const post = getBlogPost(id || '');

  if (!post) {
    return (
      <div className="min-h-screen py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl text-plum">Post not found</h1>
          <Link to="/blog" className="text-rosegold hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-24"
    >
      <div className="max-w-3xl mx-auto px-4">
        <Link
          to="/blog"
          className="inline-flex items-center text-rosegold hover:underline mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />

        <div className="flex items-center space-x-4 text-sm text-plum/70 mb-4">
          <span className="flex items-center">
            <Calendar size={16} className="mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <Clock size={16} className="mr-1" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-plum mb-6">{post.title}</h1>
        <div className="prose prose-plum max-w-none">
          {post.content}
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;