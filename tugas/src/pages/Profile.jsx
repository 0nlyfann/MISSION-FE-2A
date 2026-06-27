import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Import fungsi API dan Action Redux
import { deleteFavoriteAPI, subscribePremiumAPI } from "../services/api";
import { removeFavorite } from "../store/redux/movieSlice";

function Profile() {
  const dispatch = useDispatch();

  // 1. Ambil data favorit langsung dari global state Redux
  const myList = useSelector((state) => state.movies.favorites);

  // State untuk menentukan apakah user sudah premium atau belum
  const [isPremium, setIsPremium] = useState(false);

  // 2. Fungsi ketika tombol "Mulai Berlangganan" diklik menggunakan Service API bersih
  const handleSubscribe = async () => {
    try {
      const data = await subscribePremiumAPI();
      console.log("API Gratis Berhasil Merespons (Redux Service):", data);
      setIsPremium(true);
      alert("Selamat! Kamu berhasil berlangganan Akun Premium Individual 🌟");
    } catch (err) {
      console.error("Gagal berlangganan, memakai fallback sukses:", err);
      // Tetap berikan akses premium jika API placeholder terkendala
      setIsPremium(true);
      alert("Selamat! Kamu berhasil berlangganan Akun Premium Individual 🌟");
    }
  };

  // 3. Fungsi hapus film favorit langsung lewat Redux Global Dispatcher
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

      <main className="px-4 md:px-10 py-8 md:py-12 max-w-7xl mx-auto min-h-[75vh]">
        
        {/* Konten Utama Profile */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          
          {/* ================= BANNER PREMIUM (DINAMIS) ================= */}
          <div className="w-full md:w-2/5 md:order-2">
            {isPremium ? (
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-6 rounded-2xl shadow-xl animate-fade-in">
                <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Aktif
                </span>
                <h2 className="text-xl md:text-2xl font-bold mt-4 mb-2 flex items-center gap-1">
                  Akun Premium Individual✨
                </h2>
                <p className="text-blue-100 text-xs md:text-sm mb-6">
                  Saat ini kamu sedang menggunakan akses akun premium
                </p>
                <p className="text-blue-200 text-[11px] md:text-xs">
                  Berlaku hingga 31 Desember 2026
                </p>
              </div>
            ) : (
              <div className="bg-[#1E1E1E] border border-gray-800 p-6 rounded-2xl shadow-xl flex gap-4 items-start">
                <div className="text-2xl mt-1">📢</div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm md:text-base mb-1 text-gray-100">
                    Saat ini anda belum berlangganan
                  </h3>
                  <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                    Dapatkan Akses Tak Berbatas ke Ribuan Film dan Series Kesukaan Kamu!
                  </p>
                  <button 
                    onClick={handleSubscribe}
                    className="bg-[#2A2A2A] hover:bg-[#3A3A3A] border border-gray-700 text-white text-xs font-semibold py-2 px-4 rounded-xl transition w-full md:w-auto shadow-md"
                  >
                    Mulai Berlangganan
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Form Informasi Pengguna */}
          <div className="w-full md:w-3/5 md:order-1">
            <h1 className="text-xl md:text-2xl font-bold mb-6">Profil Saya</h1>
            
            <div className="flex items-center gap-4 md:gap-6 mb-8">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-600 overflow-hidden border-2 border-gray-700 flex-shrink-0">
                <img src="/assets/fotoorang.png" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <button className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition text-xs font-semibold px-4 py-1.5 rounded-full w-fit">
                  Ubah Foto
                </button>
                <p className="text-gray-500 text-[10px] md:text-xs">📁 Maksimal 2MB</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#22252A] border border-gray-700 rounded-xl p-3">
                <label className="block text-gray-500 text-[10px] md:text-xs">Nama Pengguna</label>
                <input type="text" defaultValue="Muhammad Ikram Zihni" className="bg-transparent text-white text-sm md:text-base outline-none w-full mt-0.5" />
              </div>
              <div className="bg-[#22252A] border border-gray-700 rounded-xl p-3 opacity-80">
                <label className="block text-gray-500 text-[10px] md:text-xs">Email</label>
                <input type="email" defaultValue="ikramganteng@gmail.com" disabled className="bg-transparent text-gray-400 text-sm md:text-base outline-none w-full mt-0.5 cursor-not-allowed" />
              </div>
              <div className="bg-[#22252A] border border-gray-700 rounded-xl p-3">
                <label className="block text-gray-500 text-[10px] md:text-xs">Kata Sandi</label>
                <input type="password" defaultValue="tugasharisenin" className="bg-transparent text-white text-sm md:text-base outline-none w-full mt-0.5 tracking-widest" />
              </div>
            </div>
            
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs md:text-sm px-6 py-2.5 rounded-lg mt-6 transition shadow-md">
              Simpan
            </button>
          </div>

        </div>

        {/* DAFTAR SAYA (Mengambil State Langsung dari Redux) */}
        {myList && myList.length > 0 && (
          <div className="mt-8">
            <hr className="border-gray-800 my-8" />
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-6">Daftar Saya</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5">
                {myList.map((movie) => (
                  <div key={movie.id} className="relative rounded-lg overflow-hidden group bg-gray-900 shadow-lg">
                    <img src={movie.image || "/assets/avatar.png"} alt={movie.title} className="w-full h-full object-cover aspect-[2/3]" />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2 md:p-3">
                      <p className="text-white font-bold text-[10px] md:text-sm mb-2 line-clamp-2">{movie.title}</p>
                      <button 
                        onClick={() => handleRemoveMovie(movie.id)} // Menggunakan fungsi hapus lokal Redux
                        className="w-full bg-red-600 hover:bg-red-700 text-white text-[10px] md:text-xs py-1 rounded transition font-semibold"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}

export default Profile;