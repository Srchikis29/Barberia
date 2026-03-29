import React from 'react'

export default function BotonAgendar({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="
                bg-[#2f4f75] 
                text-white 
                font-Amarante 
                uppercase 
                tracking-wider
                px-10 py-3 
                rounded-md 
                shadow-sm
                hover:bg-[#2a4668] 
                hover:shadow-md
                active:scale-95
                transition-all duration-200
            "
        >
            Agendar
        </button>
    )
}