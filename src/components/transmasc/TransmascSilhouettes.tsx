import React from 'react';
import { transmascSilhouettesData } from '../../data/transmasc/transmascStyle';

export const TransmascSilhouettes: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {transmascSilhouettesData.map((item) => (
        <div 
          key={item.id} 
          className="bg-[#F4F5F0] p-6 rounded-2xl border border-[#2F3E46]/5 shadow-sm"
        >
          <h3 className="font-heading text-xl font-bold text-[#2F3E46] mb-3">
            {item.title}
          </h3>
          <p className="font-body text-[#2F3E46]/80 leading-relaxed">
            {item.advice}
          </p>
        </div>
      ))}
    </div>
  );
};
