function Input({ label, type, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-white mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-3 rounded-full bg-transparent border border-gray-600 text-white outline-none"
      />
    </div>
  );
}

export default Input;