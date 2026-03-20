import React, { useRef, useEffect } from 'react';
import { mythsData } from '../data';
import { MythCard } from './MythCard';

export function Myths() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const set1Ref = useRef<HTMLDivElement>(null);
  const speedRef = useRef(0.5);
  const targetSpeedRef = useRef(0.5);
  const rAFRef = useRef<number>();

  useEffect(() => {
    const viewport = viewportRef.current;
    const set1 = set1Ref.current;
    if (!viewport || !set1) return;

    const loop = () => {
      // Lerp speed for perfect kinematics
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.05;
      
      viewport.scrollLeft += speedRef.current;

      const halfWidth = set1.offsetWidth;

      // Seamless loop logic
      if (speedRef.current > 0 && viewport.scrollLeft >= halfWidth) {
        viewport.scrollLeft -= halfWidth;
      } else if (speedRef.current < 0 && viewport.scrollLeft <= 0) {
        viewport.scrollLeft += halfWidth;
      }

      rAFRef.current = requestAnimationFrame(loop);
    };

    rAFRef.current = requestAnimationFrame(loop);
    return () => {
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!viewportRef.current) return;
    const { left, width } = viewportRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const normalized = x / width;

    if (normalized < 0.1) targetSpeedRef.current = -6;
    else if (normalized > 0.9) targetSpeedRef.current = 6;
    else if (normalized < 0.25) targetSpeedRef.current = -2;
    else if (normalized > 0.75) targetSpeedRef.current = 2;
    else targetSpeedRef.current = 0.5; // Default slow drift
  };

  const handleMouseLeave = () => {
    targetSpeedRef.current = 0.5;
  };

  return (
    <div className="relative w-full h-full min-h-[500px] flex flex-col justify-center bg-cream">
      <div 
        ref={viewportRef}
        className="w-full overflow-x-hidden flex items-center py-12 cursor-grab active:cursor-grabbing"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex w-max px-8">
          <div ref={set1Ref} className="flex gap-8 pr-8">
            {mythsData.map((myth, idx) => (
              <MythCard key={`set1-${idx}`} myth={myth} />
            ))}
          </div>
          <div className="flex gap-8 pr-8">
            {mythsData.map((myth, idx) => (
              <MythCard key={`set2-${idx}`} myth={myth} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-2 pb-6 text-espresso/50 font-body text-sm tracking-wide">
        Move mouse to edges to scroll faster • Click cards to reveal
      </div>
    </div>
  );
}
