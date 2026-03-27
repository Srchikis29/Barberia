import React, { useState } from "react";
import chikisImg from "../assets/chikisImg.jpg";
import miloImg from "../assets/miloImg.jpg";

const barbers = [
  {
    name: "Chikis",
    img: chikisImg,
  },
  {
    name: "Milo",
    img: miloImg,
  },
];

function ChooseBarber({ onSelect }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (name) => {
    setSelected(name);
    if (onSelect) onSelect(name);
  };

  return (
    <div>
      <h1 className="text-lg block  text-[#2e759e] font-semibold mb-2.5 pl-4 pt-2 pb-1">
        Elige tu barbero
      </h1>

      <div className="flex gap-8 justify-center flex-wrap pb-5">
        {barbers.map((barber) => (
          <div
            key={barber.name}
            onClick={() => handleSelect(barber.name)}
            className={`
                cursor-pointer bg-gray-200 rounded-2xl px-2 py-2 
                flex flex-col items-center w-44
                transition-all duration-200
                ${
                  selected === barber.name
                    ? "border-[2.5px] border-[#2e759e] shadow-[0_0_0_4px_rgba(46,117,158,0.35)]"
                    : "border-[2.5px] border-transparent shadow-md"
                }
            `}
          >
            <img
              src={barber.img}
              alt={barber.name}
              className="w-full h-40 object-cover rounded-xl shadow"
            />

            <span className="mt-4 font-Amarante text-xl text-[#2e759e] tracking-widest text-center">
              {barber.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseBarber;
