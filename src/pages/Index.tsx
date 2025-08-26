import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import ConsultationSection from '@/components/ConsultationSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';
import FloatingEmergencyButton from '@/components/FloatingEmergencyButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <ConsultationSection />
      <ContactsSection />
      <Footer />
      <FloatingEmergencyButton />
    </div>
  );
};

export default Index;