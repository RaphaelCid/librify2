"use client";

import { useEffect, useState, useRef } from "react";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    { src: "../static/img/ej1.jpg", url: "#" },
    { src: "../static/img/ej2.jpg", url: "#" },
    { src: "../static/img/ej3.jpg", url: "#" },
    { src: "../static/img/ej4.jpg", url: "#" },
    { src: "../static/img/background.jpg", url: "#" },
  ];

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Cambio automático cada 5 segundos
  };

  const stopAutoSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    stopAutoSlide();
    startAutoSlide();
  };

  const handleSlideClick = (url: string) => {
    window.location.href = url; // Redirección al hacer clic
  };

  return (
    <div id="default-carousel" className="relative w-full z-20" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 bg-gray-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => handleSlideClick(slide.url)} // Evento de clic
            style={{ cursor: "pointer" }} // Indica que es clickeable
          >
            <img
              src={slide.src}
              className="absolute block w-full h-full object-cover transition-transform duration-1000 ease-in-out scale-105"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-colors duration-500 ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
