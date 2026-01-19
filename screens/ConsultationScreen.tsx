import React from 'react';

export const ConsultationScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-display text-gray-800 antialiased selection:bg-emerald-600 selection:text-white pb-12">
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 backdrop-blur-xl bg-[#FAFAFA]/80">
        <button className="group flex size-10 items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <span className="material-symbols-outlined text-gray-600 group-hover:text-emerald-600 transition-colors">arrow_back</span>
        </button>
        <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Consultoria</span>
        <div className="size-10 flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-600"></div>
        </div>
      </header>

      <main className="flex-1 flex flex-col px-6 gap-10">
        <section className="mt-2 text-center animate-fade-in">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-3">
            Expertise QA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Premium</span>
          </h1>
          <p className="text-gray-500 text-sm font-body leading-relaxed max-w-[280px] mx-auto">
            Eleve a confiabilidade do seu produto com estratégias de teste sob medida e garantia de qualidade de nível empresarial.
          </p>
        </section>

        <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-end justify-between mb-6 px-1">
            <h2 className="text-lg font-bold text-gray-900">Serviços</h2>
            <div className="flex gap-2">
              <span className="size-2 rounded-full bg-emerald-600"></span>
              <span className="size-2 rounded-full bg-gray-200"></span>
              <span className="size-2 rounded-full bg-gray-200"></span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Essential Card */}
            <div className="group relative rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="inline-block py-1 px-2.5 rounded-md bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500">Inicial</span>
                  <h3 className="font-bold text-xl text-gray-900">Auditoria Essencial</h3>
                </div>
                <div className="text-right">
                  <span className="block text-xl font-bold text-gray-900">R$1.250</span>
                </div>
              </div>
              <div className="my-6 space-y-3">
                {['Teste Exploratório', 'Relatório de Bugs Detalhado', '1 Plataforma (iOS ou Android)'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-5 rounded-full bg-emerald-50 text-emerald-600">
                      <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 rounded-xl border border-gray-200 font-semibold text-sm text-gray-900 hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-300">
                Selecionar Essencial
              </button>
            </div>

            {/* Pro Hybrid Card */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white p-7 shadow-2xl shadow-gray-300 overflow-hidden transform transition-transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 py-1 px-2.5 rounded-md bg-emerald-500/20 text-[10px] font-bold uppercase tracking-wider text-emerald-300 border border-emerald-500/20">
                      <span className="material-symbols-outlined text-[12px]">star</span> Recomendado
                    </span>
                    <h3 className="font-bold text-2xl tracking-tight">Híbrido Pro</h3>
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-bold">R$4.250</span>
                    <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">/ Projeto</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <p className="text-sm text-gray-300 font-body leading-relaxed border-l-2 border-emerald-500 pl-3">
                    Cobertura abrangente combinando profundidade manual com eficiência automatizada.
                  </p>
                  <ul className="space-y-3 pt-2">
                    {['Manual + Smoke Tests Auto', 'Cobertura de 5 Dispositivos', 'Plano de Teste & Scripts'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-emerald-500 text-[18px]">verified</span>
                        <span className="text-sm font-medium text-gray-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-3.5 rounded-xl bg-white text-gray-900 font-bold text-sm shadow-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2">
                  <span>Começar</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">Consultoria</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
              Garanta sua vaga para um aprofundamento técnico.
            </p>
          </div>
          <form className="flex flex-col gap-6 bg-white p-6 rounded-2xl shadow-lg shadow-gray-100 border border-gray-100">
            <div className="grid grid-cols-1 gap-5">
              <div className="group">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 transition-colors group-focus-within:text-emerald-600">Nome Completo</label>
                <input className="w-full bg-gray-50 border-0 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-emerald-600 transition-all shadow-inner" placeholder="João Silva" type="text" />
              </div>
              <div className="group">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 transition-colors group-focus-within:text-emerald-600">E-mail Corporativo</label>
                <input className="w-full bg-gray-50 border-0 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-emerald-600 transition-all shadow-inner" placeholder="joao@empresa.com.br" type="email" />
              </div>
            </div>
            <div className="group">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Interesse</label>
              <div className="flex flex-wrap gap-2">
                {['Web App', 'Mobile', 'API', 'Consultoria'].map((interest, i) => (
                  <label key={interest} className="cursor-pointer">
                    <input type="radio" name="project_type" className="peer sr-only" defaultChecked={i===0} />
                    <div className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-500 shadow-sm transition-all hover:bg-gray-50 peer-checked:border-emerald-600 peer-checked:bg-emerald-600 peer-checked:text-white peer-checked:shadow-md peer-checked:shadow-emerald-600/20">
                      {interest}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <div className="pt-2">
              <button type="button" className="relative w-full overflow-hidden rounded-xl bg-emerald-600 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:shadow-emerald-600/50 active:scale-[0.98]">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Solicitar Consultoria
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </span>
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};