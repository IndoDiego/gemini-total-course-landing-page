
import React from 'react';

interface CourseInfoItem {
  value: string;
  label: string;
}

interface CourseInfoBarProps {
  items: CourseInfoItem[];
}

const CourseInfoBar: React.FC<CourseInfoBarProps> = ({ items }) => {
  return (
    <section className="bg-gray-100 border-t border-b border-gray-200">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {items.map((item, index) => (
            <div key={index}>
              <h4 className="text-2xl font-bold text-blue-600">{item.value}</h4>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseInfoBar;
