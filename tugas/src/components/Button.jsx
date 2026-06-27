
function Button({ text, onClick }) {
  return (
    <button 
      onClick={onClick} 
      className="w-full bg-[#2F3337] hover:bg-[#3f4449] text-white py-3 rounded-full text-sm font-medium transition"
    >
      {text}
    </button>
  );
}

export default Button;