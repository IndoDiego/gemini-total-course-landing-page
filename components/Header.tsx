import React, { useState } from 'react';
import { NavLink } from '../types';

interface HeaderProps {
  navLinks: NavLink[];
  onOpenModal: () => void;
  onOpenDojoModal: () => void; // Added prop for Dojo modal
}

const Header: React.FC<HeaderProps> = ({ navLinks, onOpenModal, onOpenDojoModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#aprende-jugando") {
      e.preventDefault();
      onOpenDojoModal();
      setIsMobileMenuOpen(false); 
    } else {
      // Allow default behavior for other links, which will scroll to section
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  const handleOpenRegistrationModalClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onOpenModal();
    setIsMobileMenuOpen(false); 
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          <a href="#hero">Gemini Total</a>
        </h1>
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#" 
            onClick={handleOpenRegistrationModalClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            aria-label="Inscribirse al curso"
          >
            Inscribirse
          </a>
        </div>
        <button 
            id="mobile-menu-button" 
            className="md:hidden" 
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
      <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden px-6 pb-4`}>
        {navLinks.map((link) => (
          <a 
            key={link.href} 
            href={link.href} 
            className="block py-2 text-gray-600 hover:text-blue-600" 
            onClick={(e) => handleNavLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a 
            href="#" 
            onClick={handleOpenRegistrationModalClick}
            className="block mt-2 bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700"
            aria-label="Inscribirse al curso"
        >
          Inscribirse
        </a>
      </div>
    </header>
  );
};

export default Header;
