import React, { useEffect } from 'react';

interface DojoModalProps {
  isOpen: boolean;
  onClose: () => void;
  htmlContent: string;
}

const DojoModal: React.FC<DojoModalProps> = ({ isOpen, onClose, htmlContent }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scrolling when component unmounts or modal closes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex justify-center items-center z-[100]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dojo-modal-title"
      onClick={onClose} // Close on overlay click
    >
      <div
        className="bg-gray-900 p-2 md:p-4 rounded-xl shadow-2xl w-[95vw] h-[90vh] max-w-screen-2xl transform transition-all flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="flex justify-between items-center mb-2 md:mb-4 px-2 md:px-0">
          <h2 id="dojo-modal-title" className="text-xl md:text-2xl font-bold text-white">
            Aprende Jugando: El Dojo del Prompting 🥋
          </h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2"
            aria-label="Cerrar modal El Dojo del Prompting"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex-grow overflow-hidden rounded-lg">
          <iframe
            srcDoc={htmlContent}
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="El Dojo del Prompting"
            sandbox="allow-scripts allow-same-origin" // Added sandbox for security, allow-forms if needed by dojo
          />
        </div>
      </div>
    </div>
  );
};

export default DojoModal;
