
import React, { useRef } from 'react';
import { skills } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';

const SkillCard: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
    <div className="bg-white dark:bg-dark-card p-6 rounded-lg border border-slate-200 dark:border-slate-800 transition-shadow hover:shadow-lg h-full">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-slate-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-slate-600 dark:text-dark-subtext">{item}</span>
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
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Skills & Expertise</h2>
                <p className="text-slate-600 dark:text-dark-subtext mt-2">The tools and technologies I use to bring ideas to life.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SkillCard title={skills.frontend.title} items={skills.frontend.items} />
                <SkillCard title={skills.backend.title} items={skills.backend.items} />
                <SkillCard title={skills.iot.title} items={skills.iot.items} />

                {/* This wrapper now uses flexbox to center the inner grid */}
                <div className="md:col-span-2 lg:col-span-3 flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:w-2/3">
                        <SkillCard title={skills.creative.title} items={skills.creative.items} />
                        <SkillCard title={skills.soft.title} items={skills.soft.items} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
