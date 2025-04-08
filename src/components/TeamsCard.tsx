
import { Link } from 'react-router-dom';

const teams = [
  { 
    id: 1, 
    name: "Red Bull Racing", 
    logoColor: "#0600EF", 
    drivers: ["Max Verstappen", "Sergio Pérez"]
  },
  { 
    id: 2, 
    name: "Ferrari", 
    logoColor: "#DC0000", 
    drivers: ["Charles Leclerc", "Carlos Sainz"]
  },
  { 
    id: 3, 
    name: "Mercedes", 
    logoColor: "#00D2BE", 
    drivers: ["Lewis Hamilton", "George Russell"]
  },
  { 
    id: 4, 
    name: "McLaren", 
    logoColor: "#FF9800", 
    drivers: ["Lando Norris", "Oscar Piastri"]
  }
];

const TeamsCard = () => {
  return (
    <div className="bg-f1-navy rounded-lg p-6 h-full text-white">
      <h2 className="text-3xl font-bold mb-6">Teams & Drivers</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {teams.map((team) => (
          <div key={team.id} className="bg-white/10 p-3 rounded">
            <div className="flex items-center mb-2">
              <div 
                className="w-8 h-8 rounded-sm mr-2"
                style={{ backgroundColor: team.logoColor }}
              ></div>
              <span className="text-sm">{team.name}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-300">
              <span>{team.drivers[0]}</span>
              <span>{team.drivers[1]}</span>
            </div>
          </div>
        ))}
      </div>
      
      <Link to="/equipes" className="block text-center text-f1-orange font-bold mt-6 hover:underline">
        View all teams
      </Link>
    </div>
  );
};

export default TeamsCard;
