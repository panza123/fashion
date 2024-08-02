import { useState, useEffect } from "react";
import { sliderShow } from "./index";

interface Slide {
  image: string;
  title: string;
  descriptions: string;
}

const Slide: React.FC = () => {
  const [slide, setSlide] = useState<Slide>(sliderShow[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderShow.length);
      setSlide(sliderShow[(currentIndex + 1) % sliderShow.length]);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="w-full h-[500px] md:h-[600px] relative overflow-hidden z-[-1] px-6">
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full 
    
    flex justify-between p-4 text-white bg-black bg-opacity-50 pt-[150px]"
      >
        <div className="mt-4 md:mt-8 w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
          <p className="mt-2 md:mt-4 text-sm md:text-xl text-gray-400">
            {slide.descriptions}
          </p>
        </div>
        <div className="flex  md:flex-col justify-center gap-4 mb-4 md:mb-8 w-1/2 items-end">
          {sliderShow.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setSlide(item);
              }}
              className={`h-[30px] w-[30px] md:h-[40px] md:w-[40px] mx-2 md:mx-4 text-lg md:text-2xl
               border border-white rounded-full cursor-pointer ${
                 index === currentIndex ? "bg-white" : "bg-gray-500"
               }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slide;
