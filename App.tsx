import { useState } from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { BlogScreen } from './screens/BlogScreen';
import { ConsultationScreen } from './screens/ConsultationScreen';
import { PortfolioScreen } from './screens/PortfolioScreen';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'articles' | 'tests' | 'services'>('home');

  const handleNavigate = (view: string) => {
    if (view === 'articles') setCurrentView('articles');
    else if (view === 'tests') setCurrentView('tests');
    else if (view === 'services') setCurrentView('services');
    else setCurrentView('home');
  };

  if (currentView === 'home') {
    return <HomeScreen onNavigate={handleNavigate} />;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto shadow-lg min-h-screen bg-white">
      {/* Back to Home Utility - For Demo Purposes */}
      <button
        onClick={() => setCurrentView('home')}
        className="fixed top-6 left-6 z-[100] bg-[#2F4F2F] text-white p-3 rounded-full shadow-lg hover:bg-[#1a2a1a] transition-colors"
        title="Voltar ao Início"
      >
        <span className="material-symbols-outlined text-lg">home</span>
      </button>

      {currentView === 'articles' && <BlogScreen />}
      {currentView === 'tests' && <PortfolioScreen />}
      {currentView === 'services' && <ConsultationScreen />}
    </div>
  );
}