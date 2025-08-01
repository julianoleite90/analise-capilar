'use client';

import { useState, useEffect } from 'react';
import ScrollLink from './ScrollLink';

const FloatingBackToRanking = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Encontra a seção de conclusão
      const conclusaoSection = document.getElementById('conclusao');
      
      if (conclusaoSection) {
        const rect = conclusaoSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Mostra o botão quando a seção de conclusão está visível na tela
        // (quando o topo da seção está dentro da viewport)
        const shouldShow = rect.top <= viewportHeight * 0.8;
        setIsVisible(shouldShow);
      }
    };

    // Adiciona o listener de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Checa a posição inicial
    handleScroll();

    // Remove o listener quando o componente é desmontado
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <ScrollLink
        targetId="ranking"
        className="bg-[#00A040] hover:bg-[#008F35] text-white font-semibold py-3 px-6 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer"
      >
        <span>↑</span>
        <span className="hidden sm:inline">Voltar ao Ranking</span>
        <span className="sm:hidden">Ranking</span>
      </ScrollLink>
    </div>
  );
};

export default FloatingBackToRanking;