
import React from 'react';

const ProjectSection: React.FC = () => {
  return (
    <section id="project" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900">Proyecto Final</h3>
          <p className="mt-4 text-lg text-gray-600">Demuestra tu dominio de Gemini con un proyecto práctico.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200">
          <h4 className="text-2xl font-bold text-blue-700 mb-4">Lanzamiento de una Mini-Campaña</h4>
          <p className="text-gray-600 mb-6">
            Crearás una campaña completa para un producto ficticio, utilizando Gemini para cada paso del proceso creativo y estratégico.
          </p>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li><strong>Ideación:</strong> Generar el nombre y concepto de un producto (ej: una bebida energética natural).</li>
            <li><strong>Textos:</strong> Escribir un correo de lanzamiento, un post para blog y 3 copys para redes sociales (Instagram, X, LinkedIn).</li>
            <li><strong>Visual:</strong> Crear una imagen promocional principal para el producto.</li>
            <li><strong>Análisis:</strong> Escribir un párrafo explicando tus elecciones creativas en base a un público objetivo definido con la ayuda de Gemini.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
