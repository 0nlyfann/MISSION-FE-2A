function MovieCard({ image, movie, onAction, isMyList }) {
  return (
    <div className="w-[110px] md:w-full aspect-[2/3] rounded-lg overflow-hidden flex-shrink-0 bg-gray-700 relative group">
      <img 
        src={image || "/assets/avatar.png"} 
        className="w-full h-full object-cover" 
        alt="Movie Poster" 
      />
      
      {/* Overlay hover interaktif */}
      <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-2 gap-2">
        <p className="text-white text-[10px] md:text-xs font-semibold text-center line-clamp-2">
          {movie?.title || "Judul Film"}
        </p>
        <button
          onClick={() => {
            if (typeof onAction === "function" && movie) {
              if (isMyList) {
                onAction(movie.id);
              } else {
                onAction(movie);
              }
            }
          }}
          className={`px-3 py-1 text-[10px] md:text-xs font-bold rounded-full text-white transition ${
            isMyList ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isMyList ? "Hapus" : "+ Favorit"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;