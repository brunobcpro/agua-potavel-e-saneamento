// src/pages/Desperdicio.tsx
import React, { useState } from 'react';
import WaterAnimation from '../components/WaterAnimation'; // Importa o componente de animação

const Desperdicio: React.FC = () => {
  // Estado para contar cliques no botão de dicas
  const [tipCount, setTipCount] = useState(0);

  // Função para incrementar o contador de dicas
  const handleTipClick = () => {
    setTipCount(tipCount + 1);
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      
      {/* Animação de Água */}
      <div className="h-64 bg-gray-200">
        <WaterAnimation />
      </div>

      {/* Conteúdo Principal */}
      <section className="flex-grow py-12 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-6 text-center">
            Combate ao Desperdício de Água
          </h1>
          <p className="text-lg text-gray-700 text-center mb-10">
            O desperdício de água é um problema crítico que afeta o mundo todo.
            Aqui exploramos maneiras de reduzir o desperdício e preservar este
            recurso vital.
          </p>

          {/* Seção de Informações */}
          <section className="bg-white p-8 rounded-lg shadow-lg mb-10 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Importância da Conservação
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A água é essencial para a vida na Terra. Pequenas mudanças no
              nosso dia a dia podem ajudar a preservar grandes quantidades de
              água. Conservar água é um compromisso que todos devemos assumir.
            </p>
          </section>

          {/* Seção de Dicas */}
          <section className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Dicas para Evitar Desperdício
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li>
                <strong>Feche a torneira</strong> enquanto escova os dentes ou
                lava as mãos.
              </li>
              <li>
                <strong>Reaproveite a água da chuva</strong> para regar plantas
                e limpar áreas externas.
              </li>
              <li>
                <strong>Conserte vazamentos</strong> rapidamente para evitar
                desperdício.
              </li>
            </ul>

            {/* Botão Interativo */}
            <button
              onClick={handleTipClick}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300 ease-in-out"
            >
              clique aqui e melhore o meio ambiente,  {tipCount} pessoas ja ajudaram!
            </button>
          </section>
        </div>
      </section>

      {/* Footer */}
      
    </main>
  );
};

export default Desperdicio;
