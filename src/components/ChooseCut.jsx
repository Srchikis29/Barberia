import { useState, useEffect } from "react";

function ChooseCut() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [options, setOptions] = useState([]); // ← ya no es estático

  // Trae los cortes desde el backend al cargar el componente
  useEffect(() => {
    fetch("http://127.0.0.1:8000/cortes/")
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);              // guarda [{id:1, nombre:"Corte Clasico"}, ...]
        if (data.length > 0) {
          setSelected(data[0].nombre); // selecciona el primero por defecto
        }
      })
      .catch((err) => console.error("Error al cargar cortes:", err));
  }, []);

  return (
    <>
      <div className="w-full pt-0.5 p-4">
        <label className="text-lg block text-[#2e759e] font-semibold mb-2.5">
          Selecciona tu servicio
        </label>

        {/* Botón */}
        <div
          onClick={() => setOpen(!open)}
          className="font-Amarante flex justify-between items-center border border-[#3c6da4] px-3 py-1 cursor-pointer"
        >
          <span>{selected || "Cargando..."}</span>
          <span className="font-Amarante text-[#274C77] px-2">▼</span>
        </div>

        {/* Opciones */}
        {open && (
          <ul className="font-Amarante border border-[#3c6da4] border-t-0 bg-white text-[#3f89b3]">
            {options.map((option) => (
              <li
                key={option.id}        // ← usamos el id real de la DB
                onClick={() => {
                  setSelected(option.nombre);
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