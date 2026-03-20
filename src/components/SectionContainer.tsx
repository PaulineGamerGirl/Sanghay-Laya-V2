import { ReactNode } from 'react';

interface SectionContainerProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  noPadding?: boolean;
}

export function SectionContainer({ title, onClose, children, noPadding = false }: SectionContainerProps) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-espresso/20 backdrop-blur-md p-4 sm:p-6 transition-opacity duration-300">
      {/* Inner Card */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-cream rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-white/60">
        
        {/* Sticky Header */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-6 bg-cream/95 backdrop-blur-sm border-b border-espresso/10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-espresso tracking-tight">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-espresso/60 hover:text-pink hover:bg-pink/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink/50"
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
          {children}
        </div>
      </div>
    </div>
  );
}
