
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-6">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-slate-500 dark:text-dark-subtext">
          &copy; {new Date().getFullYear()} Muhammad Arga Fikri Akbar. All rights reserved.
        </p>
        {/* TODO: Ganti dengan link Google Drive CV Anda yang sebenarnya */}
        <a 
          href="https://docs.google.com/document/d/YOUR_UNIQUE_DOCUMENT_ID/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-2 bg-slate-100 dark:bg-dark-card text-slate-800 dark:text-white font-semibold rounded-lg shadow-sm transition-transform transform hover:scale-105 hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          Download CV
        </a>
      </div>
    </footer>
  );
};

export default Footer;
