import barberiaAZ from "../assets/barberiaAZ.jpg";

function Hero() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px]">
      {/* Imagen de fondo */}
      <img
        src={barberiaAZ}
        alt="Barbería"
        className="w-full h-full object-cover"
      />

      {/* Fade blanco abajo */}
      <div className="absolute bottom-0 left-0 w-full h-90 bg-gradient-to-b from-transparent to-white"></div>

      {/* Contenido */}
      <div className="absolute inset-0 flex items-end">
        <div className="px-4 md:px-20 max-w-lg text-left">
          <h1 className="font-Amarante text-6xl md:text-6xl text-black leading-none drop-shadow-lg">
            LA BARBERIA
          </h1>

          <p className="text-[#6096BA] text-2xl font-Amarante">
            Estilo que habla por ti
          </p>

          <p className="text-[#DBB42C] text-sm font-semibold mt-2">
            Cortes clásicos, estilos modernos, atención premium
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
