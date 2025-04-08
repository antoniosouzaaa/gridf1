
import { Link } from 'react-router-dom';

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl?: string;
  linkTo?: string;
  isFeature?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ 
  title, 
  excerpt, 
  date, 
  imageUrl, 
  linkTo = "/noticias/1",
  isFeature = false 
}) => {
  if (isFeature) {
    return (
      <div className="bg-f1-orange rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="flex flex-col justify-center">
            <h2 className="text-f1-navy text-4xl font-bold mb-4">Latest News</h2>
            <h3 className="text-f1-navy text-xl font-bold mb-3">{title}</h3>
            <p className="text-f1-navy text-sm mb-6">{excerpt}</p>
            <Link 
              to={linkTo} 
              className="bg-f1-navy hover:bg-f1-navy/90 text-white font-bold py-3 px-6 rounded-md w-fit transition-all"
            >
              READ MORE
            </Link>
          </div>
          
          <div className="order-first md:order-last">
            {imageUrl ? (
              <div className="aspect-square bg-gray-100 rounded overflow-hidden">
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <Link to={linkTo} className="block rounded-lg bg-white shadow-sm h-full hover:shadow-md transition-all duration-300">
      <div className="flex">
        {imageUrl ? (
          <div className="w-20 h-20 shrink-0">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-20 h-20 bg-gray-100 flex items-center justify-center shrink-0">
            <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        )}
        
        <div className="p-3 flex-1">
          <h3 className="font-bold text-f1-navy line-clamp-1">{title}</h3>
          <p className="text-gray-500 text-sm mt-1 line-clamp-2">{excerpt}</p>
          <div className="text-gray-400 text-xs mt-1">{date}</div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
