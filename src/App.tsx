/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PanicButton, CustomCursor, OrbNavigation, SectionContainer, Myths, AmbientBackground, Safety } from './components';
import { usePanicExit } from './hooks';

export default function App() {
  usePanicExit();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-center relative">
      <AmbientBackground />
      <CustomCursor />
      <h1 className="font-heading text-pink text-6xl md:text-8xl font-bold tracking-tight drop-shadow-[0_0_15px_rgba(244,194,194,0.6)] z-10">
        Sanghay Laya
      </h1>
      <h2 className="font-accent text-pink text-4xl md:text-5xl mt-4 z-10">
        malaya maging ikaw, sa gitna ng lahat
      </h2>
      
      <div className="z-10 w-full flex flex-col items-center">
        {!activeSection ? (
          <OrbNavigation onSelectSection={setActiveSection} />
        ) : (
          <SectionContainer 
            title={activeSection} 
            onClose={() => setActiveSection(null)}
            noPadding={activeSection === 'Myths' || activeSection === 'Safety'}
          >
            {activeSection === 'Myths' ? (
              <Myths />
            ) : activeSection === 'Safety' ? (
              <Safety />
            ) : (
              <p className="font-body text-espresso/80 text-lg">
                Content for this section will go here.
              </p>
            )}
          </SectionContainer>
        )}
      </div>
      
      <PanicButton />
    </div>
  );
}
