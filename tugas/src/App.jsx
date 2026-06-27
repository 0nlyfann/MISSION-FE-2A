import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // <-- Tambahan untuk Redux

// Import fungsi API dari services
import { getFavoritesAPI, addFavoriteAPI, deleteFavoriteAPI } from "./services/api";

// Import action dari slice Redux
import { setFavorites, addFavorite, removeFavorite } from "./store/redux/movieSlice";

import Home from "./pages/Home";
import MyListPage from "./pages/MyListPage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const dispatch = useDispatch();
  
  // Mengambil data favorites langsung dari global state Redux
  const myList = useSelector((state) => state.movies.favorites);

  // Ambil data favorit dari mockapi.io saat aplikasi pertama kali dimuat
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await getFavoritesAPI();
        dispatch(setFavorites(data)); // Simpan ke Redux
      } catch (error) {
        console.error("Gagal memuat daftar favorit:", error);
      }
    };
    fetchFavorites();
  }, [dispatch]);

  // Fungsi Tambah Film ke Favorit
  const handleAddMovie = async (movie) => {
    // Validasi agar tidak duplikat berdasarkan judul
    if (myList.some((m) => m.title === movie.title)) {
      alert("Film sudah ada di daftar favorit kamu!");
      return;
    }
    try {
      const newFavorite = await addFavoriteAPI(movie);
      dispatch(addFavorite(newFavorite)); // Simpan ke Redux
    } catch (error) {
      console.error("Gagal menambahkan ke favorit:", error);
    }
  };

  // Fungsi Hapus Film dari Favorit
  const handleRemoveMovie = async (favId) => {
    try {
      await deleteFavoriteAPI(favId);
      dispatch(removeFavorite(favId)); // Hapus dari Redux
    } catch (error) {
      console.error("Gagal menghapus dari favorit:", error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Cukup oper handleAddMovie ke Home */}
      <Route path="/home" element={<Home onAdd={handleAddMovie} />} />
      
      {/* Halaman ini sekarang mandiri, tidak perlu oper props lagi */}
      <Route path="/daftar-saya" element={<MyListPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;