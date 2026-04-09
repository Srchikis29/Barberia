import barberiaAZ from "../assets/BarberiaAZ.jpg";
import Button from "./Boton";

function Hero() {
  return (
    <section className="relative w-full h-100 md:h-125">
      {" "}
      {/* Imagen de fondo */}
      <img
        src={barberiaAZ}
        alt="Barbería"
        className="w-full h-full object-cover"
      />
      {/* Fade blanco abajo */}
      <div className="absolute bottom-0 left-0 w-full h-90 bg-linear-to-b from-transparent to-white"></div>
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

          <div className="mt-5 md:mt-8 flex justify-start">
            <Button
              text="Agenda tu cita ahora"
              to={"/Reserve"}
              className="relative left-4 md:left-6 top-2 md:top-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
