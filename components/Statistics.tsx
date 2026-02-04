
import React, { useRef } from 'react';
import { stats } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';

const Statistics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef);

  return (
    <section 
        ref={sectionRef} 
        id="statistics" 
        className={`py-20 md:py-28 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
