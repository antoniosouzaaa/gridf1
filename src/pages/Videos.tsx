
import { useState } from 'react';
import Header from "@/components/Header";
import { Play } from 'lucide-react';

const mockVideos = [
  {
    id: 1,
    title: "Melhores momentos: GP da Holanda 2025",
    thumbnail: "https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-4.0.3",
    duration: "5:24",
    date: "04 Abr 2025",
    views: "128K"
  },
  {
    id: 2,
    title: "Entrevista exclusiva com Lewis Hamilton após pódio",
    thumbnail: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3",
    duration: "8:12",
    date: "03 Abr 2025",
    views: "89K"
  },
  {
    id: 3,
    title: "Análise técnica: Novas atualizações da Ferrari",
    thumbnail: "https://images.unsplash.com/photo-1551306835-356c4bbc4c7a?ixlib=rb-4.0.3",
    duration: "12:05",
    date: "02 Abr 2025",
    views: "75K"
  },
  {
    id: 4,
    title: "Bastidores: A preparação da Red Bull para o GP",
    thumbnail: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-4.0.3",
    duration: "7:18",
    date: "01 Abr 2025",
    views: "102K"
  },
  {
    id: 5,
    title: "Top 5 ultrapassagens mais impressionantes da temporada",
    thumbnail: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3",
    duration: "6:33",
    date: "30 Mar 2025",
    views: "245K"
  },
  {
    id: 6,
    title: "Comparação: Os carros de 2024 vs 2025",
    thumbnail: "https://images.unsplash.com/photo-1517953377824-516f2dca803b?ixlib=rb-4.0.3",
    duration: "9:46",
    date: "28 Mar 2025",
    views: "56K"
  }
];

const VideoCard = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group cursor-pointer rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-f1-orange rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
            <Play className="h-6 w-6 text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-f1-navy group-hover:text-f1-orange transition-colors">{video.title}</h3>
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>{video.date}</span>
          <span>{video.views} visualizações</span>
        </div>
      </div>
    </div>
  );
};

const Videos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-f1-navy mb-6">Vídeos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </main>
      
      <footer className="bg-f1-navy text-white py-6 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 F1 News - Todos os direitos reservados</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-f1-orange hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-f1-orange hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-f1-orange hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Videos;
