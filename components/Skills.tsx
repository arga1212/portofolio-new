
import React, { useRef } from 'react';
import { skills } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';

const SkillCard: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 h-full hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
        <ul className="space-y-3">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Skills: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useOnScreen(sectionRef);

    return (
        <section 
            ref={sectionRef} 
            id="skills" 
            className={`py-20 md:py-28 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
                <p className="text-gray-600 dark:text-gray-400">The tools and technologies I use to bring ideas to life.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <SkillCard title={skills.frontend.title} items={skills.frontend.items} />
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <SkillCard title={skills.backend.title} items={skills.backend.items} />
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <SkillCard title={skills.iot.title} items={skills.iot.items} />
                </div>
                <div className="md:col-span-2 lg:col-span-3 flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-2/3">
                        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <SkillCard title={skills.creative.title} items={skills.creative.items} />
                        </div>
                        <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                            <SkillCard title={skills.soft.title} items={skills.soft.items} />
                        </div>
                    </div>
                </div>
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

export default Skills;
