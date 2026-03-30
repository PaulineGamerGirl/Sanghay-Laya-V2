import React, { useState } from 'react';
import { transmascSourcesData, TransmascSource } from '../../data/transmasc/transmascSources';

export const TransmascSources: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Endocrinology & HRT', 'Voice Training', 'Mental Health', 'General Care'];

  const filteredSources = activeFilter === 'All' 
    ? transmascSourcesData 
    : transmascSourcesData.filter(source => source.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2F3E46] mb-4">
          Verified Sources
        </h2>
        <p className="font-body italic text-[#52796F] text-lg">
          A curated directory of safe, affirming providers and resources.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full font-bold text-[10px] tracking-widest uppercase transition-all duration-300 border ${
              activeFilter === category
                ? 'bg-[#2F3E46] text-white border-[#2F3E46] shadow-md'
                : 'bg-white/50 text-[#2F3E46]/60 border-[#2F3E46]/10 hover:bg-white hover:text-[#2F3E46]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {filteredSources.map((source) => (
          <div 
            key={source.id} 
            className="bg-[#F4F5F0] border border-[#84A98C]/30 p-6 rounded-2xl shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
          >
            <div className="mb-4">
              <span className="bg-[#84A98C]/10 text-[#52796F] text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-full border border-[#84A98C]/20 uppercase">
                {source.category}
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#2F3E46] mt-3">
                {source.name}
              </h3>
            </div>
            
            <p className="font-body text-[#2F3E46]/80 text-sm leading-relaxed flex-1">
              {source.description}
            </p>

            <div className="mt-6 pt-4 border-t border-[#2F3E46]/10">
              <a 
                href={source.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2F3E46] text-white px-6 py-2.5 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-[#52796F] transition-colors"
              >
                VISIT SITE ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
