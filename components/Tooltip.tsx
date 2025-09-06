
import React, { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  tip: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, tip }) => {
  return (
    <span className="group relative">
      <span className="underline decoration-dotted decoration-brand-light dark:decoration-brand-light cursor-help">
        {children}
      </span>
      <span className="invisible group-hover:visible group-focus:visible opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 bg-base-content dark:bg-dark-base-content text-base-100 dark:text-dark-base-100 rounded-lg shadow-lg text-sm z-10">
        {tip}
        <svg className="absolute text-base-content dark:text-dark-base-content h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255">
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
        </svg>
      </span>
    </span>
  );
};
