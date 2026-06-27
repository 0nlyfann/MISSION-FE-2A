function AuthCard({ children }) {
  return (
    <div className="w-full max-w-md bg-[#181A1CD6] z-0 p-6 md:p-8 rounded-2xl shadow-xl">
      {children}
    </div>
  );
}

export default AuthCard;