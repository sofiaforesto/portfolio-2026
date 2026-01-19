import React, { useState } from 'react';
import { BlogScreen } from './screens/BlogScreen';
import { ConsultationScreen } from './screens/ConsultationScreen';
import { PortfolioScreen } from './screens/PortfolioScreen';

export default function App() {
  const [currentView, setCurrentView] = useState<'blog' | 'services' | 'portfolio' | 'menu'>('menu');

  if (currentView === 'menu') {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 font-display">
        <h1 className="text-4xl text-white font-bold mb-2 tracking-tight">Elite QA Suite</h1>
        <p className="text-gray-400 mb-10 text-center max-w-md">Selecione uma interface abaixo para explorar as implementações MVP funcionais.</p>
        
        <div className="grid gap-4 w-full max-w-sm">
          <button 
            onClick={() => setCurrentView('blog')}
            className="flex items-center p-4 bg-white rounded-xl shadow-lg hover:bg-emerald-50 hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">article</span>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-gray-900">Elite QA Insights</h3>
              <p className="text-xs text-gray-500">Interface de Blog & Editorial</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-gray-300 group-hover:text-emerald-600">arrow_forward</span>
          </button>

          <button 
            onClick={() => setCurrentView('services')}
            className="flex items-center p-4 bg-white rounded-xl shadow-lg hover:bg-emerald-50 hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
               <span className="material-symbols-outlined">design_services</span>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-gray-900">Serviços QA</h3>
              <p className="text-xs text-gray-500">Preços & Formulário de Consultoria</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-gray-300 group-hover:text-emerald-600">arrow_forward</span>
          </button>

          <button 
            onClick={() => setCurrentView('portfolio')}
            className="flex items-center p-4 bg-[#1f1f22] border border-gray-800 rounded-xl shadow-lg hover:border-emerald-500/50 hover:scale-[1.02] transition-all duration-300 group"
          >
             <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-emerald-400 mr-4">
               <span className="material-symbols-outlined">person</span>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white">Alex Chen</h3>
              <p className="text-xs text-gray-500">Portfólio Interativo (Dark)</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-gray-600 group-hover:text-white">arrow_forward</span>
          </button>
        </div>
        
        <div className="mt-12 text-xs text-gray-600">
           MVP Build v1.0 • React 18 • TailwindCSS
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md mx-auto shadow-2xl min-h-screen bg-white overflow-hidden">
      {/* Back to Menu Utility - For Demo Purposes */}
      <button 
        onClick={() => setCurrentView('menu')}
        className="fixed top-24 left-4 z-[100] bg-black/80 text-white p-2 rounded-full shadow-lg opacity-30 hover:opacity-100 transition-opacity"
        title="Voltar ao Menu"
      >
        <span className="material-symbols-outlined text-sm">grid_view</span>
      </button>

      {currentView === 'blog' && <BlogScreen />}
      {currentView === 'services' && <ConsultationScreen />}
      {currentView === 'portfolio' && <PortfolioScreen />}
    </div>
  );
}