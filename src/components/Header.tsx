
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white py-4 px-4 sm:px-6 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="bg-f1-navy w-28 h-20 rounded-md flex items-center justify-center text-white text-2xl font-bold">
          LOGO
        </Link>
        
        <nav className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-f1-navy hover:text-f1-orange transition-colors font-medium text-lg uppercase">
            Latest
          </Link>
          <Link to="/videos" className="text-f1-navy hover:text-f1-orange transition-colors font-medium text-lg uppercase">
            Videos
          </Link>
          <Link to="/calendario" className="text-f1-navy hover:text-f1-orange transition-colors font-medium text-lg uppercase">
            Calendar
          </Link>
          <Link to="/classificacao" className="text-f1-navy hover:text-f1-orange transition-colors font-medium text-lg uppercase">
            Standings
          </Link>
        </nav>
        
        <button 
          className="md:hidden text-f1-navy"
          onClick={() => {}}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className="h-0.5 w-full bg-f1-navy transition-all"></span>
            <span className="h-0.5 w-full bg-f1-navy transition-all"></span>
            <span className="h-0.5 w-full bg-f1-navy transition-all"></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
