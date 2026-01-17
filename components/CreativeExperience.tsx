
import React from 'react';
import { creativeExperience } from '../constants';
import { CreativeExperience as CreativeExperienceType } from '../types';

interface CreativeExperienceProps {
    onCardClick: (experience: CreativeExperienceType) => void;
}

const ExperienceCard: React.FC<{ experience: CreativeExperienceType; onClick: () => void; }> = ({ experience, onClick }) => (
    <button onClick={onClick} className="bg-white dark:bg-dark-card rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 group transition-shadow hover:shadow-xl text-left w-full">
        <img src={experience.imageUrl} alt={experience.title} className="w-full h-48 object-cover" />
        <div className="p-5">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{experience.title}</h3>
            <p className="text-slate-600 dark:text-dark-subtext text-sm">{experience.description}</p>
        </div>
    </button>
);


const CreativeExperience: React.FC<CreativeExperienceProps> = ({ onCardClick }) => {
    return (
        <section id="experience" className="py-20 md:py-28">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Creative & Media Experience</h2>
                <p className="text-slate-600 dark:text-dark-subtext mt-2">My experience in creative and documentation roles.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {creativeExperience.map((item, index) => (
                    <ExperienceCard key={index} experience={item} onClick={() => onCardClick(item)} />
                ))}
            </div>
        </section>
    );
};

export default CreativeExperience;
