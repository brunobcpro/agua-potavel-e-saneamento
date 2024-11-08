// src/components/ContributeSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const ContributeSection: React.FC = () => {
  return (
    <motion.section
      className="section contribute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <h2>Como Você Pode Contribuir</h2>
      <p>
        Participe de iniciativas locais, economize água e promova a conscientização sobre a importância da água potável e do saneamento.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="action-button"
      >
        Saiba Mais
      </motion.button>
    </motion.section>
  );
};

export default ContributeSection;