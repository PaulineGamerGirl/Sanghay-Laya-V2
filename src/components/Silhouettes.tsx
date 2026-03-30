import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { silhouettesData } from '../data/silhouettes';

export function Silhouettes() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto text-left">
      <h3 className="font-heading italic text-xl text-themeTextMain mb-6 flex items-center gap-2">
        <span>🪞</span> Your Unique Silhouette
      </h3>

      <div className="space-y-4">
        {silhouettesData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div 
              key={item.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between p-5 cursor-pointer text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">🎀</span>
                  <span className="font-heading font-bold text-themeTextMain text-lg">
                    {item.title}
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-themeAccent text-sm"
                >
                  🔻
                </motion.span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="p-5 pt-0">
                      <p className="font-body text-themeTextMain/80 leading-relaxed text-base">
                        {item.advice}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
