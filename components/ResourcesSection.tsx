import React from 'react';
import { Resource } from '../types';
import ResourceCard from './ResourceCard';

interface ResourcesSectionProps {
  resources: Resource[];
  onOpenDojoModal: () => void; // Added prop
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ resources, onOpenDojoModal }) => {
  return (
    <section id="resources" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900">Recursos Adicionales</h3>
          <p className="mt-4 text-lg text-gray-600">Herramientas y materiales para potenciar tu aprendizaje.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource) => (
            <ResourceCard 
              key={resource.id} 
              resource={resource} 
              onClick={resource.actionType === 'openDojoModal' ? onOpenDojoModal : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;