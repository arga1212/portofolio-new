
import React, { useRef } from 'react';
import { aboutFocus, aboutActivities } from '../constants';
import { AboutItem } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

const InfoCard: React.FC<{ item: AboutItem }> = ({ item }) => (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gray-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 text-xl">
                <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            </div>
            <div className="text-xs bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">
                Active
            </div>
        </div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{item.title}</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-gray-500 dark:text-gray-400 text-xl font-semibold mb-6">Siswa SMK Telkom Sidoarjo</p>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg mb-12 leading-relaxed">
                Seorang pengembang yang antusias dengan pengalaman kerja tim, kepemimpinan, dan presentasi. Selalu siap untuk belajar dan berkontribusi pada proyek yang menantang.
            </p>
        </div>
        
        <div className="space-y-12">
            <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>Fokus Utama Saya</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {aboutFocus.map((item, index) => (
                        <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${300 + index * 150}ms` }}>
                            <InfoCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>Aktivitas & Keterlibatan</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {aboutActivities.map((item, index) => (
                        <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${700 + index * 150}ms` }}>
                            <InfoCard item={item} />
                        </div>
                    ))}
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

export default About;
