import React, { useState, useMemo, useEffect } from 'react';
import type { ProfileType } from '../App';

// Profile data for pre-filling the form
const PROFILE_DATA: Record<NonNullable<ProfileType>, { label: string; interest: string; placeholder: string }> = {
  agencias: {
    label: 'Agências & Infoprodutores',
    interest: 'Web App',
    placeholder: 'Descreva seu funil de vendas, landing pages ou sistemas de checkout que precisam de validação...'
  },
  startups: {
    label: 'Startups & Software Houses',
    interest: 'API',
    placeholder: 'Descreva seu produto, principais funcionalidades e onde você precisa de maior cobertura de testes...'
  },
  empreendedores: {
    label: 'Empreendedores & MVPs',
    interest: 'Consultoria',
    placeholder: 'Descreva sua ideia de MVP, o estágio atual do projeto e seus objetivos de lançamento...'
  }
};

// Diamond colors - sophisticated blues, silvers, and champagne
const DIAMOND_COLORS = [
  { color: '#60a5fa', shadow: 'rgba(96, 165, 250, 0.8)' },  // sky blue
  { color: '#e2e8f0', shadow: 'rgba(226, 232, 240, 0.9)' }, // silver
  { color: '#93c5fd', shadow: 'rgba(147, 197, 253, 0.8)' }, // light blue
  { color: '#f8fafc', shadow: 'rgba(248, 250, 252, 0.9)' }, // crystal white
  { color: '#d4af37', shadow: 'rgba(212, 175, 55, 0.7)' },  // champagne gold
  { color: '#cbd5e1', shadow: 'rgba(203, 213, 225, 0.8)' }, // platinum
  { color: '#3b82f6', shadow: 'rgba(59, 130, 246, 0.8)' },  // sapphire blue
  { color: '#bfdbfe', shadow: 'rgba(191, 219, 254, 0.8)' }, // ice blue
];

// Sparkle SVG component with diamond color support
const Sparkle: React.FC<{
  size: number;
  opacity: number;
  scale: number;
  colorIndex?: number;
  isDiamond?: boolean;
}> = ({ size, opacity, scale, colorIndex = 0, isDiamond = false }) => {
  const diamondColor = DIAMOND_COLORS[colorIndex % DIAMOND_COLORS.length];

  return (
    <svg
      className="absolute transition-all duration-150 ease-out pointer-events-none"
      style={{
        width: size,
        height: size,
        opacity,
        transform: `scale(${scale})`,
        filter: opacity > 0.5
          ? `drop-shadow(0 0 ${size/2}px ${isDiamond ? diamondColor.shadow : 'rgba(59, 130, 246, 0.8)'})`
          : 'none',
        color: isDiamond ? diamondColor.color : 'currentColor'
      }}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"/>
    </svg>
  );
};

// CSS for diamond card animations
const DiamondStyles = () => (
  <style>{`
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.85; transform: scale(1.02); }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `}</style>
);

interface ConsultationScreenProps {
  selectedProfile?: ProfileType;
}

export const ConsultationScreen: React.FC<ConsultationScreenProps> = ({ selectedProfile }) => {
  const [selectedInterest, setSelectedInterest] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [diamondMousePos, setDiamondMousePos] = useState<{ x: number; y: number } | null>(null);
  const [profileLabel, setProfileLabel] = useState<string>('');
  const [detailsPlaceholder, setDetailsPlaceholder] = useState<string>('Descreva brevemente seu projeto...');

  // Shimmer animation state
  const [shimmerPosition, setShimmerPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShimmerPosition(prev => (prev + 1) % 200);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Pre-fill form based on selected profile
  useEffect(() => {
    if (selectedProfile && PROFILE_DATA[selectedProfile]) {
      const profileData = PROFILE_DATA[selectedProfile];
      setSelectedInterest(profileData.interest);
      setProfileLabel(profileData.label);
      setDetailsPlaceholder(profileData.placeholder);
      // Scroll to form after a short delay
      setTimeout(() => {
        const formSection = document.getElementById('consultation-form');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [selectedProfile]);

  // Generate sparkle positions around the card border with color indices
  const sparkles = useMemo(() => {
    const positions: Array<{ id: number; x: number; y: number; size: number; colorIndex: number }> = [];
    let id = 0;

    // Top edge - dense constellation
    for (let i = 0; i <= 100; i += 4) {
      positions.push({ id: id++, x: i, y: -3, size: Math.random() * 8 + 4, colorIndex: id });
    }
    // Bottom edge
    for (let i = 0; i <= 100; i += 4) {
      positions.push({ id: id++, x: i, y: 103, size: Math.random() * 8 + 4, colorIndex: id });
    }
    // Left edge
    for (let i = 5; i <= 95; i += 4) {
      positions.push({ id: id++, x: -3, y: i, size: Math.random() * 8 + 4, colorIndex: id });
    }
    // Right edge
    for (let i = 5; i <= 95; i += 4) {
      positions.push({ id: id++, x: 103, y: i, size: Math.random() * 8 + 4, colorIndex: id });
    }

    // Add extra sparkles at corners (bigger)
    positions.push({ id: id++, x: -4, y: -4, size: 14, colorIndex: 0 });
    positions.push({ id: id++, x: 104, y: -4, size: 12, colorIndex: 2 });
    positions.push({ id: id++, x: -4, y: 104, size: 12, colorIndex: 4 });
    positions.push({ id: id++, x: 104, y: 104, size: 14, colorIndex: 6 });

    return positions;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  const handleDiamondMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setDiamondMousePos({ x, y });
  };

  const handleDiamondMouseLeave = () => {
    setDiamondMousePos(null);
  };

  const getSparkleStyle = (sparkle: { x: number; y: number; size: number }) => {
    if (!diamondMousePos) {
      return { opacity: 0.15, scale: 0.6 };
    }

    const distance = Math.sqrt(
      Math.pow(sparkle.x - diamondMousePos.x, 2) +
      Math.pow(sparkle.y - diamondMousePos.y, 2)
    );

    // Spotlight radius - sparkles within this range light up
    const spotlightRadius = 25;

    if (distance < spotlightRadius) {
      const intensity = 1 - (distance / spotlightRadius);
      return {
        opacity: 0.3 + intensity * 0.7,
        scale: 0.8 + intensity * 0.6
      };
    }

    return { opacity: 0.1, scale: 0.5 };
  };

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    // Smooth scroll to form section
    const formSection = document.getElementById('consultation-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clearSelectedPlan = () => {
    setSelectedPlan('');
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!selectedPlan) newErrors.plan = 'Selecione um plano antes de enviar.';
    if (!name.trim()) newErrors.name = 'Nome completo é obrigatório.';
    if (!email.trim()) newErrors.email = 'E-mail é obrigatório.';
    if (!selectedInterest) newErrors.interest = 'Selecione pelo menos um interesse.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const subject = 'Novo Lead de Consultoria';
    const body = `Novo Lead de Consultoria

${profileLabel ? `Perfil: ${profileLabel}` : ''}
Pacote de Interesse: ${selectedPlan.toUpperCase()}
Nome: ${name}
E-mail: ${email}
Interesse: ${selectedInterest}
Detalhes do Projeto: ${details || 'Não informado'}`;

    const mailtoLink = `mailto:sofiaforestoqa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#444444] antialiased pb-12">
      <DiamondStyles />
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-center px-6 py-5 bg-[#F5F5F5] border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-wide text-[#444444] uppercase">Consultoria</span>
          <div className="h-2 w-2 rounded-full bg-[#869878]"></div>
        </div>
      </header>

      <main className="flex-1 px-6 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-[#2F4F2F] mb-4">Expertise Premium em QA</h1>
          <p className="text-[#444444] text-lg leading-relaxed max-w-2xl mx-auto px-4">
            Eleve a confiabilidade do seu produto com estratégias de teste sob medida e garantia de qualidade de nível empresarial.
          </p>
        </section>

        {/* Services Section */}
        <section className="space-y-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#2F4F2F]">Serviços</h2>
            <div className="flex gap-2">
              <span className="size-2 rounded-full bg-[#869878]"></span>
              <span className="size-2 rounded-full bg-gray-300"></span>
              <span className="size-2 rounded-full bg-gray-300"></span>
            </div>
          </div>

          <div className="space-y-6">
            {/* Card 1: Prata */}
            <article
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(47,79,47,0.15)] hover:-translate-y-2 hover:scale-[1.02] hover:border-[#869878]/50 transition-all duration-300 ease-out"
              style={{ background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(134, 152, 120, 0.15) 0%, transparent 60%)' }}
              onMouseMove={handleMouseMove}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block py-1 px-3 rounded-md bg-gray-100 text-xs font-bold uppercase tracking-wider text-[#444444] group-hover:bg-[#869878] group-hover:text-white transition-colors duration-300">Prata</span>
                <span className="text-lg font-bold text-[#2F4F2F]">R$ 800 - 1.200</span>
              </div>
              <h3 className="font-bold text-xl text-[#2F4F2F] mb-4">Validação Essencial</h3>
              <p className="text-[#444444] mb-4 leading-relaxed">
                Para lançamentos ágeis e sem riscos desnecessários. Ideal para MVPs, Landing Pages ou funcionalidades pontuais que precisam ir ao ar com segurança. Garantimos que o fluxo principal funciona perfeitamente, evitando que seu usuário encontre bloqueios críticos.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Blindagem do Caminho Feliz: Teste completo do fluxo principal de uso.',
                  'Triagem de Bloqueios: Identificação imediata de bugs que impedem a venda ou cadastro.',
                  'Check-up Desktop: Validação em ambiente desktop padrão.',
                  'Veredito Claro: Relatório objetivo com "Sinal Verde/Vermelho" para o lançamento.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#869878] text-base mt-0.5">check_circle</span>
                    <span className="text-[#444444] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full py-3 rounded-lg border-2 border-[#2F4F2F] text-[#2F4F2F] font-semibold hover:bg-[#2F4F2F] hover:text-white transition-colors"
                onClick={() => handlePlanSelect('prata')}
              >
                Selecionar Prata
              </button>
            </article>

            {/* Card 2: Ouro (Destaque) */}
            <article
              className="bg-white p-6 rounded-xl shadow-lg relative overflow-hidden group hover:shadow-[0_25px_60px_rgba(255,215,0,0.3)] hover:-translate-y-3 hover:scale-[1.02] ring-2 ring-amber-200 hover:ring-amber-400 transition-all duration-300 ease-out"
              style={{ background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255, 215, 0, 0.15) 0%, white 50%)' }}
              onMouseMove={handleMouseMove}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block py-1 px-3 rounded-md bg-amber-400 text-xs font-bold uppercase tracking-wider text-white group-hover:bg-amber-500 transition-colors duration-300">Ouro</span>
                <span className="text-2xl font-bold text-amber-600">R$ 1.500 - 2.500</span>
              </div>
              <h3 className="font-bold text-2xl text-[#2F4F2F] mb-4">Blindagem Profissional</h3>
              <p className="text-[#444444] mb-4 leading-relaxed">
                A escolha favorita para produtos em crescimento. O equilíbrio perfeito entre custo e profundidade. Aqui, nós não apenas testamos o que deveria funcionar, mas caçamos ativamente onde o sistema pode falhar. É a garantia de que seu produto suporta o uso real, erros de usuário e diferentes dispositivos.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Cobertura Total (Prata inclusa): Mais profundidade nos testes.',
                  'Caça aos "Edge Cases": Testes de fluxos alternativos e erros de usuário.',
                  'Responsividade Garantida: Validação visual e funcional em Mobile e Desktop.',
                  'Evidências Ricas: Relatório visual com vídeos/GIFs dos bugs e re-teste após correção.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-amber-500 text-lg mt-0.5">verified</span>
                    <span className="text-sm text-[#444444]">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3 rounded-lg bg-amber-400 text-white font-bold hover:bg-amber-500 transition-colors flex items-center justify-center gap-2"
                onClick={() => handlePlanSelect('ouro')}
              >
                <span>Selecionar Ouro</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </article>

            {/* Card 3: Diamante - Premium with prismatic effects */}
            <div
              className="relative py-8 px-4"
              onMouseMove={handleDiamondMouseMove}
              onMouseLeave={handleDiamondMouseLeave}
            >
              {/* Reactive Sparkles - Prismatic constellation around the border */}
              {sparkles.map((sparkle) => {
                const style = getSparkleStyle(sparkle);
                return (
                  <div
                    key={sparkle.id}
                    className="absolute pointer-events-none"
                    style={{
                      left: `${sparkle.x}%`,
                      top: `${sparkle.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <Sparkle
                      size={sparkle.size}
                      opacity={style.opacity}
                      scale={style.scale}
                      colorIndex={sparkle.colorIndex}
                      isDiamond={true}
                    />
                  </div>
                );
              })}

              {/* Diamond spotlight glow that follows mouse */}
              {diamondMousePos && (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-200"
                  style={{
                    background: `
                      radial-gradient(circle at ${diamondMousePos.x}% ${diamondMousePos.y}%, rgba(59, 130, 246, 0.2) 0%, transparent 25%),
                      radial-gradient(circle at ${diamondMousePos.x + 5}% ${diamondMousePos.y}%, rgba(212, 175, 55, 0.12) 0%, transparent 30%),
                      radial-gradient(circle at ${diamondMousePos.x - 5}% ${diamondMousePos.y}%, rgba(148, 197, 253, 0.15) 0%, transparent 30%)
                    `
                  }}
                />
              )}

              {/* Outer diamond glow ring - blues, silvers, gold */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: diamondMousePos
                    ? `conic-gradient(from ${shimmerPosition * 1.8}deg at 50% 50%,
                        rgba(59, 130, 246, 0.3),
                        rgba(148, 197, 253, 0.25),
                        rgba(226, 232, 240, 0.3),
                        rgba(212, 175, 55, 0.2),
                        rgba(203, 213, 225, 0.25),
                        rgba(96, 165, 250, 0.3),
                        rgba(59, 130, 246, 0.3))`
                    : `conic-gradient(from ${shimmerPosition * 1.8}deg at 50% 50%,
                        rgba(59, 130, 246, 0.15),
                        rgba(148, 197, 253, 0.12),
                        rgba(226, 232, 240, 0.15),
                        rgba(212, 175, 55, 0.1),
                        rgba(203, 213, 225, 0.12),
                        rgba(96, 165, 250, 0.15),
                        rgba(59, 130, 246, 0.15))`,
                  filter: 'blur(20px)',
                  transform: 'scale(1.02)'
                }}
              />

              <article
                className="relative rounded-2xl overflow-hidden hover:-translate-y-3 transition-all duration-500 ease-out group"
                style={{
                  background: `
                    linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(248,250,252,0.98) 50%, rgba(255,255,255,0.97) 100%)
                  `,
                  boxShadow: diamondMousePos
                    ? `0 30px 80px rgba(59, 130, 246, 0.3),
                       0 15px 40px rgba(212, 175, 55, 0.15),
                       0 5px 15px rgba(148, 197, 253, 0.2),
                       inset 0 1px 0 rgba(255,255,255,0.8)`
                    : `0 25px 60px rgba(59, 130, 246, 0.18),
                       0 10px 30px rgba(0, 0, 0, 0.08),
                       inset 0 1px 0 rgba(255,255,255,0.6)`
                }}
              >
                {/* Animated diamond border - blues, silvers, gold */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    padding: '3px',
                    background: `conic-gradient(from ${shimmerPosition * 1.8}deg at 50% 50%,
                      #3b82f6, #93c5fd, #e2e8f0, #d4af37, #cbd5e1, #60a5fa, #3b82f6)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }}
                />

                {/* Shimmer sweep effect */}
                <div
                  className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
                  style={{
                    background: `linear-gradient(
                      105deg,
                      transparent ${shimmerPosition - 30}%,
                      rgba(255, 255, 255, 0.4) ${shimmerPosition - 10}%,
                      rgba(255, 255, 255, 0.8) ${shimmerPosition}%,
                      rgba(255, 255, 255, 0.4) ${shimmerPosition + 10}%,
                      transparent ${shimmerPosition + 30}%
                    )`
                  }}
                />

                {/* Crystal facet pattern overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.03] rounded-2xl"
                  style={{
                    backgroundImage: `
                      linear-gradient(60deg, transparent 40%, rgba(59,130,246,0.5) 45%, transparent 50%),
                      linear-gradient(-60deg, transparent 40%, rgba(212,175,55,0.4) 45%, transparent 50%),
                      linear-gradient(120deg, transparent 40%, rgba(148,197,253,0.5) 45%, transparent 50%)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                />

                {/* Premium badge with gradient and glow */}
                <div
                  className="absolute top-0 right-0 text-white text-[10px] font-bold px-5 py-2 rounded-bl-xl tracking-wider z-20"
                  style={{
                    background: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #1e40af 100%)',
                    boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                >
                  <span className="relative z-10">MAIS COMPLETO</span>
                </div>

                <div className="relative z-10 p-6">
                  <div className="flex justify-between items-start mb-4 mt-2">
                    <span
                      className="inline-block py-1.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-white"
                      style={{
                        background: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #1e40af 100%)',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)'
                      }}
                    >
                      Diamante
                    </span>
                    <span
                      className="text-xl font-bold bg-clip-text text-transparent"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #1e40af 100%)'
                      }}
                    >
                      R$ 3.000 - 4.500
                    </span>
                  </div>
                  <h3
                    className="font-bold text-2xl mb-4 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #2563eb 100%)'
                    }}
                  >
                    Engenharia de Qualidade
                  </h3>
                  <p className="text-[#444444] mb-4 leading-relaxed">
                    Para quem joga o jogo do longo prazo e escalabilidade. Mais que testes, entregamos maturidade de software. Este pacote resolve problemas estruturais, organiza sua base de conhecimento e prepara seu produto para escalar com inteligência (IA) e automação. É uma consultoria completa de QA.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Gestão de Processos: Organização da metodologia de qualidade do projeto.',
                      'Dados e IA: Validação e alimentação técnica de bancos de dados ou modelos de IA.',
                      'Legado Técnico: Documentação das regras de negócio e estrutura da plataforma.',
                      'Roadmap de Automação: Preparação e scripts para testes automatizados de fluxos vitais.'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="material-symbols-outlined text-lg mt-0.5"
                          style={{ color: '#60a5fa' }}
                        >
                          diamond
                        </span>
                        <span className="text-sm text-[#444444]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full py-4 rounded-xl text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.02] group-hover:shadow-xl"
                    style={{
                      background: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #1e40af 100%)',
                      boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
                    }}
                    onClick={() => handlePlanSelect('diamante')}
                  >
                    <span>Selecionar Diamante</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="consultation-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#2F4F2F] mb-2">Consultoria</h2>
            <p className="text-[#444444] text-lg">
              Agenda aberta para projetos estratégicos. <strong className="text-[#2F4F2F]">Garanta sua vaga para um aprofundamento técnico</strong> e transforme e eleve o nível da sua plataforma.
            </p>
          </div>
          <form className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6" onSubmit={handleSubmit}>
            {(selectedPlan || profileLabel) && (
              <div className="flex flex-wrap items-center gap-2">
                {profileLabel && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#869878] text-white">
                    PERFIL: {profileLabel.toUpperCase()}
                  </span>
                )}
                {selectedPlan && (
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#2F4F2F] text-white">
                      PACOTE: {selectedPlan.toUpperCase()}
                    </span>
                    <button
                      type="button"
                      onClick={clearSelectedPlan}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  </div>
                )}
              </div>
            )}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#444444] mb-2">Nome Completo</label>
                <input
                  className="w-full bg-[#F9F9F9] border-0 rounded-lg px-4 py-3 text-[#444444] placeholder-gray-400 focus:ring-2 focus:ring-[#869878] transition-all"
                  placeholder="João Silva"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#444444] mb-2">E-mail</label>
                <input
                  className="w-full bg-[#F9F9F9] border-0 rounded-lg px-4 py-3 text-[#444444] placeholder-gray-400 focus:ring-2 focus:ring-[#869878] transition-all"
                  placeholder="joao@empresa.com.br"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#444444] mb-3">Interesse</label>
              <div className="flex flex-wrap gap-3">
                {['Web App', 'Mobile', 'API', 'Consultoria'].map((interest) => (
                  <label key={interest} className="cursor-pointer">
                    <input
                      type="radio"
                      name="interest"
                      value={interest}
                      checked={selectedInterest === interest}
                      onChange={(e) => setSelectedInterest(e.target.value)}
                      className="sr-only"
                    />
                    <span className={`inline-block px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                      selectedInterest === interest
                        ? 'bg-[#2F4F2F] text-white border-[#2F4F2F]'
                        : 'bg-white text-[#444444] border-gray-300 hover:border-[#869878]'
                    }`}>
                      {interest}
                    </span>
                  </label>
                ))}
              </div>
              {errors.interest && <p className="text-red-500 text-sm mt-2">{errors.interest}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#444444] mb-2">Detalhes do Projeto</label>
              <textarea
                className="w-full bg-[#F9F9F9] border-0 rounded-lg px-4 py-3 text-[#444444] placeholder-gray-400 focus:ring-2 focus:ring-[#869878] transition-all resize-none"
                rows={4}
                placeholder={detailsPlaceholder}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-[#2F4F2F] text-white font-bold text-lg hover:bg-[#1a2a1a] transition-colors flex items-center justify-center gap-2"
            >
              <span>Solicitar Consultoria</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <input type="hidden" name="selectedPlan" value={selectedPlan} />
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-6">
        <div className="text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="mailto:sofiaforestoqa@gmail.com" className="text-[#869878] hover:text-[#2F4F2F] transition-colors">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </a>
            <a href="https://linkedin.com/in/sofia-foresto-848987353" target="_blank" rel="noopener noreferrer" className="text-[#869878] hover:text-[#2F4F2F] transition-colors">
              <span className="material-symbols-outlined text-2xl">account_circle</span>
            </a>
            <a href="https://github.com/sofiaforesto" target="_blank" rel="noopener noreferrer" className="text-[#869878] hover:text-[#2F4F2F] transition-colors">
              <span className="material-symbols-outlined text-2xl">code</span>
            </a>
          </div>
          <p className="text-[#444444] text-sm opacity-75">© 2024 Sofia Foresto - QA Engineer. Todos os direitos reservados.</p>
          <p className="text-[#444444] text-xs opacity-50 mt-1">Tempo médio de resposta: menos de 24 horas</p>
        </div>
      </footer>
    </div>
  );
};