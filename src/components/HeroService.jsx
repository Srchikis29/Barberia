import React from 'react'
import barberiaBN from '../assets/barberiaBN.jpg'

function HeroService() {
return (
    <>
        <section className="relative w-full h-90 md:h-125">      {/* Imagen de fondo */}
        <img
            src={barberiaBN}
            alt="Barbería"
            className="w-full h-full object-cover"
        />

        {/* Fade blanco abajo */}
        <div className="absolute bottom-0 left-0 w-full h-70 bg-linear-to-b from-transparent to-white "></div>

        {/* Contenido */}
        <div className="absolute inset-0 flex  mt-55  tems-end">
            <div className="px-4 md:px-20 max-w-lg text-left">
            <h1 className="text-center font-Amarante text-6xl md:text-6xl text-black leading-none drop-shadow-lg">
                LA BARBERIA
            </h1>
            <p className="text-[#DBB42C] text-xl  mt-3  font-Amarante">
                Stylo que habla por ti!
            </p>
            </div>
        </div>
        </section>
    
    </>


)
}

export default HeroService