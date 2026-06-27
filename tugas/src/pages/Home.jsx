import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContinueSection from "../components/ContinueSection";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";

// Import fungsi API dan action Redux
import { getMoviesAPI } from "../services/api";
import { setMovies } from "../store/redux/movieSlice";

function Home({ onAdd }) {
  const dispatch = useDispatch();
  
  // Mengambil data film global dari Redux Store
  const movies = useSelector((state) => state.movies.list);
  
  // State lokal untuk menghandle loading dan error di level komponen
  const [loading, setLoading] = useState(movies.length === 0); 
  const [error, setError] = useState(null);

  // Ambil data film dari API jika data di Redux masih kosong
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMoviesAPI();
        dispatch(setMovies(data)); // Simpan data ke Redux Store
      } catch (err) {
        setError(err.message || "Terjadi kesalahan saat mengambil data");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [dispatch]);

  // Loading State
  if (loading) {
    return (
      <div className="bg-[#141414] min-h-screen text-white flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-t-red-600 border-gray-700 rounded-full animate-spin mb-4"></div>
        <p className="text-xl font-semibold animate-pulse">Memuat film dari API (Redux)...</p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="bg-[#141414] min-h-screen text-white flex items-center justify-center p-4">
        <p className="text-red-500 font-semibold bg-red-950/30 px-6 py-3 rounded-lg border border-red-800">
          Error: {error}
        </p>
      </div>
    );
  }

  
  const safeMovies = Array.isArray(movies) ? movies : [];

  // Filter kategori film
  const continueMovies = safeMovies.filter(m => m?.category === "continue");
  const popularMovies = safeMovies.filter(m => m?.category === "popular");
  const topRatingMovies = safeMovies.filter(m => m?.category === "top-rating");
  const newReleaseMovies = safeMovies.filter(m => m?.category === "new-release");

  return (
    <div className="bg-[#141414] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Bagian Lanjutkan Tontonan */}
      {continueMovies.length > 0 && (
        <div className="px-4 md:px-10 my-6">
          <ContinueSection movies={continueMovies} />
        </div>
      )}

      {/* Daftar Film Berdasarkan Kategori */}
      <MovieSection 
        title="Film Terpopuler" 
        movies={popularMovies} 
        onAction={onAdd}
        isMyList={false}
      />

      <MovieSection 
        title="Top Rating Film" 
        movies={topRatingMovies} 
        onAction={onAdd}
        isMyList={false}
      />

      <MovieSection 
        title="Rilis Baru" 
        movies={newReleaseMovies} 
        onAction={onAdd}
        isMyList={false}
      />

      <Footer />
    </div>
  );
}

export default Home;