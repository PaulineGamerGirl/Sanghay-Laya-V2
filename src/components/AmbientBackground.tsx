export function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-40">
      {/* Scattered Sparkles and Petals */}
      <div className="absolute top-[10%] left-[15%] text-2xl animate-pulse delay-75">✨</div>
      <div className="absolute top-[20%] right-[20%] text-xl animate-bounce duration-[5s]">🌸</div>
      <div className="absolute bottom-[15%] left-[25%] text-lg animate-pulse delay-300">✨</div>
      <div className="absolute bottom-[30%] right-[10%] text-2xl animate-bounce duration-[4s]">🌸</div>
      <div className="absolute top-[40%] left-[5%] text-sm animate-pulse">✨</div>
      <div className="absolute top-[60%] right-[5%] text-lg animate-pulse delay-500">✨</div>
      
      {/* Soft Glowing Dots */}
      <div className="absolute top-[15%] left-[40%] w-2 h-2 bg-pink rounded-full blur-[2px] animate-pulse"></div>
      <div className="absolute top-[70%] left-[10%] w-3 h-3 bg-blue rounded-full blur-[3px] animate-pulse delay-1000"></div>
      <div className="absolute bottom-[20%] right-[30%] w-2 h-2 bg-pink/30 rounded-full blur-[1px] animate-pulse delay-700"></div>
      <div className="absolute top-[50%] right-[40%] w-4 h-4 bg-blue/20 rounded-full blur-[4px] animate-pulse delay-200"></div>
      <div className="absolute top-[30%] left-[60%] w-2 h-2 bg-blue/40 rounded-full blur-[1px] animate-pulse delay-500"></div>
    </div>
  );
}
