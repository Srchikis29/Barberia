import React, { useState, useEffect, useRef } from 'react'

const reviews = [
    { id: 1, quote: 'Muy buen servicio', author: 'Juan Esteban' },
    { id: 2, quote: 'Chupelo', author: 'Milo' },
    { id: 3, quote: 'Lo mejor de Bogotá', author: 'Sebastián' },
    { id: 4, quote: 'Gass Prb', author: 'Chikis' },
    { id: 5, quote: 'Cortes impecables, súper recomendado', author: 'Camila' },
    { id: 6, quote: 'Buena atención y el ambiente muy chévere', author: 'David' },
    ]

function Reseñas() {
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
        <section className='max-w-6xl mx-auto px-3 md:px-8 mb-4'>
        <h2 className='font-Amarante text-[#274C77] text-center text-3xl md:text-4xl mb-6'>
            Reseñas y Opiniones
        </h2>

        <div className='relative'>
            {showLeftFade && (
                <div className='absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-white to-transparent z-10 pointer-events-none'></div>
            )}
            {showRightFade && (
                <div className='absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-white to-transparent z-10 pointer-events-none'></div>
            )}
            <div ref={scrollRef} className='overflow-x-auto scrollbar-thin scrollbar-thumb-[#274C77]/60 scrollbar-track-[#274C77]/10'>
            <div className='inline-grid grid-flow-col grid-rows-2 gap-3 pb-2'>
                {reviews.map((review) => (
                <article
                    key={review.id}
                    className='min-h-10 min-w-50 max-w-70 bg-gray-200 border border-[#274C77]/15 rounded-xl p-3 shadow-lg shadow-[#274C77]/10'
                >
                    <p className='pb-1 text-sm md:text-lg font-semibold text-[#274C77] '>"{review.quote}"</p>
                    <p className='text-xs md:text-sm font-medium text-[#3f89b3]'>- {review.author}</p>
                </article>
                ))}
            </div>
            </div>
        </div>
        </section>
    )
}

export default Reseñas