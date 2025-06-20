
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Gemini Total. Creado para potenciar tus habilidades en IA.</p>
        <p className="text-sm text-gray-400 mt-2">Diseño web generado con IA.</p>
      </div>
    </footer>
  );
};

export default Footer;
