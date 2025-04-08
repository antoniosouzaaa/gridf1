
import { useState } from 'react';
import NewsCard from './NewsCard';

const mockNews = [
  {
    id: 1,
    title: "Max Verstappen conquista vitória emocionante no GP da Holanda",
    excerpt: "O piloto holandês dominou a corrida em casa e ampliou sua vantagem na liderança do campeonato mundial.",
    date: "04 Abr 2025",
    imageUrl: "https://images.unsplash.com/photo-1504707167529-10dc3e8a6dc5?ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "Mercedes anuncia mudanças na equipe técnica para melhorar desempenho",
    excerpt: "Após resultados abaixo do esperado, a equipe alemã faz alterações importantes visando a recuperação.",
    date: "03 Abr 2025",
    imageUrl: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Ferrari apresenta melhorias aerodinâmicas para o próximo GP",
    excerpt: "Equipe italiana busca diminuir diferença para Red Bull com novo pacote de atualizações para o carro.",
    date: "02 Abr 2025",
    imageUrl: "https://images.unsplash.com/photo-1551306835-356c4bbc4c7a?ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "Lewis Hamilton considera estender contrato por mais duas temporadas",
    excerpt: "Heptacampeão mundial demonstra interesse em continuar na Fórmula 1 por mais tempo que o previsto.",
    date: "01 Abr 2025",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3"
  }
];

const NewsSection = () => {
  const [visibleNews, setVisibleNews] = useState(3);
  
  return (
    <section className="animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-f1-navy">Últimas notícias</h2>
        <button 
          onClick={() => setVisibleNews(prev => prev === mockNews.length ? 3 : mockNews.length)}
          className="text-f1-orange hover:text-f1-navy transition-colors font-medium"
        >
          {visibleNews === mockNews.length ? 'Ver menos' : 'Ver todas'}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockNews.slice(0, visibleNews).map((news, index) => (
          <div key={news.id} className={`animate-slide-in`} style={{ animationDelay: `${index * 0.1}s` }}>
            <NewsCard 
              title={news.title}
              excerpt={news.excerpt}
              date={news.date}
              imageUrl={news.imageUrl}
              linkTo={`/noticias/${news.id}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
