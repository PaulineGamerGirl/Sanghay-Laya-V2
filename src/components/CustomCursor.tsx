import { useState, useEffect } from 'react';
import { useMousePosition } from '../hooks';

interface Swan {
  id: number;
  x: number;
  y: number;
}

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const [swans, setSwans] = useState<Swan[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSwan = { id: Date.now(), x: e.clientX, y: e.clientY };
      setSwans((prev) => [...prev, newSwan]);

      // Remove swan after 1 second
      setTimeout(() => {
        setSwans((prev) => prev.filter((swan) => swan.id !== newSwan.id));
      }, 1000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {/* The trailing wand cursor */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[100] text-3xl transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(calc(${x}px - 10px), calc(${y}px - 10px), 0)`,
        }}
      >
        🪄
      </div>

      {/* The click-burst swans */}
      {swans.map((swan) => (
        <div
          key={swan.id}
          className="pointer-events-none fixed top-0 left-0 z-[90] text-3xl animate-swan-float"
          style={{
            left: swan.x,
            top: swan.y,
          }}
        >
          🦢
        </div>
      ))}
    </>
  );
}
