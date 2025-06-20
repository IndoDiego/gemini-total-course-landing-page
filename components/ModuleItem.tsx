
import React, { useRef } from 'react';
import { Module } from '../types';

interface ModuleItemProps {
  module: Module;
  isOpen: boolean;
  onToggle: () => void;
}

const ModuleItem: React.FC<ModuleItemProps> = ({ module, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      id={module.id} // Added id here for direct linking
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
    >
      <button
        className="module-toggle w-full text-left p-6 flex justify-between items-center focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`module-content-${module.id}`}
      >
        <div>
          <h4 className="text-lg font-semibold text-blue-700">{module.title}</h4>
          <p className="text-sm text-gray-500 mt-1">{module.durationInfo}</p>
        </div>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        id={`module-content-${module.id}`}
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ maxHeight: isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px' }}
      >
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <ul className="space-y-4 text-gray-700">
            {module.contentPoints.map((point, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModuleItem;
