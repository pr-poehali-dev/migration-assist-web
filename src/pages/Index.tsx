import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import ConsultationSection from '@/components/ConsultationSection';
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
      <FAQSection />
      <ConsultationSection />
      <Footer />
      <FloatingEmergencyButton />
    </div>
  );
};

export default Index;