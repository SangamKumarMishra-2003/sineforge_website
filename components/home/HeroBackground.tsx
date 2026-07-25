"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />

      {/* Left Glow */}
      <div className="absolute left-0 top-1/3 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Right Glow */}
      <div className="absolute right-0 bottom-20 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 10%, black 80%)",
        }}
      />

      {/* Decorative Circles */}
      <div className="absolute left-20 top-32 h-4 w-4 rounded-full bg-cyan-400 opacity-70 animate-pulse" />
      <div className="absolute right-32 top-52 h-3 w-3 rounded-full bg-blue-400 opacity-60 animate-ping" />
      <div className="absolute bottom-24 left-1/4 h-2 w-2 rounded-full bg-white opacity-50 animate-pulse" />
      <div className="absolute right-1/4 bottom-40 h-5 w-5 rounded-full border border-cyan-400/50" />
    </div>
  );
}