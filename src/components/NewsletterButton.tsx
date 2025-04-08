
import { useState } from 'react';
import { toast } from "sonner";
import { Mail, X, Check } from 'lucide-react';

const NewsletterButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Por favor, insira seu e-mail");
      return;
    }
    
    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Por favor, insira um e-mail válido");
      return;
    }
    
    // Simular inscrição com efeito de loading
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Inscrição realizada com sucesso!", {
        description: "Você receberá as últimas notícias da F1 no seu e-mail.",
        icon: <Check className="h-4 w-4 text-green-500" />
      });
      setEmail('');
      setIsModalOpen(false);
    }, 1500);
  };
  
  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="group bg-f1-navy hover:bg-f1-navy/90 text-white font-bold rounded-full py-3 px-8 transition-all hover:shadow-lg mx-auto flex items-center"
      >
        <Mail className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
        <span>Seguir notícias por e-mail</span>
      </button>
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-f1-orange transition-colors"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="w-12 h-12 bg-f1-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-f1-navy mb-2 text-center">Assine nossa newsletter</h3>
            <p className="text-gray-600 mb-6 text-center">
              Receba as últimas notícias, análises e atualizações do mundo da Fórmula 1 diretamente no seu e-mail.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full p-3 border border-gray-300 rounded-md focus:border-f1-orange focus:ring-1 focus:ring-f1-orange outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                  disabled={isSubmitting}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className={`flex-1 py-3 bg-f1-orange text-white rounded-md hover:bg-f1-orange/90 transition-colors font-medium flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Inscrevendo...
                    </>
                  ) : (
                    'Inscrever'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterButton;
