import React from 'react'

function ConfirmService() {
    const fecha = "XX - XXXX- XX";
    const hora = "XX:XX xx";
    const barbero = "XXXXXX";
    const servicio = "XXXXXXXXXX";

    return (
        

        <div className="flex flex-col items-center font-Amarante mt-5 mb-10 px-4">
            

            {/* Card */}
            <div className="bg-[#e9eef1] rounded-xl p-6 w-full max-w-sm 
                            shadow-md hover:shadow-xl 
                            transition-all duration-300 border border-gray-200">

                {/* Item */}
                <div className="flex justify-between text-[#31639b] text-[15px] mb-2">
                    <span className="font-semibold">Fecha</span>
                    <span className="font-normal">{fecha}</span>
                </div>

                <div className="flex justify-between text-[#31639b] text-[15px] mb-2">
                    <span className="font-semibold">Hora</span>
                    <span className="font-normal">{hora}</span>
                </div>

                <div className="flex justify-between text-[#31639b] text-[15px] mb-2">
                    <span className="font-semibold">Barbero</span>
                    <span className="font-normal">{barbero}</span>
                </div>

                <div className="flex justify-between text-[#31639b] text-[15px]">
                    <span className="font-semibold">Servicio</span>
                    <span className="font-normal">{servicio}</span>
                </div>

                {/* Línea separadora */}
                <div className="border-t border-gray-300 my-4"></div>

                {/* Mensaje */}
                <p className="text-center text-sm text-gray-600">
                    Gracias por reservar con nosotros. Por favor, confirma que los detalles de tu reserva son correctos. Si necesitas hacer algún cambio, no dudes en contactarnos.
                </p>
            </div>
        </div>
    );
}

export default ConfirmService