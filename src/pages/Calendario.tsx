
import Header from "@/components/Header";
import { useState } from "react";
import { Calendar } from "lucide-react";

const races = [
  {
    id: 1,
    name: "Grande Prêmio do Bahrein",
    date: "02-04 Março 2025",
    circuit: "Circuito Internacional do Bahrein",
    location: "Sakhir, Bahrein",
    status: "completed",
    winner: "Max Verstappen",
    fastestLap: "Max Verstappen (1:32.622)",
    imageUrl: "https://images.unsplash.com/photo-1566979870546-0c183963d8ce?ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Grande Prêmio da Arábia Saudita",
    date: "09-11 Março 2025",
    circuit: "Circuito Urbano de Jeddah",
    location: "Jeddah, Arábia Saudita",
    status: "completed",
    winner: "Charles Leclerc",
    fastestLap: "Lando Norris (1:30.433)",
    imageUrl: "https://images.unsplash.com/photo-1617887547384-aade526ed84c?ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Grande Prêmio da Austrália",
    date: "23-25 Março 2025",
    circuit: "Circuito de Albert Park",
    location: "Melbourne, Austrália",
    status: "completed",
    winner: "Lando Norris",
    fastestLap: "Lewis Hamilton (1:20.260)",
    imageUrl: "https://images.unsplash.com/photo-1543953235-89ce01d9843d?ixlib=rb-4.0.3"
  },
  {
    id: 4,
    name: "Grande Prêmio da China",
    date: "13-15 Abril 2025",
    circuit: "Circuito Internacional de Xangai",
    location: "Xangai, China",
    status: "upcoming",
    imageUrl: "https://images.unsplash.com/photo-1547983890-10b6e5709e2b?ixlib=rb-4.0.3"
  },
  {
    id: 5,
    name: "Grande Prêmio de Miami",
    date: "04-06 Maio 2025",
    circuit: "Miami International Autodrome",
    location: "Miami, Estados Unidos",
    status: "upcoming",
    imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3"
  },
  {
    id: 6,
    name: "Grande Prêmio da Emilia Romagna",
    date: "18-20 Maio 2025",
    circuit: "Autodromo Enzo e Dino Ferrari",
    location: "Imola, Itália",
    status: "upcoming",
    imageUrl: "https://images.unsplash.com/photo-1622128885085-a97ded0a65e3?ixlib=rb-4.0.3"
  },
  {
    id: 7,
    name: "Grande Prêmio de Mônaco",
    date: "25-27 Maio 2025",
    circuit: "Circuit de Monaco",
    location: "Monte Carlo, Mônaco",
    status: "upcoming",
    imageUrl: "https://images.unsplash.com/photo-1591449188152-2d989357b37d?ixlib=rb-4.0.3"
  },
  {
    id: 8,
    name: "Grande Prêmio do Canadá",
    date: "08-10 Junho 2025",
    circuit: "Circuit Gilles Villeneuve",
    location: "Montreal, Canadá",
    status: "upcoming",
    imageUrl: "https://images.unsplash.com/photo-1539091765001-7ae8f8b78109?ixlib=rb-4.0.3"
  }
];

const Calendario = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  
  const filteredRaces = selectedFilter === "all" 
    ? races 
    : races.filter(race => race.status === selectedFilter);
    
  return (
    <div className="min-h-screen flex flex-col bg-f1-light">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-f1-navy mb-6">Calendário F1 2025</h1>
        
        <div className="bg-white p-6 rounded-xl mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${selectedFilter === 'all' ? 'bg-f1-navy text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setSelectedFilter('all')}
            >
              Todas corridas
            </button>
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${selectedFilter === 'completed' ? 'bg-f1-navy text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setSelectedFilter('completed')}
            >
              Corridas concluídas
            </button>
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${selectedFilter === 'upcoming' ? 'bg-f1-navy text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setSelectedFilter('upcoming')}
            >
              Próximas corridas
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredRaces.map((race) => (
              <div 
                key={race.id} 
                className="f1-card overflow-hidden flex flex-col md:flex-row animate-slide-in"
                style={{ animationDelay: `${race.id * 0.05}s` }}
              >
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <img 
                    src={race.imageUrl} 
                    alt={race.name} 
                    className="w-full h-full object-cover"
                  />
                  {race.status === 'completed' && (
                    <div className="absolute top-2 right-2 bg-f1-orange text-white text-xs px-2 py-1 rounded">
                      Concluído
                    </div>
                  )}
                  {race.status === 'upcoming' && (
                    <div className="absolute top-2 right-2 bg-f1-navy text-white text-xs px-2 py-1 rounded">
                      Em breve
                    </div>
                  )}
                </div>
                
                <div className="p-4 flex-1">
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <Calendar size={16} className="mr-1" />
                    <span>{race.date}</span>
                  </div>
                  
                  <h2 className="font-bold text-lg text-f1-navy mb-2">{race.name}</h2>
                  <p className="text-sm text-gray-600 mb-1">{race.circuit}</p>
                  <p className="text-sm text-gray-600 mb-3">{race.location}</p>
                  
                  {race.status === 'completed' && (
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <p className="text-sm"><span className="font-medium">Vencedor:</span> {race.winner}</p>
                      <p className="text-sm"><span className="font-medium">Volta mais rápida:</span> {race.fastestLap}</p>
                    </div>
                  )}
                  
                  <button className="mt-3 text-f1-orange hover:text-f1-navy transition-colors text-sm font-medium">
                    Ver detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Estatísticas do calendário */}
        <div className="bg-white p-6 rounded-xl mb-8">
          <h2 className="text-xl font-bold text-f1-navy mb-4">Estatísticas do Calendário 2025</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="f1-card flex flex-col items-center p-4">
              <span className="text-gray-600 mb-1">Total de corridas</span>
              <span className="font-bold text-2xl text-f1-navy">24</span>
            </div>
            
            <div className="f1-card flex flex-col items-center p-4">
              <span className="text-gray-600 mb-1">Circuitos de rua</span>
              <span className="font-bold text-2xl text-f1-navy">8</span>
            </div>
            
            <div className="f1-card flex flex-col items-center p-4">
              <span className="text-gray-600 mb-1">Corridas Sprint</span>
              <span className="font-bold text-2xl text-f1-navy">6</span>
            </div>
            
            <div className="f1-card flex flex-col items-center p-4">
              <span className="text-gray-600 mb-1">Novos circuitos</span>
              <span className="font-bold text-2xl text-f1-navy">1</span>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-f1-navy text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 F1 News - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Calendario;
