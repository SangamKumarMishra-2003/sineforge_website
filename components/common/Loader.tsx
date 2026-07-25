"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-700 border-t-cyan-400" />

        <h2 className="text-2xl font-bold tracking-wide">
          <span className="text-cyan-400">Sine</span>Forge
        </h2>

        <p className="text-sm text-gray-500">
          Loading...
        </p>
      </div>
    </div>
  );
}