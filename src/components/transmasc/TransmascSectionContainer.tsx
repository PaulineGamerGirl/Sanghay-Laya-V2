import React, { ReactNode } from 'react';
import { TransmascMyths } from './TransmascMyths';
import { TransmascSafety } from './TransmascSafety';
import { TransmascStyle } from './TransmascStyle';
import { TransmascSources } from './TransmascSources';
import { TransmascNews } from './TransmascNews';

interface TransmascSectionContainerProps {
  activeSection: string;
  setActiveSection: (section: string | null) => void;
  children?: ReactNode;
  noPadding?: boolean;
}

export const TransmascSectionContainer: React.FC<TransmascSectionContainerProps> = ({ 
  activeSection, 
  setActiveSection, 
  children, 
  noPadding = false 
}) => {
  const renderContent = () => {
    if (activeSection === 'Myths') return <TransmascMyths />;
    if (activeSection === 'Safety') return <TransmascSafety />;
    if (activeSection === 'Style') return <TransmascStyle />;
    if (activeSection === 'Sources') return <TransmascSources />;
    if (activeSection === 'News') return <TransmascNews />;
    
    return children || (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="font-body text-[#2F3E46]/80 text-lg">
          {activeSection} content coming soon...
        </p>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#2F3E46]/20 backdrop-blur-md p-4 sm:p-6 transition-opacity duration-300">
      {/* Inner Card - Frosted Glass */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-white/60 backdrop-blur-2xl rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-white/40">
        
        {/* Header */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-6 bg-white/40 backdrop-blur-sm border-b border-[#2F3E46]/10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2F3E46] tracking-tight">
            {activeSection}
          </h2>
          <button
            onClick={() => setActiveSection(null)}
            className="p-2 rounded-full text-[#2F3E46]/60 hover:text-[#52796F] hover:bg-[#52796F]/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#52796F]/50"
            aria-label="Close"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>

        {/* Scrollable Content */}
        <div className={`flex-1 overflow-y-auto text-left ${noPadding ? '' : 'p-6 md:p-10'}`}>
          {renderContent()}
        </div>

        {/* Close Pill Button */}
        <div className="absolute bottom-6 right-6 z-50">
          <button
            onClick={() => setActiveSection(null)}
            className="bg-[#52796F] text-white px-6 py-2 rounded-full shadow-lg font-bold text-[10px] tracking-widest uppercase hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-[#52796F]/30"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
