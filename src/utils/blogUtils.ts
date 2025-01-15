export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to set up a new React project with TypeScript and best practices',
    content: 'Full blog post content here...',
    date: 'March 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'TypeScript', 'Web Development'],
  },
  {
    id: '2',
    title: 'Modern CSS Techniques',
    excerpt: 'Explore modern CSS features and how to use them effectively',
    content: 'Full blog post content here...',
    date: 'March 10, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['CSS', 'Web Development', 'Design'],
  },
];

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.id === id);
};