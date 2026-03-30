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
            <h2 className="font-heading text-4xl md:text-5xl text-themeTextMain font-bold">
              HRT Shops & Care
            </h2>
            <p className="font-body italic text-themeTextMain/60 text-lg">
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
                ? 'bg-themeAccent text-themeTextMain shadow-sm scale-105' 
                : 'bg-white border border-gray-100 text-themeTextMain/60 hover:bg-themeBg/50'}
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
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-md"
          >
            {/* Background Letter */}
            <span className="absolute -bottom-4 -right-2 text-[8rem] font-heading opacity-[0.03] text-themeTextMain pointer-events-none select-none">
              {source.initial}
            </span>

            {/* Card Header */}
            <div className="flex justify-between items-center">
              <span className="uppercase tracking-widest text-[9px] font-bold text-themeAccent">
                {source.category}
              </span>
              <span className="text-sm">🏵️</span>
            </div>

            {/* Card Body */}
            <h3 className="font-heading font-bold text-xl text-themeTextMain mt-3">
              {source.name}
            </h3>
            <p className="font-body italic text-sm text-themeTextMain/80 mt-2 flex-grow leading-relaxed">
              {source.description}
            </p>

            {/* Card Footer */}
            <div className="flex justify-between items-center mt-6">
              <a 
                href={source.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="uppercase underline text-[10px] font-bold text-themeAccent hover:text-themeTextMain transition-colors"
              >
                VISIT SITE
              </a>
              <button className="uppercase text-[10px] font-bold text-themeAccent hover:opacity-70 transition-opacity">
                REQUEST INFO -&gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
