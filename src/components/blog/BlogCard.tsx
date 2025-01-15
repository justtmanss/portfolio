import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  image,
  tags,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <Link to={`/blog/${id}`}>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-plum/70 mb-3">
            <span className="flex items-center">
              <Calendar size={16} className="mr-1" />
              {date}
            </span>
            <span className="flex items-center">
              <Clock size={16} className="mr-1" />
              {readTime}
            </span>
          </div>
          <h3 className="text-xl font-bold text-plum mb-2">{title}</h3>
          <p className="text-plum/80 mb-4">{excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-lavender/30 text-plum rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;