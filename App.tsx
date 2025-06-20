import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseInfoBar from './components/CourseInfoBar';
import ModulesSection from './components/ModulesSection';
import ProjectSection from './components/ProjectSection';
import ResourcesSection from './components/ResourcesSection';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import PaymentModal from './components/PaymentModal';
import DojoModal from './components/DojoModal';
import { COURSE_MODULES, COURSE_RESOURCES, COURSE_INFO_ITEMS, NAV_LINKS } from './constants';
import { DOJO_HTML_CONTENT } from './dojoContent';

const COURSE_PRICE = 399;

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isDojoModalOpen, setIsDojoModalOpen] = useState(false);
  const [userData, setUserData] = useState<{ email: string; fullName: string } | null>(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenPayment = (userData: { email: string; fullName: string }) => {
    setUserData(userData);
    setIsPaymentModalOpen(true);
  };

  const handleClosePayment = () => {
    setIsPaymentModalOpen(false);
    setUserData(null);
  };

  const handleOpenDojoModal = () => setIsDojoModalOpen(true);
  const handleCloseDojoModal = () => setIsDojoModalOpen(false);

  return (
    <>
      <Header 
        navLinks={NAV_LINKS} 
        onOpenModal={handleOpenModal} 
        onOpenDojoModal={handleOpenDojoModal}
      />
      <main>
        <Hero onOpenModal={handleOpenModal} price={COURSE_PRICE} />
        <CourseInfoBar items={COURSE_INFO_ITEMS} />
        <ModulesSection modules={COURSE_MODULES} />
        <ProjectSection />
        <ResourcesSection 
          resources={COURSE_RESOURCES} 
          onOpenDojoModal={handleOpenDojoModal}
          onOpenLoginModal={handleOpenModal}
        />
      </main>
      <Footer />
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onOpenPayment={handleOpenPayment}
        price={COURSE_PRICE} 
      />
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={handleClosePayment}
        price={COURSE_PRICE}
        userEmail={userData?.email}
        userName={userData?.fullName}
      />
      <DojoModal 
        isOpen={isDojoModalOpen}
        onClose={handleCloseDojoModal}
        htmlContent={DOJO_HTML_CONTENT}
      />
    </>
  );
};

export default App;