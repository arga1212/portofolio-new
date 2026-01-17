
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import OtherProjects from './components/OtherProjects';
import CreativeExperience from './components/CreativeExperience';
import Leadership from './components/Leadership';
import Achievements from './components/Achievements';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { Project, Leadership as LeadershipType, Achievement, CreativeExperience as CreativeExperienceType } from './types';

type ModalContentType = Project | LeadershipType | Achievement | CreativeExperienceType | { name: string; imageUrl: string; description?: string };

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
    }
    return 'light';
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContentType | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleOpenModal = (content: ModalContentType) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing content to allow for closing animation
    setTimeout(() => setModalContent(null), 300);
  };

  return (
    <div className="bg-white dark:bg-dark-bg">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects onCardClick={handleOpenModal} />
        <OtherProjects onCardClick={handleOpenModal} />
        <CreativeExperience onCardClick={handleOpenModal} />
        <Leadership onCardClick={handleOpenModal} />
        <Achievements onCardClick={handleOpenModal} />
        <Statistics />
        <Contact />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalContent && (
          <div>
            <img src={modalContent.imageUrl} alt={'title' in modalContent ? modalContent.title : 'name' in modalContent ? modalContent.name : ''} className="w-full aspect-video object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
              {'title' in modalContent ? modalContent.title : 'role' in modalContent ? modalContent.role : 'name' in modalContent ? modalContent.name : ''}
            </h2>
            
            {'techStack' in modalContent && modalContent.techStack && (
              <div className="flex flex-wrap gap-2 mb-4">
                {modalContent.techStack.map(tech => <span key={tech} className="bg-slate-200 dark:bg-slate-700 text-sm px-2 py-1 rounded-full">{tech}</span>)}
              </div>
            )}

            <p className="text-slate-600 dark:text-dark-subtext mb-4">
              {'fullDescription' in modalContent && modalContent.fullDescription ? modalContent.fullDescription : modalContent.description}
            </p>
            
            {('liveUrl' in modalContent || 'repoUrl' in modalContent) && (
              <div className="flex flex-wrap gap-4 mt-6">
                {'liveUrl' in modalContent && modalContent.liveUrl && (
                  <a href={modalContent.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900 font-semibold rounded-lg transition-colors hover:bg-slate-700 dark:hover:bg-slate-400">
                    Live Site
                  </a>
                )}
                {'repoUrl' in modalContent && modalContent.repoUrl && (
                   <a href={modalContent.repoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-100 dark:bg-dark-card text-slate-800 dark:text-white font-semibold rounded-lg transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                    GitHub Repo
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;