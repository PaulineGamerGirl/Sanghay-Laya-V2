import React from 'react';
import { bindingSafetyData } from '../../data/transmasc/transmascStyle';

export const TransmascBindingSafety: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="grid grid-cols-1 gap-6">
        {bindingSafetyData.map((item) => (
          <div 
            key={item.id} 
            className={`p-6 rounded-2xl border-l-4 shadow-sm bg-white/50 ${
              item.type === 'DO' 
                ? 'border-[#84A98C] bg-[#84A98C]/5' 
                : 'border-red-400 bg-red-50'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                item.type === 'DO' 
                  ? 'bg-[#84A98C] text-white' 
                  : 'bg-red-500 text-white'
              }`}>
                {item.type}
              </span>
              <h3 className="font-heading text-xl font-bold text-[#2F3E46]">
                {item.title}
              </h3>
            </div>
            <p className="font-body text-[#2F3E46]/80 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-8 rounded-3xl bg-[#2F3E46] text-white text-center">
        <h4 className="font-heading text-2xl mb-4">Listen to your body.</h4>
        <p className="font-body text-white/80 max-w-2xl mx-auto">
          If you experience sharp pain, bruising, or significant difficulty breathing, stop binding immediately and consult a healthcare professional.
        </p>
      </div>
    </div>
  );
};
