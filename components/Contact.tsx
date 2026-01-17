
import React, { useRef } from 'react';
import { contactInfo } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';

const Contact: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useOnScreen(sectionRef);

    const socialIcons = {
        github: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.72c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/></svg>,
        linkedin: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-7 15v-5h-2v5h2zm-1-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5-1.5v-2h-2v2h2zm0 3v-2h-2v2h2zm0 3v-2h-2v2h2zM7 8v2H5V8h2zm0 3v2H5v-2h2zm0 3v2H5v-2h2z"/></svg>,
        instagram: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
    };

    return (
        <section 
            ref={sectionRef} 
            id="contact" 
            className={`py-20 md:py-28 text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-dark-subtext mb-8">
                Terbuka untuk kolaborasi, diskusi project, dan peluang pengembangan diri. Jangan ragu untuk menghubungi saya!
            </p>
            <a href={`mailto:${contactInfo.email}`} className="inline-block bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-200 font-mono text-lg py-3 px-6 rounded-lg mb-8 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                {contactInfo.email}
            </a>
            <div className="flex justify-center items-center space-x-6">
                {Object.entries(contactInfo.socials).map(([key, href]) => (
                    <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-dark-subtext transition-colors hover:text-slate-900 dark:hover:text-white" aria-label={key}>
                        {socialIcons[key as keyof typeof socialIcons]}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;
