import React, { createContext, useState, useContext, ReactNode } from 'react';

type AppMode = 'transfem' | 'transmasc';

interface AppContextType {
  appMode: AppMode;
  toggleAppMode: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appMode, setAppMode] = useState<AppMode>('transfem');

  const toggleAppMode = () => {
    setAppMode((prev) => (prev === 'transfem' ? 'transmasc' : 'transfem'));
  };

  return (
    <AppContext.Provider value={{ appMode, toggleAppMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
