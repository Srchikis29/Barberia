import { useState } from "react";

function ChooseCut() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Corte Clasico");
  const options = [
    "Corte Clasico",
    "Corte + Barba",
    "Barba",
    "Corte + Barba + Afeitado",
    "Afeitado",
    "Alisado de Barba",
  ];
  return (
    <>
      <div className="w-full pt-0.5 p-4">
        <label className="text-lg block  text-[#2e759e] font-semibold mb-2.5">
          Selecciona tu servicio
        </label>

        {/* Botón */}
        <div
          onClick={() => setOpen(!open)}
          className=" font-Amarante flex justify-between items-center border border-[#3c6da4]  px-3 py-1 cursor-pointer"
        >
          <span>{selected}</span>
          <span className="font-Amarante text-[#274C77]  px-2">▼</span>
        </div>

        {/* Opciones */}
        {open && (
          <ul className="font-Amarante border border-[#3c6da4] border-t-0 bg-white text-[#3f89b3]">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ChooseCut;
