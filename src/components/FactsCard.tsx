
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const facts = [
  "O piloto mais velho a vencer uma corrida de F1 foi Luigi Fagioli, aos 53 anos, no GP da França de 1951.",
  "Michael Schumacher detém o recorde de mais títulos mundiais, com 7 campeonatos (empatado com Lewis Hamilton).",
  "A volta mais rápida já registrada em uma corrida de F1 foi de 263,6 km/h de média, estabelecida por Lewis Hamilton no GP da Itália de 2020.",
  "O Grande Prêmio de Mônaco é a corrida mais curta do calendário, com apenas 260 km.",
  "A Ferrari é a equipe mais antiga e mais bem-sucedida da Fórmula 1, competindo desde a primeira temporada em 1950."
];

const FactsCard = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      changeFact('next');
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const changeFact = (direction: 'prev' | 'next') => {
    setIsAnimating(true);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentFactIndex(prevIndex => (prevIndex + 1) % facts.length);
      } else {
        setCurrentFactIndex(prevIndex => (prevIndex - 1 + facts.length) % facts.length);
      }
      setIsAnimating(false);
    }, 300);
  };
  
  return (
    <div className="bg-white rounded-lg p-6 h-full shadow-sm">
      <h2 className="text-2xl font-bold text-f1-navy mb-4">Curiosities and "Did You Know?"</h2>
      
      <div className="flex-1 flex items-center justify-center relative py-6">
        <button 
          onClick={() => changeFact('prev')}
          className="absolute left-0 text-gray-400 hover:text-f1-orange transition-colors"
          aria-label="Fato anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <p className={`text-gray-700 text-center max-w-md mx-auto transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {facts[currentFactIndex]}
        </p>
        
        <button 
          onClick={() => changeFact('next')}
          className="absolute right-0 text-gray-400 hover:text-f1-orange transition-colors"
          aria-label="Próximo fato"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      
      <div className="flex justify-center mt-2 space-x-2">
        {facts.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentFactIndex(index);
                setIsAnimating(false);
              }, 300);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentFactIndex ? 'bg-f1-orange w-6' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Fato ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="mt-6">
        <button className="bg-f1-orange hover:bg-f1-orange/90 text-f1-navy font-bold py-3 px-6 rounded-md transition-all w-full">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default FactsCard;
