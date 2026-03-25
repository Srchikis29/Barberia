import corte from "../assets/Corte1.png";

function CardPremium() {
  return (
    <div className="space-y-2 px-4 md:px-10  max-w-5xl mx-auto py-5">
      <div className="p-3 flex gap-4 bg-[#f5e3a1] p-5 rounded-2xl overflow-hidden">
        {/* Imagen */}
        <div className="w-45 h-65 md:w-30 md:h-40 flex-shrink-0">
          <img
            src={corte}
            alt="Paquete Premium"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Texto */}
        <div className="w-1/2 p-4 flex flex-col justify-between text-right">
          <div>
            <h3 className="font-Amarante text-4xl md:text-xl text-black">
              Paquete Completo
            </h3>

            <p className="font-semibold text-black text-sm mt-3 py-4">
              <span className="font-bold">Corte + barba + masaje capilar</span>{" "}
              en una sola sesión. El servicio más completo para tu estilo.
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
    </div>
  );
}

export default CardPremium;
