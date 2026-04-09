import { useState, useEffect } from "react";

function ChooseCut({ onSelect }) {  // ← recibe onSelect
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [options, setOptions] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/cortes/`)
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
      })
      .catch((err) => console.error("Error al cargar cortes:", err));
  }, [API_URL]);

  return (
    <>
      <div className="w-full pt-0.5 p-4">
        <label className="text-lg block text-[#2e759e] font-semibold mb-2.5">
          Selecciona tu servicio
        </label>

        <div
          onClick={() => setOpen(!open)}
          className="font-Amarante flex justify-between items-center border border-[#3c6da4] px-3 py-1 cursor-pointer"
        >
          <span className={selected ? "" : "text-gray-400"}>
            {selected ? selected : "Elige tu servicio"}
          </span>
          <span className="font-Amarante text-[#274C77] px-2">▼</span>
        </div>

        {open && (
          <ul className="font-Amarante border border-[#3c6da4] border-t-0 bg-white text-[#3f89b3]">
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => {
                  setSelected(option.nombre);
                  if (onSelect) onSelect(option.nombre); // ← reporta al padre
                  setOpen(false);
                }}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option.nombre}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ChooseCut;