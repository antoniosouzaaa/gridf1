
import { Link } from 'react-router-dom';

const driverStandings = [
  { position: 1, name: "Max Verstappen", points: 286, team: "Red Bull Racing" },
  { position: 2, name: "Lando Norris", points: 219, team: "McLaren" },
  { position: 3, name: "Charles Leclerc", points: 205, team: "Ferrari" },
  { position: 4, name: "Lewis Hamilton", points: 175, team: "Mercedes" },
  { position: 5, name: "Carlos Sainz", points: 168, team: "Ferrari" },
];

const StandingsCard = () => {
  return (
    <div className="bg-f1-navy rounded-lg p-6 h-full text-white">
      <h2 className="text-3xl font-bold mb-6">Standings</h2>
      
      <div className="space-y-5">
        {driverStandings.slice(0, 4).map((driver) => (
          <div key={driver.position} className="flex items-center gap-3">
            <div className="font-bold text-xl w-6">{driver.position}</div>
            <div className="flex-1">
              <div className="bg-white h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-f1-orange h-full rounded-full"
                  style={{ width: `${(driver.points / driverStandings[0].points) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Link to="/classificacao" className="block text-center text-f1-orange font-bold mt-6 hover:underline">
        View full standings
      </Link>
    </div>
  );
};

export default StandingsCard;
