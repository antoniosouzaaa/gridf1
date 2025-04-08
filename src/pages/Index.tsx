
import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import SecondaryNewsSection from "@/components/SecondaryNewsSection";
import StandingsCard from "@/components/StandingsCard";
import RaceScheduleCard from "@/components/RaceScheduleCard";
import FactsCard from "@/components/FactsCard";
import TeamsCard from "@/components/TeamsCard";
import { Link } from "react-router-dom";

const mockFeaturedNews = {
  id: 1,
  title: "Max Verstappen conquista vitória emocionante no GP da Holanda",
  excerpt: "O piloto holandês dominou a corrida em casa e ampliou sua vantagem na liderança do campeonato mundial.",
  date: "04 Abr 2025",
  imageUrl: "https://images.unsplash.com/photo-1504707167529-10dc3e8a6dc5?ixlib=rb-4.0.3"
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Notícias em destaque (2/3 da largura) */}
          <div className="lg:col-span-2">
            <NewsCard 
              title={mockFeaturedNews.title}
              excerpt={mockFeaturedNews.excerpt}
              date={mockFeaturedNews.date}
              imageUrl={mockFeaturedNews.imageUrl}
              linkTo={`/noticias/${mockFeaturedNews.id}`}
              isFeature={true}
            />
          </div>
          
          {/* Classificação (1/3 da largura) */}
          <div>
            <StandingsCard />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Notícias secundárias (2/3 da largura) */}
          <div className="lg:col-span-2">
            <SecondaryNewsSection />
          </div>
          
          {/* Calendário de corridas (1/3 da largura) */}
          <div>
            <RaceScheduleCard />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Você sabia? (Curiosidades) (2/3 da largura) */}
          <div className="lg:col-span-2">
            <FactsCard />
          </div>
          
          {/* Equipes e pilotos (1/3 da largura) */}
          <div>
            <TeamsCard />
          </div>
        </div>
      </main>
      
      <footer className="bg-f1-navy text-white py-6 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 F1 News - Todos os direitos reservados</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="#" className="text-f1-orange hover:text-white transition-colors">Termos de Uso</Link>
            <Link to="#" className="text-f1-orange hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="#" className="text-f1-orange hover:text-white transition-colors">Contato</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
