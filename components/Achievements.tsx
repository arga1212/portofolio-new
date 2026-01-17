
import React, { useRef, useState } from 'react';
import { achievements, certificates } from '../constants';
import { Achievement } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

interface AchievementsProps {
    onCardClick: (item: Achievement) => void;
}

const ItemCard: React.FC<{ item: Achievement, onClick: () => void }> = ({ item, onClick }) => (
    <li className="animate-fade-in" style={{ animationDelay: '150ms' }}>
        <button 
            onClick={onClick} 
            className="w-full bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 p-4 rounded-lg flex items-center space-x-4 text-left transition-all hover:bg-slate-100 dark:hover:bg-slate-700 hover:shadow-md hover:scale-[1.02]"
        >
            <img src={item.imageUrl} alt={item.name} className="w-12 h-12 rounded-md object-cover flex-shrink-0" />
            <span className="text-slate-700 dark:text-dark-text font-medium">{item.name}</span>
        </button>
    </li>
);

const Achievements: React.FC<AchievementsProps> = ({ onCardClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef);
  const [activeTab, setActiveTab] = useState('achievements');

  const tabs = [
    { id: 'achievements', label: '🏆 Achievements' },
    { id: 'certificates', label: '📜 Certificates' }
  ];

  return (
    <section 
        ref={sectionRef} 
        id="achievements" 
        className={`py-20 md:py-28 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Achievements & Certificates</h2>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {/* Tab Navigation */}
        <div className="border-b border-slate-200 dark:border-slate-700 mb-8">
            <nav className="-mb-px flex justify-center space-x-6" aria-label="Tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`${
                            activeTab === tab.id
                                ? 'border-slate-900 dark:border-white text-slate-900 dark:text-white'
                                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-dark-subtext dark:hover:text-slate-300 dark:hover:border-slate-600'
                        } whitespace-nowrap py-4 px-1 border-b-2 font-semibold text-lg transition-colors`}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>
        </div>

        {/* Tab Content */}
        <div>
            {activeTab === 'achievements' && (
                <ul className="space-y-4">
                    {achievements.map((item, index) => (
                        <ItemCard key={`achieve-${index}`} item={item} onClick={() => onCardClick(item)} />
                    ))}
                </ul>
            )}
            {activeTab === 'certificates' && (
                 <ul className="space-y-4">
                    {certificates.map((item, index) => (
                        <ItemCard key={`cert-${index}`} item={item} onClick={() => onCardClick(item)} />
                    ))}
                </ul>
            )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
