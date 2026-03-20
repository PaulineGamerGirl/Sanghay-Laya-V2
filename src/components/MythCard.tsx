import { useState } from 'react';
import { Myth } from '../data';

interface MythCardProps {
  myth: Myth;
  key?: string | number;
}

export function MythCard({ myth }: MythCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group h-[420px] w-[300px] md:h-[480px] md:w-[340px] shrink-0 [perspective:1000px] cursor-pointer select-none"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden bg-cream border border-pink/20 rounded-3xl flex flex-col shadow-lg shadow-espresso/5 hover:shadow-xl hover:border-pink/40 transition-all overflow-hidden">
          <div className="border border-dashed border-pink/50 rounded-xl m-2 p-6 flex flex-col justify-center items-center relative h-[calc(100%-1rem)]">
            {/* Corner Accents */}
            <span className="absolute top-2 left-2 text-xs opacity-60">✨</span>
            <span className="absolute bottom-2 right-2 text-xs opacity-60">✨</span>
            
            <span className="font-body uppercase tracking-widest text-[10px] text-pink mb-2">The Misconception</span>
            
            <h3 className="font-heading italic font-bold text-espresso text-xl md:text-2xl text-center leading-relaxed mt-4 mb-8 px-2">
              {myth.misconception}
            </h3>
            
            <div className="absolute bottom-6 text-[10px] text-espresso/30 tracking-widest uppercase">
              Click to Reveal 🪄
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-cream border border-pink/20 rounded-3xl flex flex-col shadow-xl overflow-hidden">
          <div className="border border-dashed border-pink/50 rounded-xl m-2 p-6 flex flex-col justify-center items-center relative h-[calc(100%-1rem)]">
            {/* Corner Accents */}
            <span className="absolute top-2 left-2 text-xs opacity-60">✨</span>
            <span className="absolute bottom-2 right-2 text-xs opacity-60">✨</span>
            
            <div className="mb-2">
              {myth.dangerLevel === 'high' ? (
                <span className="font-body uppercase tracking-widest text-[10px] text-alert font-bold">⚠️ Dangerous Myth</span>
              ) : (
                <span className="font-body uppercase tracking-widest text-[10px] text-pink">The Truth</span>
              )}
            </div>
            
            <div className="flex-1 flex items-center justify-center overflow-y-auto w-full px-2">
              <p className="font-body text-espresso text-sm md:text-base text-center leading-relaxed my-4">
                {myth.truthSnippet}
              </p>
            </div>
            
            <div className="mt-4 text-center">
              <a 
                href={myth.sourceLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[9px] text-espresso/40 underline hover:text-pink transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Source: {myth.sourceName}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
