import React, { useState } from 'react';
import { motion } from 'motion/react';
import { transmascMythsData, TransmascMyth } from '../../data/transmasc/transmascMyths';

interface MythCardProps {
  myth: TransmascMyth;
}

const MythCard: React.FC<MythCardProps> = ({ myth }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-80 w-full perspective-1000 cursor-none"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front side (Myth) */}
        <div className="absolute inset-0 backface-hidden bg-[#F4F5F0] rounded-2xl p-6 shadow-sm border border-[#84A98C]/30 flex flex-col justify-center items-center text-center">
          <span className="text-2xl mb-4">🔮</span>
          <p className="font-body text-[#2F3E46] text-lg font-medium leading-relaxed">
            "{myth.myth}"
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-[#52796F] font-bold">
            Click to reveal truth
          </p>
        </div>

        {/* Back side (Truth) */}
        <div 
          className="absolute inset-0 backface-hidden bg-[#2F3E46] rounded-2xl p-6 shadow-md text-white flex flex-col rotate-y-180"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#84A59D]">
              THE TRUTH
            </span>
            <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-tighter ${
              myth.dangerLevel === 'High' ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 
              myth.dangerLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' : 
              'bg-green-500/20 text-green-300 border border-green-500/30'
            }`}>
              {myth.dangerLevel} Risk
            </span>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
            <p className="font-body text-sm leading-relaxed text-white/90">
              {myth.truthSnippet}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10">
            <a 
              href={myth.sourceLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] text-[#84A59D] hover:text-white transition-colors flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              Source: {myth.sourceName} ↗
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const TransmascMyths: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2F3E46] mb-4">
          Misconceptions & Truths
        </h2>
        <p className="font-body italic text-[#52796F] text-lg">
          Debunking FTM myths with peer-reviewed facts.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {transmascMythsData.map((myth) => (
          <MythCard key={myth.id} myth={myth} />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
      `}} />
    </div>
  );
};
