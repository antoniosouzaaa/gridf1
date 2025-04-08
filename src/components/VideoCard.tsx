
import { useState, useRef } from 'react';
import { Play, Maximize, Volume2, VolumeX } from 'lucide-react';

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnailUrl, videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const handlePlay = () => {
    setIsPlaying(true);
  };
  
  const toggleFullscreen = () => {
    if (iframeRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        iframeRef.current.requestFullscreen().catch(err => {
          console.error(`Erro ao tentar abrir em tela cheia: ${err.message}`);
        });
      }
    }
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    // Adicionar parâmetro de mute para a URL do iframe, se já estiver em reprodução
    if (isPlaying && iframeRef.current) {
      const currentSrc = iframeRef.current.src;
      const newSrc = isMuted 
        ? currentSrc.replace('&mute=1', '') 
        : currentSrc.includes('?') 
          ? `${currentSrc}&mute=1` 
          : `${currentSrc}?mute=1`;
      
      iframeRef.current.src = newSrc;
    }
  };
  
  // Adicionar parâmetro mute à URL do vídeo
  const getVideoUrl = () => {
    const baseUrl = videoUrl;
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}autoplay=1${isMuted ? '&mute=1' : ''}`;
  };
  
  return (
    <div 
      className="f1-card bg-f1-navy relative overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isPlaying ? (
        <>
          <div className="relative h-full min-h-[280px] cursor-pointer overflow-hidden" onClick={handlePlay}>
            <img 
              src={thumbnailUrl} 
              alt={title} 
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-f1-orange rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 group">
                <Play className="h-8 w-8 text-white ml-1 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-lg">{title}</h3>
              <p className="text-gray-300 text-sm mt-1">Clique para assistir</p>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full min-h-[280px] relative">
          <iframe
            ref={iframeRef}
            src={getVideoUrl()}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          
          {isHovered && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex justify-between items-center">
              <h3 className="text-white font-medium text-sm truncate mr-2">{title}</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={toggleMute} 
                  className="p-1.5 bg-white/20 rounded-full hover:bg-white/30 transition-colors" 
                  aria-label={isMuted ? "Ativar som" : "Desativar som"}
                >
                  {isMuted ? <VolumeX className="h-4 w-4 text-white" /> : <Volume2 className="h-4 w-4 text-white" />}
                </button>
                <button 
                  onClick={toggleFullscreen} 
                  className="p-1.5 bg-white/20 rounded-full hover:bg-white/30 transition-colors" 
                  aria-label="Tela cheia"
                >
                  <Maximize className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoCard;
