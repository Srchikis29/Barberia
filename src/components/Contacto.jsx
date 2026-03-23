import React from 'react'

function Contacto() {
    return (
    <> 
    <div className='font-Amarante  px-3 mb-2 text-[#31639b]'>
        <h2 className='text-3xl'>Contacto</h2>
        <p className='pb-3 pt-1 text-base'>Escribenos un mensaje</p>
        <form>
            <input type="text" 
            placeholder='Nombre' 
            className=' w-full p-0.5 border border-[#31639b]
            mb-2 focus:outline-none focus:ring-2
            focus:ring-[#31639b]' />

            <input type="phone" 
            placeholder='Teléfono' 
            className='w-full p-0.5 border border-[#31639b]
            mb-2 focus:outline-none focus:ring-2
            focus:ring-[#31639b]' />

            <textarea 
            placeholder="Déjanos tu mensaje" 
            className="pl-1 pt-1 w-full h-20  border border-[#31639b] mb-2 
            focus:outline-none focus:ring-2 focus:ring-[#31639b]"
            ></textarea>
            
            <button type="submit" 
                className="px-6 py-1 bg-[#9bc7f7] text-gray-800 
                rounded hover:bg-[#1a5a8a] transition-colors border border-[#31639b] hover:text-white
                duration-300">Enviar
            </button>




        </form>
    </div>

    </>
    )
}

export default Contacto