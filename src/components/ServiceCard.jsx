import corte from "../assets/Corte1.png";
import barba from "../assets/Corte2.png";
import afeitado from "../assets/Corte3.png";

const services = [
  {
    id: 1,
    image: corte,
    title: "Corte Basico",
    description:
      "Un estilo limpio y preciso, pensado para resaltar tu personalidad.",
  },
  {
    id: 2,
    image: barba,
    title: "Arreglo de Barba",
    description:
      "Definición perfecta y cuidado profesional para una barba bien perfilada.",
  },
  {
    id: 3,
    image: afeitado,
    title: "Afeitado Premium",
    description:
      "Experiencia tradicional con toalla caliente y productos de alta calidad.",
  },
];

function ServiceCard() {
  return (
    <div className="space-y-2 px-4 md:px-10  max-w-5xl mx-auto">
      {services.map((service) => (
        <div className="p-3 flex gap-4 bg-[#E7ECEF] rounded-2xl overflow-hidden">
          {/* Imagen */}
          <div className="w-45 h-65 md:w-30 md:h-40 shrink-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Texto */}
          <div className="w-1/2 p-4 flex flex-col justify-between text-right">
            <div>
              <h3 className="font-Amarante text-3xl md:text-xl text-black">
                {service.title}
              </h3>

              <p className="font-semibold text-black text-sm mt-3 py-4">
                {service.description}
              </p>
            </div>

            <a
              href="#"
              className="text-[#274C77] text-sm hover:underline text-center font-bold py-1 underline underline-offset-3"
            >
              Reservar ahora
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceCard;
