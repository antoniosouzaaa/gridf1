
import Header from "@/components/Header";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Dados de exemplo para a classificação
const drivers = [
  { position: 1, name: "Max Verstappen", team: "Red Bull Racing", points: 286 },
  { position: 2, name: "Lando Norris", team: "McLaren", points: 219 },
  { position: 3, name: "Charles Leclerc", team: "Ferrari", points: 205 },
  { position: 4, name: "Lewis Hamilton", team: "Mercedes", points: 175 },
  { position: 5, name: "Carlos Sainz", team: "Ferrari", points: 168 },
  { position: 6, name: "Oscar Piastri", team: "McLaren", points: 155 },
  { position: 7, name: "George Russell", team: "Mercedes", points: 145 },
  { position: 8, name: "Sergio Pérez", team: "Red Bull Racing", points: 139 },
  { position: 9, name: "Fernando Alonso", team: "Aston Martin", points: 92 },
  { position: 10, name: "Lance Stroll", team: "Aston Martin", points: 65 },
];

const teams = [
  { position: 1, name: "Red Bull Racing", points: 425 },
  { position: 2, name: "McLaren", points: 374 },
  { position: 3, name: "Ferrari", points: 373 },
  { position: 4, name: "Mercedes", points: 320 },
  { position: 5, name: "Aston Martin", points: 157 },
  { position: 6, name: "RB", points: 28 },
  { position: 7, name: "Haas F1 Team", points: 26 },
  { position: 8, name: "Alpine", points: 11 },
  { position: 9, name: "Williams", points: 4 },
  { position: 10, name: "Sauber", points: 0 },
];

const teamColors: Record<string, string> = {
  "Red Bull Racing": "#0600EF",
  "McLaren": "#FF9800",
  "Ferrari": "#DC0000",
  "Mercedes": "#00D2BE",
  "Aston Martin": "#006F62",
  "RB": "#B1063A",
  "Haas F1 Team": "#FFFFFF",
  "Alpine": "#0090FF",
  "Williams": "#005AFF",
  "Sauber": "#900000"
};

const Classificacao = () => {
  const [activeTab, setActiveTab] = useState<'drivers' | 'teams'>('drivers');
  const [highlightedRow, setHighlightedRow] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-f1-light">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Link to="/" className="hover:text-f1-orange transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-f1-navy">Classificação</span>
        </div>
        
        <h1 className="text-3xl font-bold text-f1-navy mb-6">Classificação da Temporada 2025</h1>
        
        <div className="tabs flex border-b border-gray-300 mb-6">
          <button 
            className={`tab px-6 py-3 font-medium transition-colors flex items-center ${
              activeTab === 'drivers' 
                ? 'text-f1-navy border-b-2 border-f1-orange -mb-px' 
                : 'text-gray-500 hover:text-f1-navy'
            }`}
            onClick={() => setActiveTab('drivers')}
          >
            <Trophy className="h-4 w-4 mr-2" />
            Pilotos
          </button>
          <button 
            className={`tab px-6 py-3 font-medium transition-colors flex items-center ${
              activeTab === 'teams' 
                ? 'text-f1-navy border-b-2 border-f1-orange -mb-px' 
                : 'text-gray-500 hover:text-f1-navy'
            }`}
            onClick={() => setActiveTab('teams')}
          >
            <Users className="h-4 w-4 mr-2" />
            Equipes
          </button>
        </div>
        
        {/* Tabela de Classificação */}
        <div className="overflow-x-auto mb-8">
          <AnimatePresence mode="wait">
            {activeTab === 'drivers' ? (
              <motion.div
                key="drivers"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Table className="w-full f1-card">
                  <TableHeader className="bg-f1-navy text-white">
                    <TableRow>
                      <TableHead className="text-left w-16 text-white">Pos</TableHead>
                      <TableHead className="text-left text-white">Piloto</TableHead>
                      <TableHead className="text-left text-white">Equipe</TableHead>
                      <TableHead className="text-right w-24 text-white">Pontos</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {drivers.map((driver) => (
                      <TableRow 
                        key={driver.position} 
                        className={`border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer ${
                          highlightedRow === driver.position ? 'bg-gray-100' : ''
                        }`}
                        onMouseEnter={() => setHighlightedRow(driver.position)}
                        onMouseLeave={() => setHighlightedRow(null)}
                      >
                        <TableCell className="font-bold text-f1-orange">{driver.position}</TableCell>
                        <TableCell className="font-medium">{driver.name}</TableCell>
                        <TableCell className="text-gray-600">
                          <div className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded-sm mr-2"
                              style={{ backgroundColor: teamColors[driver.team] }}
                            ></div>
                            {driver.team}
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-bold">{driver.points}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
            ) : (
              <motion.div
                key="teams"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Table className="w-full f1-card">
                  <TableHeader className="bg-f1-navy text-white">
                    <TableRow>
                      <TableHead className="text-left w-16 text-white">Pos</TableHead>
                      <TableHead className="text-left text-white">Equipe</TableHead>
                      <TableHead className="text-right w-24 text-white">Pontos</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teams.map((team) => (
                      <TableRow 
                        key={team.position} 
                        className={`border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer ${
                          highlightedRow === team.position ? 'bg-gray-100' : ''
                        }`}
                        onMouseEnter={() => setHighlightedRow(team.position)}
                        onMouseLeave={() => setHighlightedRow(null)}
                      >
                        <TableCell className="font-bold text-f1-orange">{team.position}</TableCell>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded-sm mr-2"
                              style={{ backgroundColor: teamColors[team.name] }}
                            ></div>
                            {team.name}
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-bold">{team.points}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="bg-white p-6 rounded-xl mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-bold text-f1-navy mb-4">Estatísticas da temporada</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="f1-card flex flex-col items-center p-5 bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white transition-colors duration-300">
              <span className="text-gray-600 mb-1">Maiores pontuadores</span>
              <span className="font-bold text-xl text-f1-navy">{drivers[0].name}</span>
              <span className="text-f1-orange font-bold">{drivers[0].points} pts</span>
            </div>
            
            <div className="f1-card flex flex-col items-center p-5 bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white transition-colors duration-300">
              <span className="text-gray-600 mb-1">Maior sequência de vitórias</span>
              <span className="font-bold text-xl text-f1-navy">{drivers[0].name}</span>
              <span className="text-f1-orange font-bold">5 vitórias</span>
            </div>
            
            <div className="f1-card flex flex-col items-center p-5 bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white transition-colors duration-300">
              <span className="text-gray-600 mb-1">Melhor evolução</span>
              <span className="font-bold text-xl text-f1-navy">{drivers[5].name}</span>
              <span className="text-f1-orange font-bold">+7 posições</span>
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

export default Classificacao;
