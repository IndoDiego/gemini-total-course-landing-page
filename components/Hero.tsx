
import React from 'react';

interface HeroProps {
  onOpenModal: () => void;
  price: number;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal, price }) => {
  const handleOpenModalClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onOpenModal();
  };
  return (
    <section id="hero" className="bg-white">
      <div className="container mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">Gemini Total:</span> De Cero a Creador con IA
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          Aprende desde los fundamentos de la IA generativa hasta las técnicas más avanzadas de "prompting" y aplicación multimodal. Integra Gemini como una herramienta estratégica para potenciar tu creatividad, productividad y capacidad de análisis.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#module1" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            Explorar Módulos
          </a>
          <button 
            onClick={handleOpenModalClick}
            className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg"
            aria-label={`Inscribirse al curso por €${price}`}
          >
            Inscríbete Ahora por €{price}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
