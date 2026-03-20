import { useState } from 'react';
import { Myth } from '../data';

interface MythCardProps {
  myth: Myth;
  key?: string | number;
}

export function MythCard({ myth }: MythCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  let dangerColor = 'border-gray-300 shadow-gray-300/20';
  let pulse = false;
  
  if (myth.dangerLevel === 'high') {
    dangerColor = 'border-alert shadow-alert/30';
    pulse = true;
  } else if (myth.dangerLevel === 'medium') {
    dangerColor = 'border-pink shadow-pink/30';
  } else if (myth.dangerLevel === 'low') {
    dangerColor = 'border-emerald-400 shadow-emerald-400/30';
  }

  return (
    <div 
      className="group h-[400px] w-[300px] md:h-[450px] md:w-[340px] shrink-0 [perspective:1000px] cursor-pointer select-none"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden bg-white/60 backdrop-blur-md border border-pink/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg shadow-espresso/5 hover:shadow-xl hover:border-pink/40 transition-all">
          <span className="font-accent text-pink text-3xl mb-6 tracking-wide">The Misconception</span>
          <h3 className="font-heading text-2xl md:text-3xl text-espresso leading-snug">
            "{myth.title}"
          </h3>
          <div className="absolute bottom-8 opacity-40">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          </div>
        </div>

        {/* Back Face */}
        <div className={`absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-cream border-2 ${dangerColor} rounded-3xl p-8 flex flex-col shadow-xl overflow-hidden`}>
          <div className="flex flex-col items-center mb-6 shrink-0 relative">
            <span className="font-accent text-pink text-3xl tracking-wide">The Reality</span>
            {pulse && (
              <span className="absolute top-2 right-0 w-3 h-3 rounded-full bg-alert animate-pulse"></span>
            )}
          </div>
          <div className="flex-1 overflow-y-auto pr-2 text-center flex items-center">
            <p className="font-body text-espresso/90 text-base md:text-lg leading-relaxed">
              {myth.description}
            </p>
          </div>
          <div className="mt-6 shrink-0 text-center">
            <span className={`text-xs font-bold uppercase tracking-widest opacity-80 ${myth.dangerLevel === 'high' ? 'text-alert' : 'text-espresso'}`}>
              {myth.dangerLevel} Danger
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
