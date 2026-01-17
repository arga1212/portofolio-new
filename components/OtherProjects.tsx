
import React, { useRef } from 'react';
import { otherProjects } from '../constants';
import { Project } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

interface OtherProjectsProps {
    onCardClick: (project: Project) => void;
}

const OtherProjectCard: React.FC<{ project: Project; onClick: () => void; }> = ({ project, onClick }) => (
    <button onClick={onClick} className="bg-white dark:bg-dark-card rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 group transition-shadow hover:shadow-xl text-left w-full">
        <img src={project.imageUrl} alt={project.name} className="w-full h-40 object-cover" />
        <div className="p-4">
            <h3 className="font-semibold text-slate-800 dark:text-white">{project.name}</h3>
        </div>
    </button>
);

const OtherProjects: React.FC<OtherProjectsProps> = ({ onCardClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef);

  return (
    <section 
        ref={sectionRef} 
        id="other-projects" 
        className={`py-20 md:py-28 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Other Web & Frontend Projects</h2>
        <p className="text-slate-600 dark:text-dark-subtext mt-2">More of my work and contributions.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {otherProjects.map((project, index) => (
          <OtherProjectCard key={index} project={project} onClick={() => onCardClick(project)} />
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
