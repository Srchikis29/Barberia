import React from "react";
import { useLocation } from "react-router-dom";

function ConfirmService() {
    const location = useLocation();

    // ⚠️ IMPORTANTE: desde Reserva envías "corte", no "servicio"
    const { servicio, barbero, fecha, hora } = location.state || {};

    // 📅 Formatear fecha bonita
    const formatFecha = (fechaRaw) => {
    if (!fechaRaw) return "No seleccionada";

    // 💥 CLAVE: NO usar new Date(fechaRaw)
    const [year, month, day] = fechaRaw.split("-");

    const fechaLocal = new Date(year, month - 1, day);

    return fechaLocal.toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
};

    // 🕒 Formatear hora bonita
    const formatHora = (horaRaw) => {
      if (!horaRaw) return "No seleccionada";
      const date = new Date(`1970-01-01T${horaRaw}`);
      return date.toLocaleTimeString("es-CO", {
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    return (
      <div className="flex flex-col items-center font-Amarante mt-5 mb-10 px-4">

        <h1 className="text-3xl text-[#2e5e92] mb-6">
          Confirmamos Tu Servicio
        </h1>

        {/* Card */}
        <div className="bg-[#e9eef1] rounded-xl p-6 w-full max-w-sm 
                        shadow-md hover:shadow-xl 
                        transition-all duration-300 border border-gray-200">

          {/* Fecha */}
          <div className="flex justify-between text-[#31639b] text-[15px] mb-2">
            <span className="font-semibold">Fecha</span>
            <span className="font-normal">{formatFecha(fecha)}</span>
          </div>

          {/* Hora */}
          <div className="flex justify-between text-[#31639b] text-[15px] mb-2">
            <span className="font-semibold">Hora</span>
            <span className="font-normal">{formatHora(hora)}</span>
          </div>

          {/* Barbero */}
          <div className="flex justify-between text-[#31639b] text-[15px] mb-2">
            <span className="font-semibold">Barbero</span>
            <span className="font-normal">
              {barbero || "No seleccionado"}
            </span>
          </div>

          {/* Servicio */}
          <div className="flex justify-between text-[#31639b] text-[15px]">
            <span className="font-semibold">Servicio</span>
            <span className="font-normal">
              {servicio || "No seleccionado"}
            </span>
          </div>

          {/* Línea */}
          <div className="border-t border-gray-300 my-4"></div>

          {/* Mensaje */}
          <p className="text-center text-sm text-gray-600">
            Gracias por reservar con nosotros. Por favor, confirma que los detalles
            de tu reserva son correctos. Si necesitas hacer algún cambio, no dudes
            en contactarnos.
          </p>
        </div>
      </div>
    );
}

export default ConfirmService;