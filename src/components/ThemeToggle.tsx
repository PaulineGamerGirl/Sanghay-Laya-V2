import React from 'react';
import { useAppContext } from '../context/AppContext';

export const ThemeToggle: React.FC = () => {
  const { appMode, toggleAppMode } = useAppContext();

  return (
    <button
      onClick={toggleAppMode}
      className="fixed top-6 right-6 z-50 rounded-full px-4 py-2 bg-white/80 backdrop-blur-md shadow-sm border border-gray-200 text-xs font-bold tracking-widest uppercase cursor-pointer hover:shadow-md transition-all"
    >
      {appMode === 'transfem' ? '⚧ Switch to Transmasc' : '🎀 Switch to Transfem'}
    </button>
  );
};
