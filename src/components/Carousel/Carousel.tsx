import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CarouselProps {
  data: { src: string; alt: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
  };

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden">
      {/* Previous Button */}
      <div
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 cursor-pointer z-10"
      >
        <FaArrowLeft size={15} />
      </div>

      <div className="relative w-full">
        {data.map((item, idx) => (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={`w-full transition-opacity duration-500 ease-in-out ${
              slide === idx ? "opacity-100" : "opacity-0 absolute top-0 left-0"
            }`}
          />
        ))}
      </div>

      {/* Next Button */}
      <div
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 cursor-pointer z-10"
      >
        <FaArrowRight size={15} />
      </div>
      
      {/* Indicators */}
      <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${
              slide === idx ? "bg-gray-700" : "bg-gray-300"
            }`}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Carousel;
