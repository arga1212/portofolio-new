
import React from 'react';
import { creativeExperience } from '../constants';
import { CreativeExperience as CreativeExperienceType } from '../types';

interface CreativeExperienceProps {
    onCardClick: (experience: CreativeExperienceType) => void;
}

const ExperienceCard: React.FC<{ experience: CreativeExperienceType; onClick: () => void; }> = ({ experience, onClick }) => (
    <div className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100 dark:border-slate-800" onClick={onClick}>
        <div className="relative overflow-hidden">
            <img src={experience.imageUrl} alt={experience.title} className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center justify-between">
                    <div className="text-white">
                        <h3 className="text-lg font-bold mb-1">{experience.title}</h3>
                        <p className="text-white/80 text-sm">View experience details</p>
                    </div>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{experience.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{experience.description}</p>
            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Experience</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
);


const CreativeExperience: React.FC<CreativeExperienceProps> = ({ onCardClick }) => {
    return (
        <section id="experience" className="py-20 md:py-28">
            <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                    <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">🎨 Creative Journey</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Creative & Media Experience</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">My journey in creative fields, from design to documentation and digital storytelling.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {creativeExperience.map((item, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                        <ExperienceCard experience={item} onClick={() => onCardClick(item)} />
                    </div>
                ))}
            </div>
            
            <style>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(30px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              
              .animate-fade-in-up {
                animation: fadeInUp 0.8s ease-out forwards;
                opacity: 0;
              }
            `}</style>
        </section>
    );
};

export default CreativeExperience;
