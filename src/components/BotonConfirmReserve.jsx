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

    if (to) navigate(to);
    if (onClick) onClick();
  };

    return (
        <div className="w-full flex justify-center mt-3 mb-6">
        <button
            type={type}
            onClick={handleClick}
            disabled={disabled}
            className={`relative inline-flex items-center justify-center 
            px-8 py-3 text-lg font-semibold rounded-xl
            text-[#1a5a8a] bg-linear-to-r
            from-[#9bc7f7] via-[#8ecff5] to-[#a4d8ff]
            shadow-lg
            transition-all duration-300 ease-out
            
            hover:scale-105
            hover:shadow-xl
            hover:-translate-y-1
            
            active:scale-95
            
            focus-visible:outline-none 
            focus-visible:ring-2 
            focus-visible:ring-[#a7d8ff]

            disabled:opacity-50 
            disabled:cursor-not-allowed 
            disabled:hover:scale-100
            disabled:hover:translate-y-0
            
            ${className}`}
        >
            {/* efecto glass */}
            <span className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl pointer-events-none" />
            
            {/* texto */}
            <span className="relative tracking-wide">{text}</span>
        </button>
        </div>
    );
}

export default ButtonConfirmar;