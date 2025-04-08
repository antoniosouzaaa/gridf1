
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';

const mockSecondaryNews = [
  {
    id: 5,
    title: "Alonso quer permanecer na Aston Martin até o fim de sua carreira",
    excerpt: "O bicampeão espanhol afirmou que pretende encerrar sua trajetória na F1 com a equipe britânica.",
    date: "31 Mar 2025",
    imageUrl: "https://images.unsplash.com/photo-1517953377824-516f2dca803b?ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "FIA anuncia novas regras para 2026 visando carros mais leves",
    excerpt: "Mudanças no regulamento técnico buscam reduzir o peso dos carros e melhorar as disputas.",
    date: "30 Mar 2025",
    imageUrl: "https://images.unsplash.com/photo-1573711828037-d59bf25812f4?ixlib=rb-4.0.3"
  },
  {
    id: 7,
    title: "Williams confirma novo patrocinador principal para as próximas temporadas",
    excerpt: "Acordo milionário deve ajudar equipe histórica a recuperar competitividade no grid.",
    date: "29 Mar 2025",
    imageUrl: "https://images.unsplash.com/photo-1532906619279-a4b7e3c2d4f1?ixlib=rb-4.0.3"
  }
];

const SecondaryNewsSection = () => {
  return (
    <div className="space-y-4">
      {mockSecondaryNews.map(news => (
        <NewsCard
          key={news.id}
          title={news.title}
          excerpt={news.excerpt}
          date={news.date}
          imageUrl={news.imageUrl}
          linkTo={`/noticias/${news.id}`}
        />
      ))}
    </div>
  );
};

export default SecondaryNewsSection;
