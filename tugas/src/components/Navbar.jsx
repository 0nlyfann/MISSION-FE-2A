import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 

function Navbar() {
  const navigate = useNavigate(); // <-- Inisialisasi hook navigasi
  const [isOpen, setIsOpen] = useState(false);
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isGenreMobileOpen, setIsGenreMobileOpen] = useState(false);

  return (
    <nav className="h-16 bg-[#181A1C] flex items-center justify-between px-4 md:px-10 relative z-50">
      
      {/* Logo + Navigasi Menu + Dropdown Genre */}
      <div className="flex gap-4 md:gap-10 items-center">
        {/* Logo CHILL */}
        <Link to="/home" className="flex items-center gap-2 md:gap-3 cursor-pointer">
          <img 
            src="/assets/movie-open.png" 
            alt="Logo Icon" 
            className="w-6 h-6 md:w-8 md:h-8 object-contain" 
          />
          <h1 className="text-white font-bold text-xl md:text-2xl tracking-wider">
            CHILL
          </h1>
        </Link>

        {/* Menu Navigasi Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#" className="text-gray-300 hover:text-white transition font-medium">Series</a>
          <a href="#" className="text-gray-300 hover:text-white transition font-medium">Film</a>
          <Link to="/daftar-saya" className="text-gray-300 hover:text-white transition font-medium">Daftar Saya</Link>
          
          {/* Dropdown Genre Desktop */}
          <div className="relative">
            <button 
              onClick={() => setIsGenreOpen(!isGenreOpen)}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition font-medium focus:outline-none"
            >
              Genre
              <img 
                src="/assets/Vector.png" 
                alt="Arrow" 
                className={`w-3 h-2 transition-transform duration-200 ${isGenreOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Isi Dropdown Genre Desktop */}
            {isGenreOpen && (
              <div className="absolute left-0 mt-3 w-40 bg-[#121821] border border-gray-800 rounded-lg shadow-2xl py-2 overflow-hidden z-50">
                {["Aksi", "Drama", "Anime", "Komedi", "Horor"].map((genre) => (
                  <a key={genre} href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 transition">
                    {genre}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Menu Navigasi Mobile (HP)  */}
        <div className="flex md:hidden gap-4 text-sm items-center">
          <a href="#" className="text-gray-300 font-medium">Series</a>
          <Link to="/daftar-saya" className="text-gray-300 font-medium">Daftar Saya</Link>
          
          <div className="relative">
            <button 
              onClick={() => setIsGenreMobileOpen(!isGenreMobileOpen)} 
              className="flex items-center gap-1 text-gray-300 font-medium"
            >
              Genre
              <img 
                src="/assets/Vector.png" 
                alt="Arrow" 
                className={`w-2 h-1.5 transition-transform duration-200 ${isGenreMobileOpen ? "rotate-180" : ""}`} 
              />
            </button>

            {/* Isi Dropdown Genre Mobile */}
            {isGenreMobileOpen && (
              <div className="absolute left-0 mt-3 w-40 bg-[#121821] border border-gray-800 rounded-lg shadow-2xl py-2 overflow-hidden z-50">
                {["Aksi", "Drama", "Anime", "Komedi", "Horor"].map((genre) => (
                  <a key={genre} href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 transition">
                    {genre}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/*  Dropdown Profil Interaktif */}
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex items-center gap-1 md:gap-2 focus:outline-none group"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-500 overflow-hidden border border-gray-600 group-hover:border-white transition">
            <img 
              src="/assets/fotoorang.png" 
              alt="User Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className={`text-white text-[10px] md:text-xs transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
            <img src="/assets/Vector.png" alt="" />
          </span>
        </button>

        {/* Isi Dropdown Profil */}
        {isOpen && (
          <div className="absolute right-0 mt-3 w-44 bg-[#121821] border border-gray-800 rounded-lg shadow-2xl py-2 overflow-hidden z-50">
            <Link 
              to="/profile" 
              onClick={() => setIsOpen(false)} 
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-blue-400 hover:bg-gray-800/50 transition font-medium"
            >
              <span><img src="/assets/account.png" alt="" /></span> Profil Saya
            </Link>
            
            {/* Navigasi langsung ke halaman profil untuk mengubah premium */}
            <Link 
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-200 hover:bg-gray-800/50 transition font-medium"
            >
              <span><img src="/assets/bintang.png" alt="" /></span> Ubah Premium
            </Link>
            
            <hr className="border-gray-800 my-1" />
            
            {/* Tombol Keluar, balik ke halaman Login ("/") */}
            <button 
              onClick={() => {
                setIsOpen(false);
                navigate("/");
              }} 
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-gray-800/50 transition font-medium text-left focus:outline-none animate-fade-in"
            >
              <span><img src="/assets/logout.png" alt="Logout" /></span> Keluar
            </button>
          </div>
        )}
      </div>
      
    </nav>
  );
}

export default Navbar;