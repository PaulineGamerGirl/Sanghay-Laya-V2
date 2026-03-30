import React from 'react';
import { useAppContext } from '../context/AppContext';

export const ModeToggle: React.FC = () => {
  const { appMode, toggleAppMode } = useAppContext();

  return (
    <button
      onClick={toggleAppMode}
      className="fixed top-6 right-6 z-[100] bg-white/40 backdrop-blur-md text-espresso px-6 py-3 rounded-full shadow-xl font-bold text-[10px] tracking-widest uppercase hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-pink/30 border border-espresso/10"
    >
      {appMode === 'transfem' ? 'Explore Transmasc' : 'Back to Transfem'}
    </button>
  );
};
