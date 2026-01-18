
import React, { useState } from 'react';
import { navLinks } from '../constants';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-fit">
      <div className="relative">
        <div className="flex items-center justify-between bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-full p-2.5 transition-all duration-300">
          <a href="#" className="text-xl font-bold text-slate-900 dark:text-white transition-colors hover:text-slate-600 dark:hover:text-slate-300 pl-4 pr-2">
            argaakbr
          </a>
          
          <div className="hidden md:flex items-center gap-1">
            <div className="w-px h-5 bg-slate-200 dark:bg-slate-700"></div>
            <nav className="flex">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-600 dark:text-dark-subtext font-medium transition-colors hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 px-3.5 py-1.5 rounded-full">
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="w-px h-5 bg-slate-200 dark:bg-slate-700"></div>
          </div>
          
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="text-slate-600 dark:text-dark-subtext hover:text-slate-900 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 dark:text-white focus:outline-none p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 mt-2 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-600 dark:text-dark-subtext font-medium text-center transition-colors hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-2 rounded-lg">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
