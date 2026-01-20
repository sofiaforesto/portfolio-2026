import React, { useState, useEffect, useRef } from 'react';

export const HomeScreen: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  const testimonials = [
    {
      quote: "Sofia trouxe uma visão analítica incrível para nosso projeto. Sua atenção aos detalhes evitou bugs críticos antes do lançamento.",
      name: "João Silva",
      role: "Desenvolvedor Sênior",
      initial: "JS"
    },
    {
      quote: "Trabalhar com Sofia foi uma experiência excepcional. Sempre proativa, comunicativa e com foco em qualidade.",
      name: "Maria Santos",
      role: "Product Manager",
      initial: "MS"
    },
    {
      quote: "Sofia elevou o padrão de qualidade da nossa equipe. Seus testes manuais e automatizados são impecáveis.",
      name: "Ana Costa",
      role: "QA Lead",
      initial: "AC"
    }
  ];

  const duplicated = [...testimonials, ...testimonials];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const intervalRef = useRef<number | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width >= 1024) setSlidesToShow(3);
      else if (width >= 768) setSlidesToShow(2);
      else setSlidesToShow(1);
    };
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % duplicated.length);
      }, 6000) as unknown as number;
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, duplicated.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % duplicated.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + duplicated.length) % duplicated.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-display">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-[#869878] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">QA</span>
            </div>
            <span className="text-lg font-bold text-gray-900">Portfolio QA</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onNavigate('articles')}
              className="text-gray-600 hover:text-[#2F4F2F] transition-colors"
            >
              Artigos
            </button>
            <button
              onClick={() => onNavigate('tests')}
              className="text-gray-600 hover:text-[#2F4F2F] transition-colors"
            >
              Testes
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="text-gray-600 hover:text-[#2F4F2F] transition-colors"
            >
              Serviços
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Sofia Foresto
          </h1>
          <h2 className="text-2xl text-[#2F4F2F] font-semibold mb-6">
            QA Engineer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Profissional especializada em garantia da qualidade de software, com foco em prevenção de falhas,
            testes bem documentados e mentalidade analítica orientada a processos.
          </p>
        </div>

        {/* Professional Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="text-3xl font-bold text-[#869878] mb-2">2+</div>
            <div className="text-sm text-gray-600">Anos de Experiência</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="text-3xl font-bold text-[#869878] mb-2">9+</div>
            <div className="text-sm text-gray-600">Projetos Testados</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="text-3xl font-bold text-[#869878] mb-2">6+</div>
            <div className="text-sm text-gray-600">Ferramentas Dominadas</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="text-3xl font-bold text-[#869878] mb-2">100%</div>
            <div className="text-sm text-gray-600">Compromisso com Qualidade</div>
          </div>
        </div>

        {/* Explore Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Explorar</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('articles')}
              className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:border-[#869878] transition-all group"
            >
              <div className="text-4xl text-[#2F4F2F] mb-4 group-hover:scale-110 transition-transform">📄</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Artigos Técnicos</h4>
              <p className="text-gray-600 text-sm">Conteúdo sobre QA, metodologias e boas práticas</p>
            </button>
            <button
              onClick={() => onNavigate('tests')}
              className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:border-[#869878] transition-all group"
            >
              <div className="text-4xl text-[#2F4F2F] mb-4 group-hover:scale-110 transition-transform">🧪</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Demonstrações de Testes</h4>
              <p className="text-gray-600 text-sm">Exemplos práticos de testes manuais e automatizados</p>
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:border-[#869878] transition-all group"
            >
              <div className="text-4xl text-[#2F4F2F] mb-4 group-hover:scale-110 transition-transform">🤝</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Serviços e Contato</h4>
              <p className="text-gray-600 text-sm">Pacotes de testes, consultoria e contato direto</p>
            </button>
          </div>
        </div>
      </main>

      {/* Feedback Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">O que dizem sobre meu trabalho</h3>
          <div className="relative overflow-hidden pt-3" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}>
              {duplicated.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 px-2" style={{ width: `${100 / slidesToShow}%` }}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative min-h-[160px]">
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#869878] rounded-full"></div>
                    <p className="text-gray-600 text-sm mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#2F4F2F] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">{testimonial.initial}</div>
                      <div>
                        <p className="text-gray-900 text-sm font-semibold">{testimonial.name}</p>
                        <p className="text-gray-500 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-[#869878] hover:text-white transition-colors text-[#2F4F2F]">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-[#869878] hover:text-white transition-colors text-[#2F4F2F]">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex % testimonials.length ? 'bg-[#2F4F2F]' : 'bg-[#869878] opacity-50'}`}></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center mb-6">
            <p className="text-gray-500 text-sm">© 2024 Sofia Foresto - QA Engineer. Todos os direitos reservados.</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="mailto:sofiaforestoqa@gmail.com" className="flex items-center space-x-2 text-gray-600 hover:text-[#2F4F2F] transition-colors">
              <span className="material-symbols-outlined text-lg">mail</span>
              <span className="text-sm">Email</span>
            </a>
            <a href="https://linkedin.com/in/sofia-foresto-848987353" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-[#2F4F2F] transition-colors">
              <span className="material-symbols-outlined text-lg">account_circle</span>
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://github.com/sofiaforesto" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-[#2F4F2F] transition-colors">
              <span className="material-symbols-outlined text-lg">code</span>
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};