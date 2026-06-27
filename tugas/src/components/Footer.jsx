function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 py-8 px-4 md:px-10">
      
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
        
        <div>
          <h1 className="text-white text-xl md:text-2xl font-bold">
            CHILL
          </h1>
          <p className="text-gray-500 text-xs md:text-sm mt-1">
            @2023 Chill All Rights Reserved.
          </p>
        </div>

        
        <div className="text-gray-400 text-sm flex flex-wrap gap-x-4 gap-y-2 md:gap-6">
          <a href="#" className="hover:text-white transition">FAQ</a>
          <a href="#" className="hover:text-white transition">Kontak Kami</a>
          <a href="#" className="hover:text-white transition">Privasi</a>
          <a href="#" className="hover:text-white transition">Syarat & Ketentuan</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;