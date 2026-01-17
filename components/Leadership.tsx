
import React, { useRef } from 'react';
import { leadershipExperience } from '../constants';
import { Leadership as LeadershipType } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

interface LeadershipProps {
    onCardClick: (experience: LeadershipType) => void;
}

const LeadershipCard: React.FC<{ experience: LeadershipType; onClick: () => void; }> = ({ experience, onClick }) => (
    <button onClick={onClick} className="bg-white dark:bg-dark-card rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 text-center group transition-shadow hover:shadow-xl w-full">
        <img src={experience.imageUrl} alt={experience.role} className="w-full h-48 object-cover"/>
        <div className="p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{experience.role}</h3>
            <p className="text-slate-600 dark:text-dark-subtext">{experience.description}</p>
        </div>
    </button>
);

const Leadership: React.FC<LeadershipProps> = ({ onCardClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef);

  return (
    <section 
        ref={sectionRef} 
        id="leadership" 
        className={`py-20 md:py-28 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Organizational & Leadership</h2>
        <p className="text-slate-600 dark:text-dark-subtext mt-2">My journey in leadership and organizational roles. 🔥</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {leadershipExperience.map((item, index) => (
          <LeadershipCard key={index} experience={item} onClick={() => onCardClick(item)} />
        ))}
      </div>
    </section>
  );
};

export default Leadership;
