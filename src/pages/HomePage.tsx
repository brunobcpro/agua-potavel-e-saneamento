// src/pages/HomePage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';
import heroImage from '../assets/hero-image.jpg';
import waterIcon from '../assets/water-icon.svg';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Seção Hero */}
      <section className="hero-section">
        <img src={heroImage} alt="Água Potável" className="hero-image" />
        <div className="hero-text">
          <h1>ODS 6: Água Potável e Saneamento</h1>
          <p>
            Garantindo água potável e saneamento para todos até 2030.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="cta-button"
          >
            Saiba Mais
          </motion.button>
        </div>
      </section>

      {/* Sobre a ODS 6 */}
      <section className="about-section">
        <h2>Sobre a ODS 6</h2>
        <p>
          A ODS 6 busca garantir a disponibilidade e gestão sustentável da água e saneamento para todos.
        </p>
      </section>

      {/* Metas da ODS 6 */}
      <section className="goals-section">
        <h2>Metas da ODS 6</h2>
        <div className="goals-list">
          <div className="goal-item">
            <img src={waterIcon} alt="Ícone de água" />
            <h3>6.1</h3>
            <p>
              Até 2030, alcançar o acesso universal e equitativo à água potável, segura e acessível para todos.
            </p>
          </div>
          <div className="goal-item">
            <img src={waterIcon} alt="Ícone de água" />
            <h3>6.2</h3>
            <p>
              Até 2030, alcançar o acesso a saneamento e higiene adequados e equitativos para todos.
            </p>
          </div>
          {/* Adicione mais metas conforme necessário */}
        </div>
      </section>

      {/* Como Você Pode Contribuir */}
      <section className="contribute-section">
        <h2>Como Você Pode Contribuir</h2>
        <p>
          Participe de iniciativas locais, economize água e promova a conscientização sobre a importância da água potável e do saneamento.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="cta-button"
        >
          Participe Agora
        </motion.button>
      </section>
    </div>
  );
};

export default HomePage;
