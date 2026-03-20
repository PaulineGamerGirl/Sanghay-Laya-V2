import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { safetyData } from '../data/safety';

export function Safety() {
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const activeTopic = safetyData.find(t => t.id === activeTopicId);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 min-h-[600px]">
      <AnimatePresence mode="wait">
        {!activeTopicId ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="font-heading text-4xl md:text-6xl text-espresso">
                The Safety Journal
              </h2>
              <p className="font-body text-espresso/60 text-lg max-w-2xl mx-auto">
                A comprehensive, evidence-based protocol for trans health.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyData.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopicId(topic.id)}
                  className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-pink/10 hover:shadow-xl hover:shadow-pink/5 transition-all duration-500 text-center flex flex-col items-center justify-between min-h-[320px] cursor-pointer"
                >
                  <div className="space-y-6">
                    <span className="text-4xl block transform group-hover:scale-110 transition-transform duration-500">
                      {topic.emoji}
                    </span>
                    <div className="space-y-2">
                      <h3 className="font-heading text-xl font-bold uppercase tracking-widest text-espresso">
                        {topic.title}
                      </h3>
                      {topic.isHighAlert && (
                        <span className="inline-block bg-alert/10 text-alert text-[10px] font-bold tracking-tighter px-3 py-1 rounded-full border border-alert/20">
                          HIGH ALERT
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="w-full flex justify-end mt-8">
                    <span className="text-[10px] font-bold tracking-widest text-pink group-hover:translate-x-2 transition-transform duration-300">
                      READ FOLDER -&gt;
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-16 shadow-2xl border border-pink/10 relative overflow-hidden"
          >
            {/* Back Button - Increased hit area and z-index */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveTopicId(null);
              }}
              className="absolute top-4 left-4 md:top-8 md:left-8 z-50 p-4 -m-4 text-[10px] font-bold tracking-widest text-espresso/60 hover:text-pink transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300">&lt;-</span> 
              BACK TO INDEX
            </button>

            <div className="max-w-3xl mx-auto space-y-16 mt-8">
              {/* Header */}
              <div className="text-center space-y-6">
                <span className="text-8xl block">{activeTopic?.emoji}</span>
                <h2 className="font-heading text-4xl md:text-6xl text-espresso tracking-tight">
                  {activeTopic?.title}
                </h2>
              </div>

              {/* Content Sections */}
              <div className="space-y-12">
                <section className="space-y-4">
                  <h4 className="text-[10px] font-bold tracking-[0.3em] text-alert uppercase">
                    THE DANGER
                  </h4>
                  <p className="font-heading italic text-2xl md:text-3xl text-alert/80 leading-relaxed">
                    "{activeTopic?.dangerSnippet}"
                  </p>
                </section>

                <section className="space-y-4">
                  <h4 className="text-[10px] font-bold tracking-[0.3em] text-espresso/40 uppercase">
                    THE TRUTH
                  </h4>
                  <p className="font-body text-lg md:text-xl text-espresso/80 leading-relaxed">
                    {activeTopic?.truthSnippet}
                  </p>
                </section>
              </div>

              {/* Footer / Citations */}
              <div className="pt-16 border-t border-espresso/5 space-y-6">
                <h4 className="text-[10px] font-bold tracking-[0.3em] text-espresso/40 uppercase">
                  EVIDENCE BASE / CITATIONS
                </h4>
                <a
                  href={activeTopic?.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-espresso text-white text-xs font-bold tracking-widest rounded-full hover:bg-pink transition-colors duration-500 group cursor-pointer"
                >
                  {activeTopic?.sourceName}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
