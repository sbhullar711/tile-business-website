'use client';

export default function Logo({ variant = 'default' }) {
  if (variant === 'hero') {
    // Large version for hero sections
    return (
      <div className="inline-block">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">BELLE</span>
            <span className="text-blue-400">ROSE</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/90 text-sm md:text-base tracking-widest mt-2">
            <span>TILES</span>
            <span className="text-blue-400">•</span>
            <span>PAVERS</span>
            <span className="text-blue-400">•</span>
            <span>CABINETS</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    // Footer version
    return (
      <div className="inline-block">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            <span className="text-white">BELLE</span>
            <span className="text-blue-400">ROSE</span>
          </h2>
          <p className="text-white/70 text-xs tracking-widest mt-1">
            TILES • PAVERS • CABINETS
          </p>
        </div>
      </div>
    );
  }

  // Default navbar version
  return (
    <div className="inline-block">
      <div className="flex items-center gap-3">
        {/* Icon/Symbol */}
        <div className="hidden sm:flex flex-col items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-md">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
            <div className="w-2 h-2 bg-white/80 rounded-sm"></div>
            <div className="w-2 h-2 bg-white/80 rounded-sm"></div>
            <div className="w-2 h-2 bg-white/60 rounded-sm"></div>
          </div>
        </div>
        
        {/* Text */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight leading-none">
            <span className="text-slate-900">BELLE</span>
            <span className="text-blue-600">ROSE</span>
          </h1>
          <p className="text-[10px] sm:text-xs text-gray-600 tracking-widest hidden sm:block">
            TILES • PAVERS • CABINETS
          </p>
        </div>
      </div>
    </div>
  );
}