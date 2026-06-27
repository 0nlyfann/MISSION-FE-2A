import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    // Mengarahkan ke halaman beranda film Chill setelah klik masuk
    navigate("/home");
  };

  return (
    <div className="min-h-screen h-screen flex items-center justify-center px-4 py-6 bg-cover bg-center overflow-y-auto"
    style={{ backgroundImage: "url('/assets/backgroundBiru.jpg')" }} >

      <div className="w-full max-w-md my-auto">
        <AuthCard>

          {/* Logo CHILL */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white tracking-wider flex items-center gap-2">
              <img 
                src="/assets/movie-open.png" 
                alt="Logo" 
                className="w-8 h-8 object-contain" 
              />
              CHILL
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl text-center text-white font-semibold">
            Masuk
          </h2>

          <p className="text-center text-xs md:text-sm text-gray-400 mb-6 md:mb-8">
            Selamat datang kembali!
          </p>

          <Input
            label="Username"
            type="text"
            placeholder="Masukkan username"
            required
          />

          <Input
            label="Kata Sandi"
            type="password"
            placeholder="Masukkan kata sandi"
            required
          />

          <div className="flex justify-between text-xs md:text-sm text-gray-400 mb-6">
            <span>
              Belum punya akun?{" "}
              <Link to="/register" className="text-white font-medium hover:underline transition">
                Daftar
              </Link>
            </span>
            <span className="cursor-pointer hover:text-white transition">Lupa kata sandi?</span>
          </div>

          {/* Tombol Masuk */}
          <Button text="Masuk" onClick={handleLogin} />
          
          <div className="flex items-center my-4 text-xs text-gray-500">
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
            Masuk dengan Google
          </button>

        </AuthCard>
      </div>

    </div>
  );
}

export default Login;