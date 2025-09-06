import React from 'react';

export const PredictiveCodingDiagram = () => (
  <figure className="w-full my-4 text-center">
    <svg viewBox="0 0 380 200" className="mx-auto max-w-[300px]" aria-labelledby="pred-coding-title" role="img">
      <title id="pred-coding-title">Predictive Coding Hierarchy Diagram</title>
      <desc>A three-level hierarchy showing top-down predictions and bottom-up prediction errors, with a dial for precision/attention set to high.</desc>
      
      {/* Precision Dial */}
      <g transform="translate(320, 100)">
        <text x="0" y="-55" textAnchor="middle" className="text-[10px] font-semibold fill-base-content dark:fill-dark-base-content">Precision</text>
        
        {/* Dial background with arc */}
        <circle cx="0" cy="0" r="40" strokeDasharray="2 3" className="fill-none stroke-gray-300 dark:stroke-gray-600" strokeWidth="2" />
        <path d="M -28.28 28.28 A 40 40 0 1 1 28.28 -28.28" fill="none" strokeWidth="4" className="stroke-brand dark:stroke-brand-light" />
        
        {/* Pointer, set to high */}
        <g transform="rotate(-45)">
           <path d="M 0 -5 L 0 -38" strokeWidth="4" className="stroke-gray-700 dark:stroke-gray-300" strokeLinecap="round" />
        </g>
        <circle cx="0" cy="0" r="6" className="fill-gray-700 dark:fill-gray-300" />

        {/* Labels */}
        <text x="-35" y="25" className="text-[8px] fill-base-content-secondary dark:fill-dark-base-content-secondary">Low</text>
        <text x="30" y="-20" className="text-[8px] fill-base-content-secondary dark:fill-dark-base-content-secondary">High</text>

        {/* Attention arrow */}
        <path d="M 20 55 C 10 65, -10 65, -20 55" fill="none" className="stroke-gray-500 dark:stroke-gray-400" strokeWidth="1.5" markerEnd="url(#arrowhead-gray)" />
        <text x="0" y="75" textAnchor="middle" className="text-[10px] font-semibold fill-base-content dark:fill-dark-base-content">Attention</text>
      </g>
      
      {/* Hierarchy Levels */}
      <g id="level3">
        <rect x="50" y="20" width="220" height="30" rx="5" className="fill-blue-100 dark:fill-blue-900 stroke-blue-500 dark:stroke-blue-400" />
        <text x="160" y="40" textAnchor="middle" className="text-sm font-bold fill-base-content dark:fill-dark-base-content">High-Level Intentions</text>
      </g>
      <g id="level2">
        <rect x="50" y="85" width="220" height="30" rx="5" className="fill-green-100 dark:fill-green-900 stroke-green-500 dark:stroke-green-400" />
        <text x="160" y="105" textAnchor="middle" className="text-sm font-bold fill-base-content dark:fill-dark-base-content">Intermediate Predictions (Priors)</text>
      </g>
      <g id="level1">
        <rect x="50" y="150" width="220" height="30" rx="5" className="fill-purple-100 dark:fill-purple-900 stroke-purple-500 dark:stroke-purple-400" />
        <text x="160" y="170" textAnchor="middle" className="text-sm font-bold fill-base-content dark:fill-dark-base-content">Sensory / Motor Input</text>
      </g>
      
      {/* Arrows */}
      <g className="stroke-current text-gray-700 dark:text-gray-300">
        <path d="M 120 50 v 25" strokeWidth="2" markerEnd="url(#arrowhead-down)" />
        <text x="90" y="70" className="text-[10px] fill-current">Predictions</text>
        <path d="M 120 115 v 25" strokeWidth="2" markerEnd="url(#arrowhead-down)" />
      </g>
      
      <g className="stroke-current text-red-500 dark:text-red-400">
        <path d="M 200 150 v -25" strokeWidth="2.5" markerEnd="url(#arrowhead-up-red)" strokeDasharray="3 2"/>
        <text x="205" y="135" className="text-[10px] fill-current">Prediction Errors</text>
        <path d="M 200 85 v -25" strokeWidth="2.5" markerEnd="url(#arrowhead-up-red)" strokeDasharray="3 2"/>
      </g>

      <defs>
        <marker id="arrowhead-down" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" className="fill-current text-gray-700 dark:text-gray-300" />
        </marker>
        <marker id="arrowhead-up-red" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 7, 10 3.5, 0 0" className="fill-current text-red-500 dark:text-red-400" />
        </marker>
         <marker id="arrowhead-gray" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" className="fill-current text-gray-500 dark:text-gray-400" />
        </marker>
      </defs>
    </svg>
    <figcaption className="text-xs text-base-content-secondary dark:text-dark-base-content-secondary mt-1">Redrawn schematic for educational use; source: Edwards et al. (2012).</figcaption>
  </figure>
);

export const MotorFailureDiagram = () => (
    <figure className="w-full my-4 text-center">
        <svg viewBox="0 0 300 120" className="mx-auto max-w-[280px]" aria-labelledby="motor-fail-title" role="img">
            <title id="motor-fail-title">Motor Failures of Inference Diagram</title>
            <desc>A flow diagram showing how an abnormal high-precision prior leads to a perceived symptom via motor pathways, with a separate box for misattribution of agency.</desc>
            
            <g id="prior">
                <rect x="10" y="50" width="100" height="50" rx="5" className="fill-red-100 dark:fill-red-900 stroke-red-500 dark:stroke-red-400 stroke-2" />
                <text x="60" y="70" textAnchor="middle" className="text-[10px] font-bold fill-base-content dark:fill-dark-base-content">Abnormal High-</text>
                <text x="60" y="82" textAnchor="middle" className="text-[10px] font-bold fill-base-content dark:fill-dark-base-content">Precision Prior</text>
            </g>

            <g id="pathways">
                <rect x="130" y="50" width="70" height="50" rx="5" className="fill-gray-100 dark:fill-gray-700 stroke-gray-400" />
                <text x="165" y="75" textAnchor="middle" className="text-[10px] fill-base-content dark:fill-dark-base-content">Motor Reflex</text>
                 <text x="165" y="87" textAnchor="middle" className="text-[10px] fill-base-content dark:fill-dark-base-content">Pathways</text>
            </g>

            <g id="symptom">
                <rect x="220" y="50" width="70" height="50" rx="5" className="fill-orange-100 dark:fill-orange-800 stroke-orange-500" />
                <text x="255" y="75" textAnchor="middle" className="text-[10px] font-bold fill-base-content dark:fill-dark-base-content">Perceived</text>
                <text x="255" y="87" textAnchor="middle" className="text-[10px] font-bold fill-base-content dark:fill-dark-base-content">Symptom</text>
            </g>

            <g id="misattribution">
                <rect x="110" y="0" width="100" height="30" rx="5" className="fill-purple-100 dark:fill-purple-900 stroke-purple-500" />
                <text x="160" y="18" textAnchor="middle" className="text-[10px] font-semibold fill-base-content dark:fill-dark-base-content">Misattribution of Agency</text>
                <path d="M 180 30 v 20" className="stroke-purple-500" strokeWidth="1.5" markerEnd="url(#arrowhead-purple)" />
            </g>

            {/* Arrows */}
            <path d="M 110 75 h 20" className="stroke-gray-700 dark:stroke-gray-300" strokeWidth="1.5" markerEnd="url(#arrowhead-gray)" />
            <path d="M 200 75 h 20" className="stroke-gray-700 dark:stroke-gray-300" strokeWidth="1.5" markerEnd="url(#arrowhead-gray)" />

            <defs>
                <marker id="arrowhead-gray" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" className="fill-gray-700 dark:fill-gray-300" />
                </marker>
                 <marker id="arrowhead-purple" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" className="fill-purple-500" />
                </marker>
            </defs>
        </svg>
        <figcaption className="text-xs text-base-content-secondary dark:text-dark-base-content-secondary mt-1">Redrawn schematic for educational use; source: Edwards et al. (2012).</figcaption>
    </figure>
);