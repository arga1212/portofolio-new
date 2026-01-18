
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Image for Mobile */}
        <div className="md:hidden flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-slate-200 dark:border-slate-700">
              <img 
                  src="/fotoku.JPG" 
                  alt="Muhammad Arga Fikri Akbar" 
                  className="w-full h-full object-cover"
              />
          </div>
        </div>
        
        <div className="animate-fade-in-up text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-4">
            Hello, I'm Muhammad Arga Fikri Akbar{' '}
            <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="max-w-xl text-slate-600 dark:text-dark-subtext text-lg md:text-xl mb-8 mx-auto md:mx-0">
            Frontend Developer yang aktif mengerjakan project web, IoT, dan aplikasi berbasis Flask serta berpengalaman dalam dokumentasi dan publikasi digital.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <a href="#projects" className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900 font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-slate-700 dark:hover:bg-slate-400">
              View Projects
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-3 bg-slate-100 dark:bg-dark-card text-slate-800 dark:text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-slate-200 dark:hover:bg-slate-700">
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Image for Desktop */}
        <div className="hidden md:flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-slate-200 dark:border-slate-700">
              <img 
                  src="/fotoku.JPG" 
                  alt="Muhammad Arga Fikri Akbar" 
                  className="w-full h-full object-cover"
              />
          </div>
        </div>
      </div>
       <style>{`
        @keyframes wave {
          0% { transform: rotate(0.0deg) }
          10% { transform: rotate(14.0deg) }
          20% { transform: rotate(-8.0deg) }
          30% { transform: rotate(14.0deg) }
          40% { transform: rotate(-4.0deg) }
          50% { transform: rotate(10.0deg) }
          60% { transform: rotate(0.0deg) }
          100% { transform: rotate(0.0deg) }
        }
        .animate-wave {
            display: inline-block;
            animation: wave 2.s infinite;
            transform-origin: 70% 70%;
        }
      `}</style>
    </section>
  );
};

export default Hero;
