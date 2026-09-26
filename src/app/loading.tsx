export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3 bg-[#09090b]">
      <div className="w-8 h-8 border-2 border-zinc-800 border-t-white rounded-full animate-spin"></div>
      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest font-mono">Loading...</span>
    </div>
  );
}
