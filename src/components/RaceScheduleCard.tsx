
import { Link } from 'react-router-dom';

const upcomingRaces = [
  {
    id: 1,
    name: "Grande Prêmio de Miami",
    date: "12 Maio 2025",
    circuit: "Miami International Autodrome"
  },
  {
    id: 2,
    name: "Grande Prêmio da Emilia Romagna",
    date: "26 Maio 2025",
    circuit: "Autodromo Enzo e Dino Ferrari"
  },
  {
    id: 3,
    name: "Grande Prêmio do Mônaco",
    date: "09 Junho 2025",
    circuit: "Circuit de Monaco"
  }
];

const RaceScheduleCard = () => {
  return (
    <div className="bg-f1-orange rounded-lg p-6 h-full">
      <h2 className="text-3xl font-bold text-f1-navy mb-6">Race Calendar</h2>
      
      <div className="space-y-4">
        {upcomingRaces.map((race) => (
          <div key={race.id} className="pb-4 border-b border-f1-navy/20 last:border-b-0">
            <div className="flex items-center">
              <div className="mr-4 text-f1-navy font-bold text-xl">{race.date.split(' ')[0]}</div>
              <div className="text-f1-navy font-medium">{race.name}</div>
            </div>
          </div>
        ))}
      </div>
      
      <Link to="/calendario" className="block text-center text-f1-navy font-bold mt-6 hover:underline">
        View full calendar
      </Link>
    </div>
  );
};

export default RaceScheduleCard;
