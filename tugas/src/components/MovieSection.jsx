import MovieCard from "./MovieCard";

function MovieSection({ title, movies, onAction, isMyList }) {
  
  if (!movies || movies.length === 0) {
    return (
      <section className="mb-10 px-4 md:px-10">
        <h2 className="text-white text-xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-500 text-xs">Tidak ada film untuk ditampilkan.</p>
      </section>
    );
  }

  return (
    <section className="mb-10 md:mb-14 px-4 md:px-10">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-4 md:mb-6">
        {title}
      </h2>
      <div 
        className="flex flex-nowrap md:grid md:grid-cols-5 gap-3 md:gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden w-full"
        style={{ scrollbarWidth: 'none' }} 
      >
        {movies.map((movie) => {
          // Validasi ID 
          const safeKey = movie?.id || Math.random();
          return (
            <MovieCard
              key={safeKey}
              image={movie?.image || "/assets/avatar.png"}
              movie={movie}
              onAction={onAction}
              isMyList={isMyList}
            />
          );
        })}
      </div>
    </section>
  );
}

export default MovieSection;