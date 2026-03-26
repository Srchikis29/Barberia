import React, { useState, useEffect, useRef } from "react";

const reviews = [
  { id: 1, quote: "Muy buen servicio", author: "Juan Esteban" },
  { id: 2, quote: "Chupelo", author: "Milo" },
  { id: 3, quote: "Lo mejor de Bogotá", author: "Sebastián" },
  { id: 4, quote: "Gass Prb", author: "Chikis" },
  { id: 5, quote: "Cortes impecables, súper recomendado", author: "Camila" },
  { id: 6, quote: "Buena atención y el ambiente muy chévere", author: "David" },
];

const loopReviews = [...reviews, ...reviews];

function Reseñas() {
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let animationFrame;

    const autoScroll = () => {
      if (scrollElement && !isPaused) {
        scrollElement.scrollLeft += 0.5;

        const half = scrollElement.scrollWidth / 2;

        if (scrollElement.scrollLeft >= half) {
          scrollElement.scrollLeft -= half;
        }
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

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
      scrollElement.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-3 md:px-8 mb-10">
      <h2 className="font-Amarante text-[#274C77] text-center text-3xl md:text-4xl mb-6">
        Reseñas y Opiniones
      </h2>

      <div className="relative">
        {/* Fade izquierdo */}
        {showLeftFade && (
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
        )}

        {/* Fade derecho */}
        {showRightFade && (
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>
        )}

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="overflow-x-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="inline-grid grid-flow-col grid-rows-2 gap-4 pb-2">
            {loopReviews.map((review, index) => (
              <article
                key={index}
                className="min-w-52 max-w-72 bg-gray-200 border border-[#274C77]/15 rounded-xl p-4 shadow-md shadow-[#274C77]/10"
              >
                <p className="text-sm md:text-lg font-semibold text-[#274C77]">
                  "{review.quote}"
                </p>

                <p className="text-xs md:text-sm font-medium text-[#3f89b3] mt-1">
                  - {review.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reseñas;
