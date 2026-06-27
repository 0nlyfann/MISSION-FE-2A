import { useState } from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import Button from "../components/Button";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div 
      className="min-h-screen h-screen flex items-center justify-center px-4 py-6 bg-cover bg-center relative overflow-y-auto"
      style={{ backgroundImage: "url('/assets/background.jpg')" }} 
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 w-full max-w-md my-auto">
        <AuthCard>
          
          {/* Logo CHILL */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white tracking-wider flex items-center gap-2">
              <img src="/assets/movie-open.png" alt="Logo" className="w-8 h-8 object-contain" />CHILL
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl text-center text-white font-semibold">
            Daftar
          </h2>

          <p className="text-center text-xs md:text-sm text-gray-400 mb-5 md:mb-6">
            Selamat datang!
          </p>

          {/* Input Username */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-1.5 font-medium">Username</label>
            <input 
              type="text" 
              placeholder="Masukkan username"
              className="w-full bg-[#000000]/30 text-white placeholder-gray-500 border border-gray-700/60 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-gray-500 transition"
            />
          </div>

          {/* Input Kata Sandi */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-1.5 font-medium">Kata Sandi</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Masukkan kata sandi"
                className="w-full bg-[#000000]/30 text-white placeholder-gray-500 border border-gray-700/60 rounded-full px-5 py-3 pr-12 text-sm focus:outline-none focus:border-gray-500 transition"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition focus:outline-none flex items-center justify-center"
              >
                <img src={showPassword ? '/assets/eye-off.png' : '/assets/eye-off.png'} alt="toggle-eye" className="w-5 h-5 object-contain" />
              </button>
            </div>
          </div>

          {/* Input Konfirmasi Kata Sandi */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-1.5 font-medium">Konfirmasi Kata Sandi</label>
            <div className="relative">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="Masukkan kata sandi"
                className="w-full bg-[#000000]/30 text-white placeholder-gray-500 border border-gray-700/60 rounded-full px-5 py-3 pr-12 text-sm focus:outline-none focus:border-gray-500 transition"
              />
              <button 
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition focus:outline-none flex items-center justify-center"
              >
                <img src={showConfirmPassword ? '/assets/eye-off.png' : '/assets/eye-off.png'} alt="toggle-eye" className="w-5 h-5 object-contain" />
              </button>
            </div>
          </div>

          {/* Tautan Kembali ke Login Utama */}
          <p className="text-xs md:text-sm text-gray-400 mb-5 md:mb-6">
            Sudah punya akun?{" "}
            <Link to="/" className="text-white font-medium hover:underline">
              Masuk
            </Link>
          </p>

          <div className="mb-3">
            <Button text="Daftar" />
          </div>

          <div className="flex items-center my-3 text-xs text-gray-500">
            <div className="flex-1 border-t border-gray-800"></div>
            <span className="px-3">Atau</span>
            <div className="flex-1 border-t border-gray-800"></div>
          </div>

          {/* Tombol Google */}
          <button className="w-full border border-gray-700 hover:bg-gray-800/40 text-white py-3 rounded-full flex items-center justify-center gap-3 text-sm font-medium transition">
            <img 
              src="/assets/Google.png" 
              alt="Google Icon" 
              className="w-5 h-5 object-contain"
            />
            Daftar dengan Google
          </button>

        </AuthCard>
      </div>
    </div>
  );
}

export default Register;