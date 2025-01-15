import React from 'react';

interface ProjectFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedCategory === category
              ? 'bg-rosegold text-ivory'
              : 'bg-lavender/30 text-plum hover:bg-lavender/50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;