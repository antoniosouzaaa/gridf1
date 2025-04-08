
import Header from "@/components/Header";

const teams = [
  {
    id: 1,
    name: "Red Bull Racing",
    logoColor: "#0600EF",
    country: "Áustria",
    founded: 2005,
    championships: 6,
    drivers: ["Max Verstappen", "Sergio Pérez"],
    description: "A Red Bull Racing é uma das equipes mais dominantes dos últimos anos na Fórmula 1, com Max Verstappen conquistando múltiplos campeonatos mundiais."
  },
  {
    id: 2,
    name: "Ferrari",
    logoColor: "#DC0000",
    country: "Itália",
    founded: 1950,
    championships: 16,
    drivers: ["Charles Leclerc", "Carlos Sainz"],
    description: "A Ferrari é a equipe mais antiga e de maior sucesso na história da Fórmula 1, participando do campeonato desde sua primeira temporada em 1950."
  },
  {
    id: 3,
    name: "Mercedes",
    logoColor: "#00D2BE",
    country: "Alemanha",
    founded: 2010,
    championships: 8,
    drivers: ["Lewis Hamilton", "George Russell"],
    description: "A Mercedes dominou a era turbo-híbrida da F1, conquistando oito campeonatos consecutivos de construtores entre 2014 e 2021."
  },
  {
    id: 4,
    name: "McLaren",
    logoColor: "#FF9800",
    country: "Reino Unido",
    founded: 1966,
    championships: 8,
    drivers: ["Lando Norris", "Oscar Piastri"],
    description: "A McLaren é uma das equipes mais tradicionais da F1, tendo lançado a carreira de muitos pilotos lendários, incluindo Ayrton Senna."
  },
  {
    id: 5,
    name: "Aston Martin",
    logoColor: "#006F62",
    country: "Reino Unido",
    founded: 2021,
    championships: 0,
    drivers: ["Fernando Alonso", "Lance Stroll"],
    description: "A Aston Martin retornou à F1 em 2021 após uma ausência de mais de 60 anos, com grandes ambições de se tornar uma equipe de ponta."
  },
  {
    id: 6,
    name: "Alpine",
    logoColor: "#0090FF",
    country: "França",
    founded: 2021,
    championships: 0,
    drivers: ["Pierre Gasly", "Esteban Ocon"],
    description: "A Alpine, anteriormente conhecida como Renault, representa as cores francesas no grid da Fórmula 1."
  }
];

const Equipes = () => {
  return (
    <div className="min-h-screen flex flex-col bg-f1-light">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-f1-navy mb-8">Equipes da Fórmula 1</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div key={team.id} className="f1-card bg-white transition-transform hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${team.id * 0.1}s` }}>
              <div 
                className="h-2 w-full rounded-t-xl"
                style={{ backgroundColor: team.logoColor }}
              ></div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-f1-navy mb-2">{team.name}</h2>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">País:</span>
                    <p className="font-medium">{team.country}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Fundação:</span>
                    <p className="font-medium">{team.founded}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Campeonatos:</span>
                    <p className="font-medium">{team.championships}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Pilotos:</span>
                    <p className="font-medium">{team.drivers.join(", ")}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{team.description}</p>
                <button className="text-f1-orange hover:text-f1-navy transition-colors font-medium text-sm">
                  Ver detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gráfico comparativo */}
        <div className="mt-12 mb-8 f1-card bg-white p-6">
          <h2 className="text-2xl font-bold text-f1-navy mb-6">Comparativo de desempenho</h2>
          <div className="h-64 flex items-end space-x-6 mb-4">
            {teams.slice(0, 6).map((team, index) => (
              <div key={team.id} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full rounded-t-md transition-all duration-1000 animate-slide-in" 
                  style={{ 
                    height: `${(team.championships / Math.max(...teams.map(t => t.championships))) * 200}px`,
                    backgroundColor: team.logoColor,
                    animationDelay: `${index * 0.1}s`
                  }}
                ></div>
                <div className="w-full bg-gray-200 p-2 text-center">
                  <span className="text-xs font-medium">{team.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-gray-500">
            Número de campeonatos mundiais conquistados
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

export default Equipes;
