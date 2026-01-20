import React, { useState } from 'react';
import { Article } from '../types';
import articleCover from '../artigo_o_que_faz_qa.png';
import coverExploratory from '../testes_exploratorios.png';

const articles: Article[] = [
  {
    id: '1',
    category: 'Conceitos Técnicos',
    color: 'bg-blue-600',
    date: '20 Jan, 2026',
    readTime: '5 min leitura',
    title: 'O Que Fazem os Testadores de Software?',
    excerpt: 'Baseado em uma pesquisa com a comunidade, o artigo define o testador de software como um investigador que busca respostas e riscos para apoiar a tomada de decisões, destacando que a profissão exige aprendizado contínuo e vai muito além de apenas encontrar falhas.',
    image: articleCover,
    link: 'https://www.ministryoftesting.com/articles/what-do-software-testers-do'
  },
  {
    id: '2',
    category: 'Metodologia',
    color: 'bg-orange-500',
    date: '15 Dez, 2024',
    readTime: '7 min leitura',
    title: 'Uma jornada de descobertas e aprendizado com testes exploratórios',
    excerpt: 'O texto apresenta uma visão completa e prática sobre testes exploratórios, explicando o que são, por que existem e como podem ser executados de forma mais estruturada e profissional.',
    image: coverExploratory,
    link: 'https://medium.com/revista-tspi/uma-jornada-de-descobertas-e-aprendizado-com-testes-explorat%C3%B3rios-87f1a11b21ad'
  }
];

export const BlogScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredArticles = articles
    .filter(a => activeTab === 'Todos' || a.category === activeTab)
    .filter(a => a.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-display pb-24 text-gray-800">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-[#f8f9fa]/95 backdrop-blur-xl border-b border-gray-100">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="size-10"></div>
          <div className="size-10"></div>
        </div>
        <div className="px-6 pb-6">
          <p className="text-xs font-bold tracking-widest uppercase text-[#2F4F2F] mb-2">Leituras Recomendadas</p>
          <h1 className="text-3xl font-light text-gray-900 leading-tight">
            Descubra a Área de QA
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Uma curadoria de artigos essenciais para quem quer se aprofundar na garantia da qualidade de software, organizados por categorias.
          </p>
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {['Todos', 'Automação', 'Metodologia', 'Teoria', 'Conceitos Técnicos'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                activeTab === tab 
                  ? 'bg-[#2F4F2F] text-white shadow-lg shadow-gray-200' 
                  : 'bg-transparent border border-gray-300 text-gray-500 hover:border-[#2F4F2F] hover:text-[#2F4F2F]'
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

        {filteredArticles.map((article) => (
          article.link ? (
            <a key={article.id} href={article.link} target="_blank" rel="noopener noreferrer" className="group relative flex flex-col gap-4 animate-slide-up">
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
            </a>
          ) : (
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
          )
        ))}
      </div>

    </div>
  );
};