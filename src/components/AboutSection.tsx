// src/components/AboutSection.tsx
import React from 'react';
import { motion } from 'framer-motion';


const AboutSection: React.FC = () => {
  return (
    
    <motion.section
      className="section about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Sobre a ODS 6</h2>
     
      <p>
        A ODS 6 busca garantir a disponibilidade e gestão sustentável da água e saneamento para todos.
      </p>
    </motion.section>
  );
};

export default AboutSection;
