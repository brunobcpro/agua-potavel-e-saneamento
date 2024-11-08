// src/components/GoalsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const goals = [
  {
    number: '6.1',
    description: 'Até 2030, alcançar o acesso universal e equitativo à água potável, segura e acessível para todos.',
  },
  {
    number: '6.2',
    description: 'Até 2030, alcançar o acesso a saneamento e higiene adequados e equitativos para todos.',
  },
  // Adicione mais metas conforme necessário
];

const GoalsSection: React.FC = () => {
  return (
    <motion.section
      className="section goals"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2>Metas da ODS 6</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal.number}>
            <strong>{goal.number}</strong>: {goal.description}
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default GoalsSection;
