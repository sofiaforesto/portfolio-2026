import React from 'react';

export const PortfolioScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-300 font-display relative overflow-hidden pb-32">
        {/* Background Ambient Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
        
        {/* Header */}
        <div className="relative flex items-center justify-between px-8 pt-8 pb-4 animate-fade-in">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase font-display">Portfolio v2.0</span>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                <span className="text-[10px] font-medium text-emerald-200 uppercase tracking-wide">Available</span>
            </div>
        </div>

        {/* Profile Hero */}
        <div className="relative px-8 py-6 animate-slide-up">
            <div className="flex flex-col items-center text-center">
                <div className="relative group cursor-pointer mb-6">
                    <div className="absolute -inset-4 rounded-full border border-white/5 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out"></div>
                    <div className="relative h-28 w-28 rounded-full p-1 border border-white/10 ring-1 ring-white/5 bg-dark-bg shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" 
                            alt="Alex Chen" 
                            className="h-full w-full rounded-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        />
                    </div>
                </div>
                <h1 className="text-4xl font-serif font-medium text-white tracking-tight mb-2">Alex Chen</h1>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-light text-emerald-200/80 tracking-widest uppercase">Senior QA Engineer</span>
                    <div className="h-px w-8 bg-white/10 my-2"></div>
                    <p className="text-xs text-gray-500 font-medium tracking-wide">SFO • REMOTE</p>
                </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="px-6 py-4 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <div className="grid grid-cols-3 gap-4">
                {[
                    { val: '8+', label: 'Years Exp' },
                    { val: '99%', label: 'Coverage' },
                    { val: '40+', label: 'Projects' }
                ].map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group hover:bg-white/10 transition-colors duration-300">
                        <span className="text-2xl font-serif text-white group-hover:scale-110 transition-transform duration-300">{stat.val}</span>
                        <span className="text-[9px] text-gray-500 uppercase tracking-widest text-center mt-2 border-t border-white/5 pt-2 w-full">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Philosophy Card */}
        <div className="px-6 py-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-white/5 border border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-20">
                    <span className="material-symbols-outlined text-6xl text-emerald-500 font-serif">format_quote</span>
                </div>
                <h2 className="text-lg font-serif italic text-white mb-4 relative z-10">Philosophy</h2>
                <p className="text-gray-400 text-sm font-light leading-7 relative z-10">
                    Obsessed with zero-defect delivery. Bridging the gap between <span className="text-white font-normal underline decoration-emerald-500/50 decoration-1 underline-offset-4">velocity</span> and <span className="text-white font-normal underline decoration-emerald-500/50 decoration-1 underline-offset-4">reliability</span> through automated frameworks.
                </p>
            </div>
        </div>

        {/* Navigation Grid */}
        <div className="flex-1 px-6 py-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="flex items-end justify-between mb-6 border-b border-white/5 pb-2">
                <h3 className="text-white font-serif text-2xl">Explore</h3>
                <button className="text-[10px] text-emerald-200/80 uppercase tracking-widest hover:text-white transition-colors pb-1">View Archive</button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
                <button className="flex flex-col p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-300 text-left group h-full relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 bg-emerald-500/10 w-16 h-16 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all"></div>
                    <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-emerald-200 mb-4 group-hover:scale-110 transition-transform bg-dark-surface/50">
                        <span className="material-symbols-outlined font-light text-[20px]">terminal</span>
                    </div>
                    <h4 className="text-white font-serif text-lg mb-2">Articles</h4>
                    <p className="text-xs text-gray-500 font-light leading-relaxed">Insights on automation & Cypress.</p>
                </button>
                <button className="flex flex-col p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-300 text-left group h-full relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 bg-emerald-500/10 w-16 h-16 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all"></div>
                    <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-emerald-200 mb-4 group-hover:scale-110 transition-transform bg-dark-surface/50">
                        <span className="material-symbols-outlined font-light text-[20px]">bug_report</span>
                    </div>
                    <h4 className="text-white font-serif text-lg mb-2">Work</h4>
                    <p className="text-xs text-gray-500 font-light leading-relaxed">Case studies and bug bashes.</p>
                </button>
            </div>
        </div>

        {/* Featured Work */}
        <div className="px-6 pb-28 pt-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center gap-3 mb-4">
                <div className="h-px bg-white/10 flex-1"></div>
                <h3 className="text-gray-400 text-xs uppercase tracking-widest font-medium">Featured</h3>
                <div className="h-px bg-white/10 flex-1"></div>
            </div>
            <div className="w-full h-56 rounded-2xl relative overflow-hidden group cursor-pointer border border-white/5 shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=1000" 
                    alt="Chart" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 rounded border border-white/20 bg-white/5 backdrop-blur-md text-emerald-300 text-[9px] font-bold uppercase tracking-widest">Fintech</span>
                        <span className="text-[10px] text-gray-400 font-serif italic">2 min read</span>
                    </div>
                    <h4 className="text-white font-serif text-xl leading-tight">Reducing Regression Time by 60%</h4>
                </div>
            </div>
        </div>

        {/* Dock Nav */}
        <div className="fixed bottom-6 left-0 right-0 z-50 px-4 flex justify-center">
            <div className="w-full max-w-[320px] rounded-full bg-[#1c1c1e]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50">
                <div className="flex justify-between items-center px-6 py-4">
                    <button className="group flex flex-col items-center gap-1 text-emerald-500">
                        <span className="material-symbols-outlined symbol-filled text-[22px] group-hover:scale-110 transition-transform">grid_view</span>
                    </button>
                    <button className="group flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
                        <span className="material-symbols-outlined font-light text-[22px] group-hover:scale-110 transition-transform">folder_open</span>
                    </button>
                    <button className="relative -mt-8 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-glow transition-all active:scale-95 border-4 border-dark-bg">
                        <span className="material-symbols-outlined text-2xl">mail</span>
                    </button>
                    <button className="group flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
                        <span className="material-symbols-outlined font-light text-[22px] group-hover:scale-110 transition-transform">design_services</span>
                    </button>
                    <button className="group flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
                        <span className="material-symbols-outlined font-light text-[22px] group-hover:scale-110 transition-transform">person</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};
