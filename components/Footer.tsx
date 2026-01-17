
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-6">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl text-center text-slate-500 dark:text-dark-subtext">
        <p>&copy; {new Date().getFullYear()} Muhammad Arga Fikri Akbar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
