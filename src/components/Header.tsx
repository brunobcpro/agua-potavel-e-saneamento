// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Título do Header */}
        <h1 className="text-2xl font-bold">
          ODS 6: Água Potável e Saneamento
        </h1>
        
        {/* Navegação */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-300 transition duration-300">
                Início
              </Link>
            </li>
            <li>
              <Link to="/nova-pagina" className="hover:text-blue-300 transition duration-300">
                Nova Página
              </Link>
            </li>
            <li>
              <Link to="/ass" className="hover:text-blue-300 transition duration-300">
                Desperdicio
              </Link>
            </li>
            {/* Adicione mais links conforme necessário */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
