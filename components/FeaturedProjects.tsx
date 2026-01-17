
import React, { useRef } from 'react';
import { featuredProjects } from '../constants';
import { Project } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

interface FeaturedProjectsProps {
    onCardClick: (project: Project) => void;
}

const ProjectCard: React.FC<{ project: Project; onClick: () => void; }> = ({ project, onClick }) => (
    <button onClick={onClick} className="bg-white dark:bg-dark-card rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 group transition-shadow hover:shadow-xl text-left w-full">
        <div className="overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-slate-600 dark:text-dark-subtext mb-4">{project.description}</p>
        </div>
    </button>
);

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onCardClick }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useOnScreen(sectionRef);

    return (
        <section 
            ref={sectionRef} 
            id="projects" 
            className={`py-20 md:py-28 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
                <p className="text-slate-600 dark:text-dark-subtext mt-2">A selection of my main projects.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} onClick={() => onCardClick(project)} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;
