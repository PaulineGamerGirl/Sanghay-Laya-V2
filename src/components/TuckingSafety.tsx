export function TuckingSafety() {
  const dos = [
    "Medical-grade paper tape only",
    "Specialized gaffs for daily wear",
    "15-minute breaks every 4 hours",
    "Clean skin thoroughly before"
  ];

  const donts = [
    "Never use duct or electrical tape",
    "Exceeding 12 hours of wear",
    "Ignoring sharp stings or numbness",
    "Sleeping while tucked"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 text-left animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <h3 className="font-heading italic text-xl text-espresso font-bold mb-6 flex items-center gap-2">
        <span>🪞</span> Tucking Safety and Comfort Advice
      </h3>

      {/* Health Advisory Banner */}
      <div className="bg-[#FFF5F5] rounded-3xl p-5 flex items-center gap-4 mb-8 border border-red-100 shadow-sm">
        <span className="text-2xl shrink-0">🎗️</span>
        <div className="flex flex-col">
          <span className="text-[10px] text-red-600 font-bold tracking-widest uppercase mb-1">
            HEALTH ADVISORY
          </span>
          <p className="font-body italic text-red-500/90 text-sm md:text-base leading-relaxed">
            Safety is the ultimate expression of self-love. Always choose comfort over compression.
          </p>
        </div>
      </div>

      {/* Dos and Don'ts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-2">
        {/* Column 1: THE DOS */}
        <div>
          <div className="flex items-center mb-6">
            <span className="font-body uppercase tracking-widest font-bold text-espresso text-sm">
              THE DOS
            </span>
            <hr className="flex-grow border-gray-300 ml-4 opacity-50" />
          </div>
          <ul className="space-y-4 mt-6">
            {dos.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-pink shrink-0">✨</span>
                <span className="font-body italic text-espresso/80 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: THE DON'TS */}
        <div>
          <div className="flex items-center mb-6">
            <span className="font-body uppercase tracking-widest font-bold text-espresso text-sm">
              THE DON'TS
            </span>
            <hr className="flex-grow border-gray-300 ml-4 opacity-50" />
          </div>
          <ul className="space-y-4 mt-6">
            {donts.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-alert shrink-0">🥀</span>
                <span className="font-body italic text-espresso/80 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
