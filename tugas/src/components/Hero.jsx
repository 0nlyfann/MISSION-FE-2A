import { useState, useRef, useEffect } from "react";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  // useRef tambahan untuk menyimpan memori timer delay-nya
  const timerRef = useRef(null);

  // Efek penanganan play/pause video
  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch((err) => {
          console.log("Autoplay dicegah oleh browser:", err);
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Balik ke detik 0 saat mouse keluar
      }
    }
  }, [isHovered]);

  // Bersihkan timer kalau komponen dibongkar (unmount) agar tidak ada kebocoran memori
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Fungsi ketika kursor mouse MASUK area Hero
  const handleMouseEnter = () => {
    // Buat jeda selama 2000 milidetik (2 detik) sebelum mengubah status hover menjadi true
    timerRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 2000); 
  };

  // Fungsi ketika kursor mouse KELUAR area Hero
  const handleMouseLeave = () => {
    
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsHovered(false);
  };

  return (
    <section 
      className="h-[350px] md:h-[500px] bg-[#1c2330] flex items-end relative overflow-hidden group cursor-pointer" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* 1. LAYER BACKGROUND GAMBAR ASLI */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: "url('/assets/avatar.png')" }}
      ></div>

      {/* 2. LAYER VIDEO HTML5 */}
      <video
        ref={videoRef}
        src="/assets/trailer.mp4" 
        muted 
        loop  
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
      
      {/* 3. GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-black/40 to-transparent z-10"></div>

      {/* 4. KONTEN TEKS & TOMBOL */}
      <div className="p-4 md:p-10 relative z-20 w-full">
        
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-2 md:mb-4">
          Avatar
        </h1>

        <p className="text-gray-300 text-xs md:text-sm max-w-xl mb-4 md:mb-5 line-clamp-3 md:line-clamp-none">
          "Avatar 3" melanjutkan cerita konflik antara manusia dan Na'vi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu Na'vi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi.
        </p>

        <div className="flex justify-between items-center w-full">
          
          <div className="flex gap-2 md:gap-4 text-sm md:text-base">
            <button className="bg-blue-700 px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium hover:bg-blue-800 transition">
              Mulai
            </button>
            <button className="border border-gray-500 px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium hover:bg-white/10 transition">
              Selengkapnya
            </button>
            <button className="border border-gray-500 px-3 py-2 md:px-4 md:py-3 rounded-full text-white">
              18+
            </button>
          </div>

          <button className="border border-gray-500 p-2 md:p-3 rounded-full flex items-center justify-center hover:bg-white/10 transition">
            <img 
              src="/assets/volume.png" 
              alt="Volume Icon" 
              className="w-5 h-5 md:w-6 md:h-6 object-contain"
            />
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;