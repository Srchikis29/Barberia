import React from 'react'

function FormConfirmReserve() {
    return (
        <>
        <div className="font-Amarante  px-3 mb-2 text-[#31639b]">
        <h2 className="text-3xl mb-4">Confirma Tus Datos</h2>
        <form>
            <input
            type="text"
            placeholder="Nombre"
            className=" w-full p-0.5 border border-[#31639b]
            mb-4 focus:outline-none focus:ring-2
            focus:ring-[#31639b]"
            />

            <input
            type="phone"
            placeholder="Teléfono"
            className="w-full p-0.5 border border-[#31639b]
            mb-4 focus:outline-none focus:ring-2
            focus:ring-[#31639b]"
            />

            <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full p-0.5 border border-[#31639b]
            mb-4 focus:outline-none focus:ring-2
            focus:ring-[#31639b]"
            />
            </form>
            </div>
        
        </>
    )
}

export default FormConfirmReserve