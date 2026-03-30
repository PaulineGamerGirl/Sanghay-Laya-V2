import React from 'react';

interface TransmascOrbNavigationProps {
  setActiveSection: (section: string) => void;
}

const SECTIONS = ['Myths', 'Safety', 'Style', 'Sources', 'News'];

export const TransmascOrbNavigation: React.FC<TransmascOrbNavigationProps> = ({ setActiveSection }) => {
  return (
    <div className="mt-12 md:mt-16 flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-10 w-full max-w-7xl px-4 md:px-6 pt-8 pb-12 overflow-x-visible">
      {SECTIONS.map((section, index) => {
        // Transmasc Color Palette: Icy Blue, Sage, Ash, Slate, White
        let mainColor = '#ffffff';
        let shadowColor = 'rgba(47, 62, 70, 0.2)';
        let hoverBorderClass = 'group-hover:border-[#52796F]/20';

        if (index === 0) {
          // Icy Blue
          mainColor = '#D8E2DC';
          shadowColor = 'rgba(216, 226, 220, 0.4)';
          hoverBorderClass = 'group-hover:border-[#84A59D]/20';
        } else if (index === 1) {
          // Soft Sage
          mainColor = '#CAD2C5';
          shadowColor = 'rgba(202, 210, 197, 0.4)';
          hoverBorderClass = 'group-hover:border-[#52796F]/20';
        } else if (index === 2) {
          // Ash
          mainColor = '#E5E5E5';
          shadowColor = 'rgba(229, 229, 229, 0.6)';
          hoverBorderClass = 'group-hover:border-slate-300/40';
        } else if (index === 3) {
          // Slate
          mainColor = '#84A59D';
          shadowColor = 'rgba(132, 165, 157, 0.4)';
          hoverBorderClass = 'group-hover:border-[#2F3E46]/20';
        } else {
          // White
          mainColor = '#ffffff';
          shadowColor = 'rgba(255, 255, 255, 0.6)';
          hoverBorderClass = 'group-hover:border-white/40';
        }
        
        return (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className="animate-orb-float shrink-0 relative flex h-28 w-28 sm:h-36 sm:w-36 md:h-48 md:w-48 items-center justify-center rounded-full transition-all duration-500 hover:scale-110 focus:outline-none group"
            style={{ 
              animationDelay: `${index * 0.3}s`,
              background: `radial-gradient(circle at 30% 30%, #ffffff 0%, ${mainColor} 40%, #ffffff 100%)`,
              boxShadow: `0 0 0 1px rgba(47, 62, 70, 0.1), inset -8px -8px 20px ${shadowColor}, inset 8px 8px 20px rgba(255, 255, 255, 0.8), 0 10px 20px -5px rgba(47, 62, 70, 0.1)`
            }}
          >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
            
            <span className="font-heading italic text-xl sm:text-2xl md:text-3xl text-[#2F3E46] tracking-wide z-10 group-hover:text-[#52796F] transition-colors duration-300">
              {section}
            </span>
            
            {/* Outer Ring Glow */}
            <div className={`absolute -inset-1.5 rounded-full border border-transparent ${hoverBorderClass} group-hover:scale-105 transition-all duration-500 pointer-events-none`}></div>
          </button>
        );
      })}
    </div>
  );
};
