import React from 'react';
import { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
  onClick?: () => void; // Optional onClick handler
  onEnrollClick?: () => void; // New prop for enroll button
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, onClick, onEnrollClick }) => {
  const isDojoCard = resource.actionType === 'openDojoModal';

  const cardContent = (
    <>
      <h4 className="text-xl font-semibold text-blue-700 mb-3">{resource.title}</h4>
      <p className="text-gray-600 mb-4">{resource.description}</p>
      {!isDojoCard && onEnrollClick && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEnrollClick();
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Inscríbete para obtener
        </button>
      )}
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