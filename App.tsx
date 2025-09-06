import React, { useState, useEffect } from 'react';
import { MODULES_DATA, BRIEF_NOTE_DATA, ALL_REFERENCES } from './constants';
import { ModuleCard } from './components/ModuleCard';
import { SunIcon, MoonIcon } from './components/Icons';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen font-sans">
      <header className="bg-base-100 dark:bg-dark-base-100 shadow-sm sticky top-0 z-20 no-print">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-brand-dark dark:text-brand-light">FND Case Conceptualization: An Integrated Approach</h1>
            <p className="text-sm text-base-content-secondary dark:text-dark-base-content-secondary hidden md:block">For Clinical Supervision</p>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-base-content-secondary dark:text-dark-base-content-secondary hover:bg-base-200 dark:hover:bg-dark-base-200 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        <div className="space-y-4 md:space-y-6">
          {MODULES_DATA.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        <section className="mt-8 md:mt-12 bg-base-100 dark:bg-dark-base-100 rounded-xl shadow-md p-6 print-break-inside-avoid print-shadow-none">
          <h2 className="text-2xl font-bold mb-4">Brief Note: FND vs. Feigning/Malingering</h2>
          <p className="text-sm text-base-content-secondary dark:text-dark-base-content-secondary mb-4">Key insight: FND symptoms are <strong>involuntary</strong>; diagnosis uses <strong>positive signs</strong>; motivation, voluntariness, brain activation, and treatment response differ from feigning.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-3 font-semibold bg-base-200 dark:bg-dark-base-200 rounded-tl-lg">Aspect</th>
                  <th className="p-3 font-semibold bg-base-200 dark:bg-dark-base-200">Functional Neurological Disorder (FND)</th>
                  <th className="p-3 font-semibold bg-base-200 dark:bg-dark-base-200 rounded-tr-lg">Feigning / Malingering</th>
                </tr>
              </thead>
              <tbody>
                {BRIEF_NOTE_DATA.map((row, index) => (
                  <tr key={index} className="border-b border-base-200 dark:border-dark-base-300">
                    <td className="p-3 font-medium">{row.aspect}</td>
                    <td className="p-3 text-base-content-secondary dark:text-dark-base-content-secondary">{row.fnd}</td>
                    <td className="p-3 text-base-content-secondary dark:text-dark-base-content-secondary">{row.feigning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 md:mt-12 bg-base-100 dark:bg-dark-base-100 rounded-xl shadow-md p-6 print-break-inside-avoid print-shadow-none">
          <h2 className="text-2xl font-bold mb-4">References</h2>
          <ul className="space-y-2 text-sm">
            {ALL_REFERENCES.map((ref) => (
              <li key={ref.key}>
                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                  {ref.full}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="text-center py-6 text-sm text-base-content-secondary dark:text-dark-base-content-secondary no-print">
        <p>FND Supervision Dashboard | For Educational Use</p>
      </footer>
    </div>
  );
};

export default App;
