import React from 'react';
import { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
  onClick?: () => void; // Optional onClick handler
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, onClick }) => {
  const cardContent = (
    <>
      <h4 className="text-xl font-semibold text-blue-700 mb-3">{resource.title}</h4>
      <p className="text-gray-600">{resource.description}</p>
    </>
  );

  const commonClasses = "bg-white p-8 rounded-xl shadow-md border border-gray-200 text-center transition-shadow";

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${commonClasses} hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full h-full flex flex-col justify-center items-center cursor-pointer`}
        aria-label={`Abrir ${resource.title}`}
      >
        {cardContent}
      </button>
    );
  }

  return (
    <div className={`${commonClasses} hover:shadow-xl`}>
      {cardContent}
    </div>
  );
};

export default ResourceCard;