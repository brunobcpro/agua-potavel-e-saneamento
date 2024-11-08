// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <header>
      <h1>ODS 6: Água Potável e Saneamento</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/nova-pagina">Nova Página</Link>
          </li>
          {/* Adicione mais links conforme necessário */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
