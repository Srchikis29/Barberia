import { useNavigate } from "react-router-dom";

function Button({ 
  text = 'Agenda tu cita ahora', 
  onClick, 
  to, 
  className = '', 
  disabled = false, 
  type = 'button' 
}) {

  const navigate = useNavigate();

  const handleClick = () => {
    if (disabled) return;

    // 👉 si tiene ruta navega
    if (to) {
      navigate(to);
    }

    // 👉 ejecuta función extra si existe
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`relative inline-flex items-center justify-center 
        px-6 py-3 text-lg font-semibold text-[#1a5a8a] bg-linear-to-r
        from-[#9bc7f7] via-[#8ecff5] to-[#a4d8ff]
        shadow-[0_8px_18px_rgba(62,123,180,0.35)] 
        transition-all duration-300 ease-out hover:scale-[1.01]
        hover:shadow-[0_12px_28px_rgba(62,123,180,0.5)] 
        hover:-translate-y-0.5 focus-visible:outline-none 
        focus-visible:ring-2 focus-visible:ring-[#a7d8ff] 
        disabled:opacity-50 disabled:cursor-not-allowed 
        disabled:hover:translate-y-0 ${className}`}
    >
      <span className='absolute inset-0 bg-white/12 backdrop-blur-sm pointer-events-none' />
      <span className='relative'>{text}</span>
    </button>
  );
}

export default Button;