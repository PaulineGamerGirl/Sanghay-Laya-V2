interface OrbNavigationProps {
  onSelectSection: (section: string) => void;
}

const SECTIONS = ['Myths', 'Safety', 'Style', 'Sources', 'News'];

export function OrbNavigation({ onSelectSection }: OrbNavigationProps) {
  return (
    <div className="mt-12 md:mt-16 flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-10 w-full max-w-7xl px-4 md:px-6 pt-8 pb-12 overflow-x-visible">
      {SECTIONS.map((section, index) => {
        // Trans Flag Color Sequence: Blue, Pink, White, Pink, Blue
        let mainColor = '#ffffff';
        let shadowColor = 'rgba(255, 255, 255, 0.4)';
        let hoverBorderClass = 'group-hover:border-white/20';

        if (index === 0 || index === 4) {
          // Blue
          mainColor = '#B9E2F5';
          shadowColor = 'rgba(185, 226, 245, 0.4)';
          hoverBorderClass = 'group-hover:border-blue/20';
        } else if (index === 1 || index === 3) {
          // Pink
          mainColor = '#F4C2C2';
          shadowColor = 'rgba(244, 194, 194, 0.4)';
          hoverBorderClass = 'group-hover:border-pink/20';
        } else {
          // White (Style)
          mainColor = '#ffffff';
          shadowColor = 'rgba(255, 255, 255, 0.6)';
          hoverBorderClass = 'group-hover:border-white/40';
        }
        
        return (
          <button
            key={section}
            onClick={() => onSelectSection(section)}
            className="animate-orb-float shrink-0 relative flex h-28 w-28 sm:h-36 sm:w-36 md:h-48 md:w-48 items-center justify-center rounded-full transition-all duration-500 hover:scale-110 focus:outline-none group"
            style={{ 
              animationDelay: `${index * 0.3}s`,
              background: `radial-gradient(circle at 30% 30%, #ffffff 0%, ${mainColor} 40%, #ffffff 100%)`,
              boxShadow: `0 0 0 1px #E8C396, inset -8px -8px 20px ${shadowColor}, inset 8px 8px 20px rgba(255, 255, 255, 0.8), 0 10px 20px -5px rgba(59, 47, 47, 0.1)`
            }}
          >
            {/* Glossy Overlay for extra shine */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
            
            <span className="font-accent text-xl sm:text-2xl md:text-3xl text-espresso tracking-wide z-10 group-hover:text-pink transition-colors duration-300">
              {section}
            </span>
            
            {/* Outer Ring Glow */}
            <div className={`absolute -inset-1.5 rounded-full border border-transparent ${hoverBorderClass} group-hover:scale-105 transition-all duration-500 pointer-events-none`}></div>
          </button>
        );
      })}
    </div>
  );
}
