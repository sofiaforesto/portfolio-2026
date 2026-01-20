import React, { useState } from 'react';

export const ConsultationScreen: React.FC = () => {
  const [selectedInterest, setSelectedInterest] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
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
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300"
              style={{ background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(47, 79, 47, 0.1) 0%, transparent 50%)' }}
              onMouseMove={handleMouseMove}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block py-1 px-3 rounded-md bg-gray-100 text-xs font-bold uppercase tracking-wider text-[#444444]">Prata</span>
                <span className="text-lg font-bold text-[#2F4F2F]">R$ 800 - 1.200</span>
              </div>
              <h3 className="font-bold text-xl text-[#2F4F2F] mb-4">Validação Essencial</h3>
              <p className="text-[#444444] mb-4 leading-relaxed">
                Para lançamentos ágeis e sem riscos desnecessários. Ideal para MVPs, Landing Pages ou funcionalidades pontuais que precisam ir ao ar com segurança. Garantimos que o fluxo principal funciona perfeitamente, evitando que seu usuário encontre bloqueios críticos.
              </p>
              <p className="text-sm text-[#444444] mb-4"><strong>Tempo de atuação:</strong> 3 a 5 dias.</p>
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
              className="bg-[#2F4F2F] p-6 rounded-xl text-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              style={{ background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255, 215, 0, 0.2) 0%, transparent 50%)' }}
              onMouseMove={handleMouseMove}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block py-1 px-3 rounded-md bg-white text-xs font-bold uppercase tracking-wider text-[#2F4F2F]">Ouro</span>
                <span className="text-2xl font-bold text-[#2F4F2F]">R$ 1.500 - 2.500</span>
              </div>
              <h3 className="font-bold text-2xl text-[#2F4F2F] mb-4">Blindagem Profissional</h3>
              <p className="text-[#444444] mb-4 leading-relaxed">
                A escolha favorita para produtos em crescimento. O equilíbrio perfeito entre custo e profundidade. Aqui, nós não apenas testamos o que deveria funcionar, mas caçamos ativamente onde o sistema pode falhar. É a garantia de que seu produto suporta o uso real, erros de usuário e diferentes dispositivos.
              </p>
              <p className="text-sm text-[#444444] mb-4"><strong>Tempo de atuação:</strong> 1 semana (Ciclo Fechado).</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Cobertura Total (Prata inclusa): Mais profundidade nos testes.',
                  'Caça aos "Edge Cases": Testes de fluxos alternativos e erros de usuário.',
                  'Responsividade Garantida: Validação visual e funcional em Mobile e Desktop.',
                  'Evidências Ricas: Relatório visual com vídeos/GIFs dos bugs e re-teste após correção.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#869878] text-lg mt-0.5">verified</span>
                    <span className="text-sm text-[#444444]">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full py-3 rounded-lg bg-white text-[#2F4F2F] font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                onClick={() => handlePlanSelect('ouro')}
              >
                <span>Selecionar Ouro</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </article>

            {/* Card 3: Diamante */}
            <div className="relative group">
              <article 
                className="bg-[#2F4F2F] p-6 rounded-xl text-white relative overflow-hidden hover:scale-[1.03] transition-all duration-500 ease-out"
                style={{ 
                  background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(100, 149, 237, 0.4) 0%, transparent 70%)',
                  boxShadow: '0px 10px 30px rgba(47, 79, 47, 0.10)'
                }}
                onMouseMove={handleMouseMove}
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(100, 149, 237, 0.2), 0 10px 25px rgba(0, 0, 0, 0.15), 0 0 30px 5px rgba(100, 149, 237, 0.3)' }}></div>
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block py-1 px-3 rounded-md bg-[#869878] text-xs font-bold uppercase tracking-wider text-white">Diamante</span>
                <span className="text-xl font-bold text-[#2F4F2F]">R$ 3.000 - 4.500</span>
              </div>
              <h3 className="font-bold text-xl text-[#2F4F2F] mb-4">Engenharia de Qualidade</h3>
              <p className="text-[#444444] mb-4 leading-relaxed">
                Para quem joga o jogo do longo prazo e escalabilidade. Mais que testes, entregamos maturidade de software. Este pacote resolve problemas estruturais, organiza sua base de conhecimento e prepara seu produto para escalar com inteligência (IA) e automação. É uma consultoria completa de QA.
              </p>
              <p className="text-sm text-[#444444] mb-4"><strong>Tempo de atuação:</strong> 2 semanas (Sprint Completa).</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Gestão de Processos: Organização da metodologia de qualidade do projeto.',
                  'Dados e IA: Validação e alimentação técnica de bancos de dados ou modelos de IA.',
                  'Legado Técnico: Documentação das regras de negócio e estrutura da plataforma.',
                  'Roadmap de Automação: Preparação e scripts para testes automatizados de fluxos vitais.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#869878] text-lg mt-0.5">verified</span>
                    <span className="text-sm text-[#444444]">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full py-3 rounded-lg bg-white text-[#2F4F2F] font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                onClick={() => handlePlanSelect('diamante')}
              >
                <span>Selecionar Diamante</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
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
            {selectedPlan && (
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#2F4F2F] text-white">
                  PACOTE ESCOLHIDO: {selectedPlan.toUpperCase()}
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
                placeholder="Descreva brevemente seu projeto..."
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