import { useState } from 'react';
import { sourcesData } from '../data/sources';

export function Sources() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', ...Array.from(new Set(sourcesData.map(s => s.category)))];

  const displayedSources = activeFilter === 'ALL' 
    ? sourcesData 
    : sourcesData.filter(s => s.category === activeFilter);

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="relative mb-10">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h2 className="font-heading text-4xl md:text-5xl text-espresso font-bold">
              HRT Shops & Care
            </h2>
            <p className="font-body italic text-espresso/60 text-lg">
              Sister-verified services and legitimate medical providers.
            </p>
          </div>
          <span className="text-2xl">🎀</span>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <span className="text-xl mr-1">✨</span>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`
              rounded-full px-4 py-1 text-[10px] font-bold tracking-widest uppercase transition-all duration-300
              ${activeFilter === category 
                ? 'bg-[#B5E2E4] text-espresso shadow-sm scale-105' 
                : 'bg-white border border-gray-100 text-espresso/60 hover:bg-cream/50'}
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {displayedSources.map((source) => (
          <div 
            key={source.id}
            className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-md hover:border-[#B5E2E4]/30"
          >
            {/* Background Letter */}
            <span className="absolute -bottom-4 -right-2 text-[8rem] font-heading opacity-[0.03] text-espresso pointer-events-none select-none">
              {source.initial}
            </span>

            {/* Card Header */}
            <div className="flex justify-between items-center">
              <span className="uppercase tracking-widest text-[9px] font-bold text-[#B5E2E4]">
                {source.category}
              </span>
              <span className="text-sm">🏵️</span>
            </div>

            {/* Card Body */}
            <h3 className="font-heading font-bold text-xl text-espresso mt-3">
              {source.name}
            </h3>
            <p className="font-body italic text-sm text-espresso/80 mt-2 flex-grow leading-relaxed">
              {source.description}
            </p>

            {/* Card Footer */}
            <div className="flex justify-between items-center mt-6">
              <a 
                href={source.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="uppercase underline text-[10px] font-bold text-[#B5E2E4] hover:text-espresso transition-colors"
              >
                VISIT SITE
              </a>
              <button className="uppercase text-[10px] font-bold text-pink hover:opacity-70 transition-opacity">
                REQUEST INFO -&gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
