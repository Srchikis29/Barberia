import { useState, useEffect } from "react";
import chikisImg from "../assets/chikisImg.jpg";
import miloImg from "../assets/MiloImg.jpg";
import juanImg from "../assets/JuanImg.jpg";

const barberImages = {
  Chiki: chikisImg,
  Milo: miloImg,
  Juan: juanImg
};

function ChooseBarbero({ onSelect }) {
  const [selected, setSelected] = useState(null);
  const [barberos, setBarberos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/barberos/")
      .then((res) => res.json())
      .then((data) => setBarberos(data))
      .catch((err) => console.error("Error al cargar barberos:", err));
  }, []);

  const handleSelect = (nombre) => {
    setSelected(nombre);
    if (onSelect) onSelect(nombre);
  };

  return (
    <div>
      <h1 className="text-lg block text-[#2e759e] font-semibold mb-2.5 pl-4 pt-2 pb-1">
        Elige tu barbero
      </h1>

      <div className="overflow-x-auto pb-5 px-4">
        <div className="flex gap-8 w-max">
        {barberos.map((barbero) => (
          <div
            key={barbero.id}
            onClick={() => handleSelect(barbero.nombre)}
            className={`
              cursor-pointer bg-gray-200 rounded-2xl px-2 py-2 
              flex flex-col items-center w-44
              transition-all duration-200
              ${
                selected === barbero.nombre
                  ? "border-[2.5px] border-[#2e759e] shadow-[0_0_0_4px_rgba(46,117,158,0.35)]"
                  : "border-[2.5px] border-transparent shadow-md"
              }
            `}
          >
            <img
              src={barberImages[barbero.nombre]}
              alt={barbero.nombre}
              className="w-full h-40 object-cover rounded-xl shadow"
            />

            <span className="mt-4 font-Amarante text-xl text-[#2e759e] tracking-widest text-center">
              {barbero.nombre}
            </span>
          </div>
        ))}
      </div>
      </div>

    </div>
  );
}

export default ChooseBarbero;