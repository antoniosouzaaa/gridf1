
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import NewsCard from "@/components/NewsCard";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Mock news data
const mockNews = [
  {
    id: 1,
    title: "Max Verstappen conquista vitória emocionante no GP da Holanda",
    excerpt: "O piloto holandês dominou a corrida em casa e ampliou sua vantagem na liderança do campeonato mundial.",
    date: "04 Abr 2025",
    imageUrl: "https://images.unsplash.com/photo-1504707167529-10dc3e8a6dc5?ixlib=rb-4.0.3",
    content: `
      <p>Em uma performance dominante diante de sua torcida local, Max Verstappen venceu o Grande Prêmio da Holanda neste domingo, aumentando sua vantagem na liderança do campeonato mundial de Fórmula 1.</p>
      
      <p>O piloto da Red Bull largou da pole position e manteve a liderança durante toda a corrida, demonstrando completo controle mesmo quando a chuva leve começou a cair no circuito de Zandvoort durante as voltas finais.</p>
      
      <p>"Foi uma corrida incrível. O carro estava perfeito hoje e conseguimos manter um bom ritmo do início ao fim", disse Verstappen após a vitória. "Correr em casa é sempre especial, e ganhar aqui pela terceira vez consecutiva é simplesmente maravilhoso."</p>
      
      <p>Lando Norris, da McLaren, terminou em segundo lugar, enquanto Charles Leclerc, da Ferrari, completou o pódio. A performance consistente de Verstappen o deixa agora com 67 pontos de vantagem sobre Norris no campeonato de pilotos.</p>
      
      <p>A Red Bull também fortaleceu sua posição no campeonato de construtores, apesar de Sergio Pérez ter terminado apenas em quinto lugar, atrás de Lewis Hamilton da Mercedes.</p>
      
      <p>A próxima etapa do campeonato acontece no próximo fim de semana no lendário circuito de Monza, na Itália, onde a Ferrari espera ter um bom desempenho diante de sua apaixonada torcida.</p>
    `
  },
  {
    id: 2,
    title: "Mercedes anuncia mudanças na equipe técnica para melhorar desempenho",
    excerpt: "Após resultados abaixo do esperado, a equipe alemã faz alterações importantes visando a recuperação.",
    date: "03 Abr 2025",
    imageUrl: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-4.0.3",
    content: `
      <p>A Mercedes anunciou hoje uma significativa reestruturação em sua equipe técnica, buscando retornar ao topo da Fórmula 1 após uma temporada de resultados abaixo das expectativas.</p>
      
      <p>James Allison, que havia se afastado do papel de diretor técnico em 2021, retornará à posição, com Mike Elliott assumindo um novo cargo de Diretor de Tecnologia. A mudança marca uma tentativa da equipe de recuperar a forma dominante que a levou a oito títulos consecutivos de construtores entre 2014 e 2021.</p>
      
      <p>"Precisávamos fazer algumas mudanças para nos adaptarmos às novas regulamentações e recuperar nossa posição competitiva", explicou Toto Wolff, chefe da equipe Mercedes. "James tem uma visão técnica excepcional, e sua experiência será fundamental para nos ajudar a superar os desafios atuais."</p>
      
      <p>Além das mudanças na liderança técnica, a equipe também anunciou investimentos significativos em suas instalações de aerodinâmica em Brackley, incluindo atualizações no túnel de vento e novas tecnologias de simulação computacional.</p>
      
      <p>Lewis Hamilton, heptacampeão mundial e piloto da Mercedes desde 2013, expressou otimismo sobre as mudanças: "É animador ver a equipe tomando medidas decisivas. Todos estamos empenhados em voltar a lutar por vitórias consistentemente e essas mudanças mostram o quão sério é esse compromisso."</p>
      
      <p>As alterações técnicas entram em vigor imediatamente, com a equipe focada no desenvolvimento do carro para a próxima temporada, enquanto também busca melhorias para o modelo atual.</p>
    `
  },
  {
    id: 3,
    title: "Ferrari apresenta melhorias aerodinâmicas para o próximo GP",
    excerpt: "Equipe italiana busca diminuir diferença para Red Bull com novo pacote de atualizações para o carro.",
    date: "02 Abr 2025",
    imageUrl: "https://images.unsplash.com/photo-1551306835-356c4bbc4c7a?ixlib=rb-4.0.3",
    content: `
      <p>A Ferrari revelou hoje um ambicioso pacote de atualizações aerodinâmicas que será introduzido no próximo Grande Prêmio, buscando reduzir a distância para a líder Red Bull e fortalecer sua posição no campeonato de construtores.</p>
      
      <p>As melhorias incluem um novo desenho do assoalho, modificações nas entradas de ar laterais e uma revisão completa do conceito de asa dianteira. Segundo a equipe, os testes em túnel de vento indicaram um ganho potencial de desempenho de aproximadamente três décimos de segundo por volta.</p>
      
      <p>"Trabalhamos intensamente nestas atualizações nas últimas semanas", afirmou Fred Vasseur, chefe da equipe Ferrari. "Os dados que coletamos são promissores, mas agora precisamos ver como eles se traduzem na pista real."</p>
      
      <p>Charles Leclerc, que testou os novos componentes no simulador da equipe em Maranello, mostrou-se entusiasmado: "O carro parece mais equilibrado e previsível com as novas peças. Se conseguirmos transferir esse feeling para a pista, estaremos em uma posição muito melhor para lutar nas próximas corridas."</p>
      
      <p>A Ferrari ocupa atualmente o terceiro lugar no campeonato de construtores, atrás da Red Bull e da McLaren. A equipe italiana não conquista um título mundial desde 2008, quando venceu o campeonato de construtores, e busca encerrar este longo jejum com o desenvolvimento agressivo do carro atual.</p>
      
      <p>As novas peças serão avaliadas nos treinos livres na sexta-feira, antes de uma decisão final sobre sua utilização na classificação e na corrida.</p>
    `
  },
  {
    id: 4,
    title: "Lewis Hamilton considera estender contrato por mais duas temporadas",
    excerpt: "Heptacampeão mundial demonstra interesse em continuar na Fórmula 1 por mais tempo que o previsto.",
    date: "01 Abr 2025",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3",
    content: `
      <p>Lewis Hamilton, heptacampeão mundial de Fórmula 1, revelou estar considerando estender sua carreira na categoria por pelo menos mais duas temporadas, além do atual contrato que expira ao final do próximo ano.</p>
      
      <p>Em entrevista exclusiva após o Grande Prêmio, Hamilton, que completou 40 anos recentemente, declarou que ainda se sente motivado e competitivo: "Quando estou no carro e tudo funciona bem, ainda sinto que posso competir no mais alto nível. A idade é apenas um número, e enquanto mantiver essa paixão e dedicação, não vejo motivo para parar."</p>
      
      <p>O piloto britânico, que detém o recorde de vitórias na F1 com 103 triunfos, mencionou que conversas iniciais com a Mercedes já começaram. Toto Wolff, chefe da equipe, confirmou o interesse em manter Hamilton: "Lewis é parte fundamental da família Mercedes. Sua experiência e talento são insubstituíveis, e ficaríamos extremamente felizes em continuar essa jornada juntos."</p>
      
      <p>Especialistas do esporte apontam que, se Hamilton estender seu contrato por mais duas temporadas, ele terá a oportunidade de alcançar marcos históricos ainda mais impressionantes, potencialmente ultrapassando a marca de 110 vitórias e buscando um inédito oitavo título mundial.</p>
      
      <p>A decisão de Hamilton pode também influenciar o mercado de pilotos para as próximas temporadas, com várias equipes de ponta mantendo interesse no britânico caso ele decida buscar novos desafios fora da Mercedes.</p>
      
      <p>"Ainda tenho objetivos a alcançar neste esporte, e sinto que posso contribuir muito dentro e fora das pistas", concluiu Hamilton, que também tem se destacado como ativista por diversas causas sociais e ambientais.</p>
    `
  }
];

// Related news filtering function
const getRelatedNews = (currentId: number) => {
  return mockNews.filter(news => news.id !== currentId).slice(0, 3);
};

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [newsItem, setNewsItem] = useState<any>(null);
  const [relatedNews, setRelatedNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching delay
    setLoading(true);
    
    // Find the news item by id
    const newsId = parseInt(id || "1");
    const foundNews = mockNews.find(news => news.id === newsId);
    
    // Get related news
    const related = getRelatedNews(newsId);
    
    setTimeout(() => {
      setNewsItem(foundNews);
      setRelatedNews(related);
      setLoading(false);
    }, 500);
    
    // Scroll to top when news changes
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col bg-f1-light">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {loading ? (
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-64 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        ) : newsItem ? (
          <div className="animate-fade-in">
            <Link to="/" className="flex items-center text-f1-orange hover:text-f1-navy transition-colors mb-4">
              <ChevronLeft size={20} />
              <span className="ml-1">Voltar para notícias</span>
            </Link>
            
            <article className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              <div className="relative h-96">
                <img 
                  src={newsItem.imageUrl} 
                  alt={newsItem.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-6">
                  <div className="text-white">
                    <span className="bg-f1-orange text-white text-xs px-2 py-1 rounded">{newsItem.date}</span>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2">{newsItem.title}</h1>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex space-x-4">
                    <button className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                      </svg>
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
            
            {/* Related news section */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-f1-navy mb-6">Notícias relacionadas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((news, index) => (
                  <div key={news.id} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <NewsCard 
                      title={news.title}
                      excerpt={news.excerpt}
                      date={news.date}
                      imageUrl={news.imageUrl}
                      linkTo={`/noticias/${news.id}`}
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-f1-navy">Notícia não encontrada</h2>
            <p className="mt-2 text-gray-600">A notícia que você está procurando não está disponível.</p>
            <Link to="/" className="mt-4 inline-block bg-f1-orange text-white px-4 py-2 rounded hover:bg-f1-navy transition-colors">
              Voltar para a página inicial
            </Link>
          </div>
        )}
      </main>
      
      <footer className="bg-f1-navy text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 F1 News - Todos os direitos reservados</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-f1-orange hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-f1-orange hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-f1-orange hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsDetail;
