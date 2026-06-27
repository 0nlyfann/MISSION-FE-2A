import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";

// Import API dan Action Redux
import { deleteFavoriteAPI } from "../services/api";
import { removeFavorite } from "../store/redux/movieSlice";

function MyListPage() {
  const dispatch = useDispatch();
  
  // Mengambil daftar favorit langsung dari global state Redux
  const myList = useSelector((state) => state.movies.favorites);

  // Fungsi hapus langsung dari dalam komponen
  const handleRemoveMovie = async (favId) => {
    try {
      await deleteFavoriteAPI(favId);
      dispatch(removeFavorite(favId));
    } catch (error) {
      console.error("Gagal menghapus dari favorit:", error);
    }
  };

  return (
    <div className="bg-[#141414] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      
      <main className="px-4 md:px-10 py-8 min-h-[75vh]">
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-6">
          Daftar Saya
        </h1>

        {myList.length === 0 ? (
          <p className="text-gray-500 text-sm md:text-base mt-4">
            Belum ada film yang ditambahkan ke daftar kamu.
          </p>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5">
            {myList.map((movie) => (
              <MovieCard
                key={movie.id}
                image={movie.image}
                movie={movie}
                onAction={handleRemoveMovie} // Jalankan fungsi hapus lokal
                isMyList={true}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default MyListPage;