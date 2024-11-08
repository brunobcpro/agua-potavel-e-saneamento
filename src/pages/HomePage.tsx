// src/pages/HomePage.tsx
import React from 'react';
import AboutSection from '../components/AboutSection';
import GoalsSection from '../components/GoalsSection';
import ContributeSection from '../components/ContributeSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <AboutSection />
      <GoalsSection />
      <ContributeSection />
    </main>
  );
};

export default HomePage;
