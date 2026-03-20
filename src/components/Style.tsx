import { useState } from 'react';
import { Silhouettes } from './Silhouettes';
import { TuckingSafety } from './TuckingSafety';
import { ThriftMap } from './ThriftMap';

type TabType = 'map' | 'silhouettes' | 'safety';

export function Style() {
  const [activeTab, setActiveTab] = useState<TabType>('map');

  const tabs = [
    { id: 'map', icon: '🗺️', label: 'THRIFT MAP' },
    { id: 'silhouettes', icon: '👗', label: 'SILHOUETTES' },
    { id: 'safety', icon: '🔒', label: 'SAFETY' },
  ] as const;

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
        <div className="space-y-2">
          <h2 className="font-heading text-4xl md:text-5xl text-espresso font-bold">
            The Dressing Room
          </h2>
          <p className="font-body italic text-espresso/60 text-lg">
            Expressing your true self through silhouette and style.
          </p>
        </div>

        {/* Floating Tabs */}
        <div className="flex gap-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative bg-cream rounded-xl flex flex-col items-center justify-center p-3 w-24 h-24
                  transition-all duration-300 cursor-pointer select-none
                  ${isActive 
                    ? 'shadow-md scale-105 opacity-100' 
                    : 'shadow-sm opacity-70 hover:opacity-90 hover:scale-102'}
                `}
              >
                {isActive && (
                  <div className="absolute top-2 w-1.5 h-1.5 rounded-full bg-pink animate-pulse" />
                )}
                <span className="text-2xl mb-2">{tab.icon}</span>
                <span className={`text-[10px] tracking-widest font-bold text-espresso text-center ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-pink/40 to-transparent mb-12" />

      {/* Content Wrapper */}
      <div className="min-h-[400px] font-body text-espresso/80 text-center flex items-center justify-center">
        {activeTab === 'map' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ThriftMap />
          </div>
        )}
        {activeTab === 'silhouettes' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Silhouettes />
          </div>
        )}
        {activeTab === 'safety' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <TuckingSafety />
          </div>
        )}
      </div>
    </div>
  );
}
