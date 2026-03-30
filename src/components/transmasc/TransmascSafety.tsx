import React from 'react';
import { transmascSafetyData, TransmascSafetyItem } from '../../data/transmasc/transmascSafety';

interface SafetyCardProps {
  item: TransmascSafetyItem;
}

const SafetyCard: React.FC<SafetyCardProps> = ({ item }) => {
  const getAlertStyles = (level: string) => {
    switch (level) {
      case 'High':
        return 'bg-red-500/10 text-red-700 border-red-200';
      case 'Medium':
        return 'bg-amber-500/10 text-amber-700 border-amber-200';
      case 'Info':
        return 'bg-[#84A59D]/10 text-[#2F3E46]/70 border-[#84A59D]/20';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="bg-[#F4F5F0] rounded-2xl p-6 border border-[#2F3E46]/5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-heading text-xl font-bold text-[#2F3E46] leading-tight flex-1 pr-4">
          {item.topic}
        </h3>
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getAlertStyles(item.alertLevel)}`}>
          {item.alertLevel}
        </span>
      </div>

      <div className="space-y-4 flex-1">
        <div className="bg-white/40 p-4 rounded-xl border border-white/60">
          <p className="font-body text-sm text-[#2F3E46]/80 leading-relaxed italic">
            {item.dangerDescription}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#2F3E46]/5 border border-[#2F3E46]/10">
          <p className="font-body text-sm text-[#2F3E46] leading-relaxed">
            {item.truthSnippet}
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[#2F3E46]/10">
        <a 
          href={item.sourceLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] text-[#52796F] hover:text-[#2F3E46] transition-colors font-bold tracking-widest uppercase flex items-center gap-1"
        >
          Source: {item.sourceName} ↗
        </a>
      </div>
    </div>
  );
};

export const TransmascSafety: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2F3E46] mb-4">
          The Safety Journal
        </h2>
        <p className="font-body italic text-[#52796F] text-lg">
          Evidence-based protocols for transmasculine HRT and health.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {transmascSafetyData.map((item) => (
          <SafetyCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
