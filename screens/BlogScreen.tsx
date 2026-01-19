import React, { useState } from 'react';
import { Article } from '../types';

const articles: Article[] = [
  {
    id: '1',
    category: 'Automação',
    color: 'bg-emerald-600',
    date: '12 Out, 2024',
    readTime: '4 min leitura',
    title: 'Implementando Cypress para Estratégias de Teste E2E',
    excerpt: 'Um guia completo para configurar o Cypress em um ambiente React, lidando com testes instáveis e...',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    category: 'Metodologia',
    color: 'bg-orange-500',
    date: '28 Set, 2024',
    readTime: '6 min leitura',
    title: 'A Arte do Teste Exploratório Manual',
    excerpt: "Por que a automação não substitui a intuição humana. Técnicas para descobrir casos extremos que scripts perdem.",
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000'
  }
];

export const BlogScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Todos');

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-display pb-24 text-gray-800">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-[#f8f9fa]/95 backdrop-blur-xl border-b border-gray-100">
        <div className="px-6 py-4 flex items-center justify-between">
          <button className="flex items-center justify-center size-10 rounded-full bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <button className="flex items-center justify-center size-10 rounded-full bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors relative">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2.5 right-3 size-1.5 bg-emerald-500 rounded-full ring-2 ring-white"></span>
          </button>
        </div>
        <div className="px-6 pb-6">
          <p className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-2">Editorial</p>
          <h1 className="text-3xl font-light text-gray-900 leading-tight">
            Elite QA <br /><span className="font-bold">Insights</span>
          </h1>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="px-6 pt-2 pb-6">
        <div className="relative group mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-emerald-600 transition-colors">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>
          <input 
            className="block w-full pl-11 pr-4 py-3.5 bg-white border-0 rounded-2xl text-gray-900 placeholder:text-gray-400 shadow-card focus:ring-1 focus:ring-emerald-600/20 focus:shadow-float transition-all duration-300 font-medium text-sm" 
            placeholder="Buscar artigos, tópicos..." 
            type="text" 
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {['Todos', 'Automação', 'Manual', 'Ágil', 'Segurança'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                activeTab === tab 
                  ? 'bg-gray-900 text-white shadow-lg shadow-gray-200' 
                  : 'bg-transparent border border-gray-300 text-gray-500 hover:border-emerald-600 hover:text-emerald-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Articles List */}
      <div className="flex flex-col gap-8 px-6 pb-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <h3 className="text-lg font-bold text-gray-900 tracking-tight">Últimas Histórias</h3>
          <button className="text-xs font-bold text-gray-400 hover:text-emerald-600 transition-colors uppercase tracking-wider">Ver Tudo</button>
        </div>

        {articles.map((article) => (
          <article key={article.id} className="group relative flex flex-col gap-4 animate-slide-up">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-soft group-hover:shadow-float transition-all duration-500">
              <div className="absolute inset-0 bg-gray-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img 
                alt={article.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                src={article.image} 
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-white/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-gray-900 border border-white/20 shadow-sm">
                  <span className={`w-1.5 h-1.5 rounded-full ${article.color} mr-2`}></span>
                  {article.category}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
                <span>{article.date}</span>
                <span className="w-px h-3 bg-gray-300"></span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-emerald-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 font-medium">
                {article.excerpt}
              </p>
              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center text-emerald-600 text-xs font-bold uppercase tracking-widest group cursor-pointer">
                  Ler Artigo
                  <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-300 material-symbols-outlined text-[18px] hover:text-gray-500 cursor-pointer">bookmark_border</span>
                  <span className="text-gray-300 material-symbols-outlined text-[18px] hover:text-gray-500 cursor-pointer">share</span>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-gray-100 mt-2"></div>
          </article>
        ))}
      </div>

      {/* Curated Reads Section */}
      <div className="mt-4 px-6 mb-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1 block">Seleções</span>
            <h3 className="text-xl font-bold text-gray-900">Leituras Curadas</h3>
          </div>
          <div className="p-2 rounded-full bg-gray-100">
            <span className="material-symbols-outlined text-gray-500 text-[20px]">library_books</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#" className="group block bg-white rounded-xl p-5 shadow-card border border-gray-100 hover:border-emerald-600/30 transition-all">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">Relatório do Setor</span>
              <span className="material-symbols-outlined text-[16px] text-gray-300 group-hover:text-emerald-600 transition-colors">open_in_new</span>
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">Estado dos Testes 2024</h4>
            <p className="text-xs text-gray-500 line-clamp-1">Principais descobertas sobre shift-left e IA.</p>
          </a>
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-gray-200 pb-safe z-40">
        <div className="flex justify-around items-center h-20 px-4">
          <a href="#" className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-900 transition-colors group">
            <span className="material-symbols-outlined text-[24px] group-hover:-translate-y-1 transition-transform duration-300">home</span>
            <span className="text-[9px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2">Início</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 p-2 text-emerald-600 relative group">
             <div className="absolute -top-3 w-8 h-1 bg-emerald-500 rounded-b-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            <span className="material-symbols-outlined text-[24px] group-hover:-translate-y-1 transition-transform duration-300">article</span>
            <span className="text-[9px] font-bold tracking-wider uppercase absolute bottom-2">Artigos</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-900 transition-colors group">
            <span className="material-symbols-outlined text-[24px] group-hover:-translate-y-1 transition-transform duration-300">mail</span>
            <span className="text-[9px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2">Contato</span>
          </a>
        </div>
      </nav>
    </div>
  );
};