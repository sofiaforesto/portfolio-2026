import React, { useState, useEffect, useRef } from 'react';
import { Rocket, LayoutGrid, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import type { ProfileType } from '../App';

export const HomeScreen: React.FC<{ onNavigate: (view: string, profile?: ProfileType) => void }> = ({ onNavigate }) => {
  const testimonials = [
    {
      quote: "A Sofia como profissional é muito proativa, entusiasta e muita curiosa cobre os detalhes dos entregáveis, muito prestativa, interessada e solícita. Foi um prazer trabalhar com ela!",
      name: "Jorge",
      role: "Desenvolvedor FullStack Pleno",
      initial: "J"
    },
    {
      quote: "Contei com a ajuda da Sofia em um momento crucial. Ela desenvolveu o site rapidamente, realizou todos os testes necessários e viabilizou o lançamento no prazo. Foi uma experiência muito positiva trabalhar com alguém tão dedicada e comprometida.",
      name: "Sarah",
      role: "Médica",
      initial: "S"
    },
    {
      quote: "O trabalho da Sofia é maravilhoso!",
      name: "Paulo",
      role: "CTO",
      initial: "P"
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

      {/* Soluções Especializadas Section */}
      <section className="py-20 bg-gray-50 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho da Seção */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-wider text-[#869878] uppercase mb-2">
              Soluções Especializadas
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#2F4F2F] mb-4">
              Qualidade que gera resultado
            </h3>
            <p className="text-gray-600 text-lg">
              Não importa o tamanho do seu projeto. Se você quer vender, escalar ou lançar,
              precisa de confiança técnica. Escolha o seu perfil:
            </p>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 01 - Agências */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group">
              <div className="w-14 h-14 bg-[#F0F4EF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-[#2F4F2F]" />
              </div>
              <h4 className="text-xl font-bold text-[#2F4F2F] mb-2">Agências & Infoprodutores</h4>
              <p className="text-sm font-semibold text-[#869878] mb-4">Sua página de captura está perdendo leads?</p>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-grow">
                Proteja seu investimento em tráfego pago. Garanto que cada etapa do funil funcione perfeitamente para que você não deixe dinheiro na mesa.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#869878] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Validação de fluxo de cadastro e checkout</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#869878] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Checklist de tracking (GA4, GTM, Pixel)</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#869878] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Testes de carga para lançamentos</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#869878] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Verificação de entregabilidade de e-mails</span>
                </li>
              </ul>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <button onClick={() => onNavigate('services', 'agencias')} className="text-[#2F4F2F] font-semibold text-sm flex items-center group-hover:text-[#869878] transition-colors">
                  Saber mais <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 02 - Startups */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group">
              <div className="w-14 h-14 bg-[#F0F4EF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <LayoutGrid className="w-8 h-8 text-[#2F4F2F]" />
              </div>
              <h4 className="text-xl font-bold text-[#2F4F2F] mb-2">Startups & Software Houses</h4>
              <p className="text-sm font-semibold text-[#869878] mb-4">Entregue funcionalidades, não bugs.</p>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-grow">
                Aumente a velocidade do seu time de desenvolvimento. Eu cuido da estabilidade para que seus devs foquem em criar novas features.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#869878] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Testes de Regressão e E2E</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#869878] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Relatórios de bugs com logs e evidências</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#869878] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Testes de API e integração</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#869878] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Implementação de cultura de QA (Shift-left)</span>
                </li>
              </ul>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <button onClick={() => onNavigate('services', 'startups')} className="text-[#2F4F2F] font-semibold text-sm flex items-center group-hover:text-[#869878] transition-colors">
                  Saber mais <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 03 - Empreendedores */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group">
              <div className="w-14 h-14 bg-[#F0F4EF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-[#2F4F2F]" />
              </div>
              <h4 className="text-xl font-bold text-[#2F4F2F] mb-2">Empreendedores & MVPs</h4>
              <p className="text-sm font-semibold text-[#869878] mb-4">Sua ideia é incrível. A execução também precisa ser.</p>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-grow">
                A primeira impressão é a que fica. Valide seu MVP com qualidade profissional para conquistar seus primeiros clientes e investidores sem falhas amadoras.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#869878] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Validação de usabilidade crítica</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#869878] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Garantia de funcionamento Mobile/Desktop</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#869878] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Feedback de UX focado em retenção</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#869878] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Prevenção de erros críticos no lançamento</span>
                </li>
              </ul>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <button onClick={() => onNavigate('services', 'empreendedores')} className="text-[#2F4F2F] font-semibold text-sm flex items-center group-hover:text-[#869878] transition-colors">
                  Saber mais <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#869878] uppercase mb-2">Tech Stack</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-10">Ferramentas e Tecnologias</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <svg className="w-10 h-10 text-[#869878] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.857 17.571h-2.57V12h2.57v5.571zm0-7.714h-2.57V7.286h2.57v2.571zm6.857 7.714h-2.571V9.857h2.571v7.714zm0-9.857h-2.571V5.143h2.571v2.571z"/>
              </svg>
              <span className="text-sm text-[#444444]">Cypress</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-10 h-10 text-[#869878] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.571 11.571H0V0h11.571v11.571zM24 11.571H12.429V0H24v11.571zM11.571 24H0V12.429h11.571V24zM24 24H12.429V12.429H24V24z"/>
              </svg>
              <span className="text-sm text-[#444444]">Jira</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-10 h-10 text-[#869878] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.942 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643 4.453-4.453a.854.854 0 0 0 .25-.593.854.854 0 0 0-.25-.593l1.398-1.398a2.56 2.56 0 0 1 .593 1.645c0 .615-.21 1.177-.593 1.645a.854.854 0 0 0 .593.25c.224 0 .435-.088.593-.25l.307.307-1.398 1.398a.855.855 0 0 0-.593.25z"/>
              </svg>
              <span className="text-sm text-[#444444]">Postman</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-10 h-10 text-[#869878] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.957L12 19.594l-5.894-4.637L12 4.406l5.894 10.551zM12 16.297L8.553 13.5 12 7.703l3.447 5.797L12 16.297z"/>
              </svg>
              <span className="text-sm text-[#444444]">GitHub Actions</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-10 h-10 text-[#869878] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.354 0L2.545 5.08v9.84l3.399 1.96v-9.62l5.41-3.12 5.41 3.12v9.62l3.399-1.96V5.08L11.354 0zm0 6.68L7.955 8.64v3.92l3.399 1.96 3.399-1.96V8.64l-3.399-1.96zm0 2.27l1.7.98v1.96l-1.7.98-1.7-.98V9.93l1.7-.98zM2.545 16.92l8.809 5.08 8.809-5.08v-3.92l-3.399 1.96v1.96l-5.41 3.12-5.41-3.12v-1.96l-3.399-1.96v3.92z"/>
              </svg>
              <span className="text-sm text-[#444444]">Selenium</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA de Alto Impacto Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#2F4F2F] to-[#3d6b3d] rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Quanto custa para o seu negócio um lançamento falhado por causa de um link quebrado?
            </h2>
            <p className="text-center text-white/90 mb-8 max-w-2xl mx-auto">
              A qualidade não é um custo, é uma apólice de seguro para o seu lucro. Bugs encontrados em produção custam até 100x mais do que se fossem detectados durante o desenvolvimento.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <span className="material-symbols-outlined mr-2">trending_down</span>
                <span className="text-sm">Redução de Churn & Perda de Leads</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <span className="material-symbols-outlined mr-2">shield</span>
                <span className="text-sm">Aumento de Confiança na Entrega</span>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => onNavigate('services')}
                className="bg-white text-[#2F4F2F] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Proteger meu faturamento
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

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