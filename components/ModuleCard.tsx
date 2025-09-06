
import React, { useState } from 'react';
import { ModuleData } from '../types';
import { ChevronDownIcon } from './Icons';

interface ModuleCardProps {
  module: ModuleData;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-base-100 dark:bg-dark-base-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 print-break-inside-avoid print-shadow-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={module.id}
        className="w-full flex items-center justify-between p-4 md:p-6 text-left"
      >
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-brand-light/20 text-brand-dark dark:bg-brand-light/30 dark:text-brand-light rounded-full">
            {module.icon}
          </div>
          <h2 className="text-lg md:text-xl font-bold text-base-content dark:text-dark-base-content">{module.title}</h2>
        </div>
        <ChevronDownIcon className={`w-6 h-6 text-base-content-secondary dark:text-dark-base-content-secondary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div id={module.id} className="px-4 md:px-6 pb-6 animate-slide-down">
          <div className="border-t border-base-200 dark:border-dark-base-300 pt-4">
            
            <div className="bg-brand/10 dark:bg-brand-light/10 border-l-4 border-brand dark:border-brand-light p-4 rounded-r-lg mb-6">
              <p className="font-semibold text-brand-dark dark:text-brand-light">Key Message:</p>
              <p className="mt-1 text-base-content dark:text-dark-base-content">{module.keyMessage}</p>
            </div>
            
            {module.diagram}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-2 text-base-content dark:text-dark-base-content">Content</h3>
                <ul className="space-y-3 text-base-content-secondary dark:text-dark-base-content-secondary">
                  {module.content.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand mr-3 mt-1">▪</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-base-200 dark:bg-dark-base-200 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-base-content dark:text-dark-base-content">Case Application</h3>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Helper:</p>
                  <ul className="space-y-1 text-sm text-base-content-secondary dark:text-dark-base-content-secondary">
                    {module.caseApplication.helper.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-400 dark:text-gray-500 mr-2">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2">Group Discussion:</p>
                  <ul className="space-y-3">
                    {module.caseApplication.discussion.map((disc, index) => (
                      <li key={index} className="text-sm bg-base-100 dark:bg-dark-base-100 p-3 rounded-md">
                        <p className="font-medium text-base-content dark:text-dark-base-content">{disc.question}</p>
                        {disc.subQuestion && <p className="text-xs text-base-content-secondary dark:text-dark-base-content-secondary mt-1">{disc.subQuestion}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};
