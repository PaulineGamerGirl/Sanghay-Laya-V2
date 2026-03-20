import { newsData } from '../data/news';

export function News() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="mb-10 text-left">
        <h2 className="font-heading text-4xl md:text-5xl text-espresso font-bold mb-2">
          🗞️ The Community Gazette
        </h2>
        <p className="font-body italic text-espresso/80 text-lg">
          Live updates, milestones, and stories from the community.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="mb-8 p-4 rounded-2xl bg-pink/5 border border-pink/10 flex items-start gap-3 max-w-3xl">
        <span className="text-pink text-lg shrink-0">⚠️</span>
        <p className="font-body text-xs md:text-sm text-espresso/70 leading-relaxed">
          <span className="font-bold text-pink">Gentle Warning:</span> Real-time news can sometimes be heavy or distressing. Please prioritize your mental well-being and read with care. Your peace is more important than the headlines.
        </p>
      </div>

      {/* Launchpad Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsData.map((portal) => (
          <a
            key={portal.id}
            href={portal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-[2rem] p-6 border border-accent-pink/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
          >
            <div className="flex justify-between items-start">
              <span className="text-3xl">{portal.emoji}</span>
              <span className="text-espresso/30 group-hover:text-pink transition-colors duration-300">
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
            
            <h3 className="font-heading font-bold text-xl mt-4 text-espresso">
              {portal.title}
            </h3>
            
            <p className="font-body text-sm text-espresso/70 mt-2 flex-grow leading-relaxed">
              {portal.description}
            </p>
            
            <div className="text-[10px] font-bold tracking-widest uppercase mt-4 text-right text-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              READ LIVE -&gt;
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
