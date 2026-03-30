import React from 'react';
import { transmascNewsData } from '../../data/transmasc/transmascNews';

export const TransmascNews: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <header className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2F3E46] mb-4">
          News & Updates
        </h2>
        <p className="font-body italic text-[#52796F] text-lg">
          Live feeds and publications tracking our community.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {transmascNewsData.map((item) => (
          <a 
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-[#F4F5F0] border border-[#84A98C]/30 rounded-2xl p-6 relative hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex justify-between items-start">
              <span className="text-3xl" role="img" aria-label="icon">
                {item.icon}
              </span>
              <span className="text-[#2F3E46]/40 group-hover:text-[#52796F] transition-colors">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </div>

            <h3 className="font-heading text-[#2F3E46] text-xl font-bold mt-6">
              {item.title}
            </h3>
            
            <p className="font-body text-[#52796F] mt-2 text-sm leading-relaxed">
              {item.description}
            </p>
          </a>
        ))}
      </div>
      
      <div className="mt-16 p-8 rounded-3xl bg-[#2F3E46]/5 border border-[#2F3E46]/10 text-center">
        <p className="font-body text-[#2F3E46]/60 text-sm italic">
          These links lead to external news aggregators and publications. Stay informed, stay safe.
        </p>
      </div>
    </div>
  );
};
