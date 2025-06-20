
import React, { useState } from 'react';
import { Module } from '../types';
import ModuleItem from './ModuleItem';

interface ModulesSectionProps {
  modules: Module[];
}

const ModulesSection: React.FC<ModulesSectionProps> = ({ modules }) => {
  const [openModuleId, setOpenModuleId] = useState<string | null>(null);

  const handleToggleModule = (moduleId: string) => {
    setOpenModuleId(prevId => (prevId === moduleId ? null : moduleId));
  };

  return (
    <section id="modules" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900">Contenido del Curso</h3>
          <p className="mt-4 text-lg text-gray-600">Un aprendizaje progresivo y profundo distribuido en 5 módulos.</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((module) => (
            <ModuleItem
              key={module.id}
              module={module}
              isOpen={openModuleId === module.id}
              onToggle={() => handleToggleModule(module.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
