import corte from "../assets/Corte1.png";
import barba from "../assets/Corte2.png";
import afeitado from "../assets/Corte3.png";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    image: corte,
    title: "Corte Basico",
    price: "$20.000",
    description:
      "Un estilo limpio y preciso, pensado para resaltar tu personalidad.",
  },
  {
    id: 2,
    image: barba,
    title: "Arreglo de Barba",
    price: "$15.000",
    description:
      "Definición perfecta y cuidado profesional para una barba bien perfilada.",
  },
  {
    id: 3,
    image: afeitado,
    title: "Afeitado Premium",
    price: "$25.000",
    description:
      "Experiencia tradicional con toalla caliente y productos de alta calidad.",
  },

  
];

function ServiceCard() {
  return (
    <div className="space-y-6 px-4 md:px-10 max-w-5xl mx-auto">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex gap-5 bg-[#E7ECEF] rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          {/* Imagen */}
          <div className="w-32 h-40 md:w-36 md:h-44 shrink-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Contenido */}
          <div className="flex flex-col justify-between w-full">
            
            {/* Título + Precio */}
            <div className="flex justify-between items-start">
              <h3 className="font-Amarante text-2xl text-black leading-tight">
                {service.title}
              </h3>

              <span className="text-[#274C77] font-bold text-lg whitespace-nowrap">
                {service.price}
              </span>
            </div>

            {/* Descripción */}
            <p className="text-gray-700 text-sm mt-2 leading-relaxed max-w-md">
              {service.description}
            </p>

            {/* Botón */}
            <div className="mt-3">
              <Link
                to="/Reserve"
                className="text-[#274C77] font-semibold text-sm underline underline-offset-4 hover:text-[#1b365d] transition"
              >
                Reservar ahora
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceCard;