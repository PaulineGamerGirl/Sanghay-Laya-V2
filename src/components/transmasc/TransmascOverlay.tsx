import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAppContext } from '../../context/AppContext';
import { TransmascOrbNavigation } from './TransmascOrbNavigation';
import { TransmascSectionContainer } from './TransmascSectionContainer';

export const TransmascOverlay: React.FC = () => {
  const { appMode } = useAppContext();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {appMode === 'transmasc' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[40] bg-[#F4F5F0] flex flex-col items-center justify-center p-6 text-center overflow-hidden"
        >
          <div className="z-10 w-full flex flex-col items-center">
            <h1 className="font-heading text-[#52796F] text-5xl sm:text-7xl md:text-9xl font-bold tracking-tight drop-shadow-[0_0_15px_rgba(82,121,111,0.2)] z-10 leading-tight md:leading-none">
              Sanghay Laya
            </h1>
            <h2 className="font-accent text-[#2F3E46]/60 text-2xl sm:text-3xl md:text-4xl mt-4 md:mt-6 z-10 px-4">
              malayang maging ikaw, sa gitna ng lahat
            </h2>
            
            <div className="z-10 w-full flex flex-col items-center">
              <TransmascOrbNavigation setActiveSection={setActiveSection} />
            </div>
          </div>

          {activeSection && (
            <TransmascSectionContainer 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />
          )}
          
          {/* Subtle background elements for the transmasc mode */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#84A59D]/10 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#52796F]/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
