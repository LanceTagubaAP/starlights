// src/components/Carousel.tsx
import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const lightsticks = [
  {
    id: 1,
    name: "Lightstick A",
    image: "https://example.com/lightstick-a.jpg", // Replace with your lightstick image URL
  },
  {
    id: 2,
    name: "Lightstick B",
    image: "https://example.com/lightstick-b.jpg", // Replace with your lightstick image URL
  },
  {
    id: 3,
    name: "Lightstick C",
    image: "https://example.com/lightstick-c.jpg", // Replace with your lightstick image URL
  },
  // Add more lightsticks as needed
];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
  };

  return (
    <div className="w-full py-8">
      <h2 className="text-center text-2xl font-bold mb-4">Our Lightsticks</h2>
      <Slider {...settings}>
        {lightsticks.map((lightstick) => (
          <div key={lightstick.id} className="flex flex-col items-center">
            <img
              src={lightstick.image}
              alt={lightstick.name}
              className="w-64 h-64 object-cover rounded-lg mb-2"
            />
            <span className="text-lg font-semibold">{lightstick.name}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Extend the props to include className and other necessary attributes
interface ArrowProps extends React.HTMLProps<HTMLDivElement> {
  direction: 'next' | 'prev';
}

const Arrow: React.FC<ArrowProps> = ({ direction, ...props }) => {
  const isNext = direction === 'next';
  return (
    <div
      {...props}
      className={`${
        props.className || ''
      } text-gray-700 bg-white rounded-full shadow-lg p-2 cursor-pointer`}
      style={{ display: 'block' }}
    >
      {isNext ? <FaArrowRight /> : <FaArrowLeft />}
    </div>
  );
};

export default Carousel;
