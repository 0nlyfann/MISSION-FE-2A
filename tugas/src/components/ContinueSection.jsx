function ContinueSection({ movies }) {
  if (!movies || movies.length === 0) {
    return <div className="text-gray-500 text-sm px-4">Tidak ada tontonan aktif.</div>;
  }

  return (
    <section className="mb-4">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
        Melanjutkan Tonton Film
      </h2>
      <div 
        className="flex flex-nowrap gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden w-full"
        style={{ scrollbarWidth: 'none' }}
      >
        {movies.map((movie) => (
          <div 
            key={movie.id} 
            className="w-[200px] md:w-[280px] aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-gray-800 relative group"
          >
            <img 
              src={movie.image || "/assets/avatar.png"} 
              className="w-full h-full object-cover" 
              alt={movie.title} 
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <p className="text-white text-xs font-medium">{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContinueSection;