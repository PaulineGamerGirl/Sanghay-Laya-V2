import React, { useState } from 'react';
import { TransmascSilhouettes } from './TransmascSilhouettes';
import { TransmascBindingSafety } from './TransmascBindingSafety';
import { TransmascThriftMap } from './TransmascThriftMap';

type StyleTab = 'Silhouettes' | 'Binding Safety' | 'Thrift Map';

export const TransmascStyle: React.FC = () => {
  const [activeTab, setActiveTab] = useState<StyleTab>('Silhouettes');

  const tabs: StyleTab[] = ['Silhouettes', 'Binding Safety', 'Thrift Map'];

  return (
    <div className="max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2F3E46] mb-4">
          The Dressing Room
        </h2>
        <p className="font-body italic text-[#52796F] text-lg">
          Curated styling, safe binding, and thrift locations.
        </p>
      </header>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-full font-bold text-[10px] tracking-widest uppercase transition-all duration-300 border ${
              activeTab === tab
                ? 'bg-[#2F3E46] text-white border-[#2F3E46] shadow-lg'
                : 'bg-white/50 text-[#2F3E46]/60 border-[#2F3E46]/10 hover:bg-white hover:text-[#2F3E46]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === 'Silhouettes' && <TransmascSilhouettes />}
        {activeTab === 'Binding Safety' && <TransmascBindingSafety />}
        {activeTab === 'Thrift Map' && (
          <div className="rounded-3xl shadow-xl border border-[#2F3E46]/10 p-4 bg-white/30 backdrop-blur-sm">
            <TransmascThriftMap />
          </div>
        )}
      </div>
    </div>
  );
};
