
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-slate-900">
      <div className="grid md:grid-cols-2 gap-16 items-center w-full max-w-6xl mx-auto px-6">
        {/* Image for Mobile */}
        <div className="md:hidden flex justify-center items-center mb-8">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200 dark:border-slate-700">
              <img 
                  src="/fotoku.JPG" 
                  alt="Muhammad Arga Fikri Akbar" 
                  className="w-full h-full object-cover"
              />
          </div>
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Hi, I'm Muhammad Arga Fikri Akbar{' '}
            <span className="inline-block animate-wave">👋🏻🦦</span><br/>
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl">
            Frontend Developer yang aktif mengerjakan project web, IoT, dan aplikasi berbasis Flask serta berpengalaman dalam dokumentasi dan publikasi digital.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <button className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              Get a project?
            </button>
            <a href="#contact" className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
              Let's talk
            </a>
          </div>
        </div>
        
        {/* Image for Desktop */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative">
            <div className="w-96 h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-gray-200 dark:border-slate-700">
                <img 
                    src="/fotoku.JPG" 
                    alt="Muhammad Arga Fikri Akbar" 
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Simple decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-red-500 rounded-lg rotate-12"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-red-500 rounded -rotate-12"></div>
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
          animation: wave 2s infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </section>
  );
};

export default Hero;