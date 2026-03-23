import React, { useState, useEffect, useRef } from 'react'
import Corte1 from '../assets/Corte1.png'
import Corte2 from '../assets/Corte2.png'
import Corte3 from '../assets/Corte3.png'

const servicios = [
  {
    title: 'Corte Básico',
    description: 'Limpio, rápido y moderno.',
    img: Corte1,
    price: '$20.000',
  },
  {
    title: 'Corte + Barba',
    description: 'Estilo completo para tu look.',
    img: Corte2,
    price: '$25.000',
  },
  {
    title: 'Degradado Profesional',
    description: 'Tonos naturales y acabados precisos.',
    img: Corte3,
    price: '$25.000',
  },
]

function Cortes() {
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftFade(scrollLeft > 0);
        setShowRightFade(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className='py-8 px-4 md:px-8 lg:px-12'>
      <h2 className='font-Amarante text-[#274C77] text-center text-3xl md:text-4xl mb-6'>Servicios Destacados</h2>

      <div className='relative overflow-hidden'>
        {showLeftFade && (
          <div className='absolute left-0 top-0 bottom-0 w-4 bg-linear-to-r from-white to-transparent z-10 pointer-events-none'></div>
        )}
        {showRightFade && (
          <div className='absolute right-0 top-0 bottom-0 w-4 bg-linear-to-l from-white to-transparent z-10 pointer-events-none'></div>
        )}
        <div ref={scrollRef} className='overflow-x-auto -mx-4 px-4 pb-2'>
          <div className='flex gap-6 min-w-max'>
            {servicios.map((servicio, index) => (
              <article
                key={index}
                className='min-w-65 md:min-w-[320px] max-w-[320px] bg-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-slate-200'
              >
                <div className='relative overflow-hidden'>
                  <img
                    src={servicio.img}
                    alt={servicio.title}
                    className='w-full h-52 sm:h-56 object-cover transition-transform duration-500 hover:scale-105'
                  />
                  <div className='absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/70 via-black/20 to-transparent' />
                  <span className=' absolute right-3 top-3 bg-[#274C77] text-white text-sm font-semibold px-3 py-1 rounded-full'>
                    {servicio.price}
                  </span>
                </div>

                <div className='p-5'>
                  <h3 className='font-Amarante text-xl font-bold text-[#274C77] mb-1'>{servicio.title}</h3>
                  <p className='text-slate-600 mb-4'>{servicio.description}</p>
                  <button className='inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-white bg-linear-to-r from-[#274C77] to-[#1f3e66] rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7d8ff]'>
                    Ver más
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cortes