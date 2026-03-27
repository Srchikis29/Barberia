import { useNavigate } from "react-router-dom";

function ButtonConfirmar({ 
  text = 'Confirmar Reserva', 
  onClick, 
  to, 
  className = '', 
  disabled = false, 
  type = 'button' 
}) {

  const navigate = useNavigate();

  const handleClick = () => {
    if (disabled) return;

    if (onClick) onClick();
    if (to) navigate(to);
  };

  return (
    <div className="w-full flex justify-center mt-3 mb-6">
      <button
        type={type}
        onClick={handleClick}
        disabled={disabled}
        className={`relative inline-flex items-center justify-center 
          px-8 py-3 text-lg font-semibold rounded-xl
          transition-all duration-300 ease-out
          
          ${disabled 
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "text-[#1a5a8a] bg-linear-to-r from-[#9bc7f7] via-[#8ecff5] to-[#a4d8ff] shadow-lg hover:scale-105 hover:shadow-xl hover:-translate-y-1"
          }

          active:scale-95
          focus-visible:outline-none 
          focus-visible:ring-2 
          focus-visible:ring-[#a7d8ff]
          
          ${className}`}
      >
        <span className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl pointer-events-none" />
        <span className="relative tracking-wide">{text}</span>
      </button>
    </div>
  );
}

export default ButtonConfirmar;