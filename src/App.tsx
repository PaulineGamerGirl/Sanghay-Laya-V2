/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PanicButton, CustomCursor, OrbNavigation, SectionContainer, Myths, AmbientBackground, Safety, Style, Sources, News, Methodology } from './components';
import { usePanicExit } from './hooks';

export default function App() {
  usePanicExit();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-center relative">
      <AmbientBackground />
      <CustomCursor />
      <h1 className="font-heading text-pink text-5xl sm:text-7xl md:text-9xl font-bold tracking-tight drop-shadow-[0_0_15px_rgba(244,194,194,0.6)] z-10 leading-tight md:leading-none">
        Sanghay Laya
      </h1>
      <h2 className="font-accent text-bluish-grey text-2xl sm:text-3xl md:text-4xl mt-4 md:mt-6 z-10 px-4">
        malaya maging ikaw, sa gitna ng lahat
      </h2>
      
      <div className="z-10 w-full flex flex-col items-center">
        {!activeSection ? (
          <OrbNavigation onSelectSection={setActiveSection} />
        ) : (
          <SectionContainer 
            title={activeSection} 
            onClose={() => setActiveSection(null)}
            noPadding={activeSection === 'Myths' || activeSection === 'Safety' || activeSection === 'Style' || activeSection === 'Sources' || activeSection === 'News' || activeSection === 'Methodology'}
          >
            {activeSection === 'Myths' ? (
              <Myths />
            ) : activeSection === 'Safety' ? (
              <Safety />
            ) : activeSection === 'Style' ? (
              <Style />
            ) : activeSection === 'Sources' ? (
              <Sources />
            ) : activeSection === 'News' ? (
              <News />
            ) : activeSection === 'Methodology' ? (
              <Methodology />
            ) : (
              <p className="font-body text-espresso/80 text-lg">
                Content for this section will go here.
              </p>
            )}
          </SectionContainer>
        )}
      </div>
      
      {/* Methodology Footer */}
      <div className="fixed bottom-6 left-6 z-10">
        <button 
          onClick={() => setActiveSection('Methodology')} 
          className="text-[10px] font-bold tracking-widest uppercase text-espresso/40 hover:text-pink transition-colors"
        >
          Methodology & Sources
        </button>
      </div>

      {/* Close Overlay Button (Red Bow) */}
      {activeSection && (
        <div className="fixed bottom-6 right-6 z-50 group flex justify-center">
          <div className="absolute bottom-full mb-3 pointer-events-none whitespace-nowrap bg-white text-pink px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
            Close Page
          </div>
          <button
            onClick={() => setActiveSection(null)}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-pink text-3xl shadow-md transition-all hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-pink/50"
            aria-label="Close Section"
          >
            🎀
          </button>
        </div>
      )}

      <PanicButton />
    </div>
  );
}
