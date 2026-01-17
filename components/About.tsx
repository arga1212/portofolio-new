
import React, { useRef } from 'react';
import { aboutFocus, aboutActivities } from '../constants';
import { AboutItem } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

const InfoCard: React.FC<{ item: AboutItem }> = ({ item }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-slate-100 dark:bg-dark-card p-3 rounded-full text-slate-600 dark:text-slate-300"
             dangerouslySetInnerHTML={{ __html: item.icon }}
        />
        <div>
            <h4 className="font-bold text-lg text-slate-800 dark:text-dark-text">{item.title}</h4>
            <p className="text-slate-600 dark:text-dark-subtext">{item.description}</p>
        </div>
    </div>
);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef);

  return (
    <section 
        ref={sectionRef} 
        id="about" 
        className={`py-20 md:py-28 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
            <p className="text-slate-500 dark:text-dark-subtext text-xl font-semibold mb-6">Siswa SMK Telkom Sidoarjo</p>
            <p className="max-w-3xl mx-auto text-slate-600 dark:text-dark-subtext text-lg mb-12">
                Seorang pengembang yang antusias dengan pengalaman kerja tim, kepemimpinan, dan presentasi. Selalu siap untuk belajar dan berkontribusi pada proyek yang menantang.
            </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Fokus Utama Saya</h3>
                <div className="space-y-6">
                    {aboutFocus.map((item, index) => (
                        <InfoCard key={index} item={item} />
                    ))}
                </div>
            </div>
            <div>
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Aktivitas & Keterlibatan</h3>
                <div className="space-y-6">
                    {aboutActivities.map((item, index) => (
                        <InfoCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
