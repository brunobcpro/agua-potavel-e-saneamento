// src/pages/NewPage.tsx
import React from 'react';
import { motion } from 'framer-motion';

const NewPage: React.FC = () => {
  return (
    <motion.main
      className="new-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Nova Página</h2>
      <p>
        Este é o conteúdo da nova página. Aqui você pode adicionar qualquer informação adicional que desejar.
      </p>
    </motion.main>
  );
};

export default NewPage;
