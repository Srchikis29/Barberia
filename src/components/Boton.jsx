function Button({ text, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center 
  bg-[#8ecff5] px-3 py-2 font-medium text-[#1a5a8a] 
  text-base 
  shadow-[0_6px_16px_rgba(62,123,180,0.45)]
  transition-all duration-300 ease-out 
  hover:bg-[#7dc4f0] hover:-translate-y-0.5 
  hover:shadow-[0_10px_22px_rgba(62,123,180,0.55)]
  focus-visible:outline-none focus-visible:ring-2 
  focus-visible:ring-[#a7d8ff] ${className}`}
    >
      <span className='absolute inset-0 rounded-xl bg-white/10 backdrop-blur-sm' />
      <span className='relative'>{text}</span>
    </button>
  );
}

export default Button;
