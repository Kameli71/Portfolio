import React from 'react';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import ServiceSection from '../ServiceSection';
import ProjectsSection from '../ProjectsSection';
import ContactBanner from '../ContactBanner';

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <ContactBanner />
    </div>
  );
}

export default Home;
