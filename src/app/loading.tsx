export default function Loading() {
  return (
    <main className="min-h-screen bg-[#020617] p-8">
      <div className="animate-pulse">
        <div className="h-40 rounded-3xl bg-white/5 mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-48 rounded-3xl bg-white/5"
            />
          ))}
        </div>
      </div>
    </main>
  );
}