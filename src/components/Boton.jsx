function Button({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#A3CEF1] hover:bg-[#274C77] text-[#274C77] font-regular px-7 py-2 shadow-lg transition-all duration-300 hover:scale-105 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
