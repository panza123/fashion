import { useState } from "react";
import { design } from "./index"; // Import the design data

// Define the type for a single design item
interface DesignItem {
  title: string;
  image: string;
  quote: string;
}

function Design() {
  // State to keep track of the current slide
  const [slide, setSlide] = useState<DesignItem>(design[0]);
  // State to keep track of the active button index
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="w-full h-full px-6">
      <h2 className="text-center font-bold text-4xl pt-5">
        Get started with <span className="text-orange-600">Great</span>Fashion
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5">
        {/* Container for the buttons */}
        <div className="flex flex-col gap-5 text-2xl">
          {design.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSlide(item);
                setActiveIndex(index);
              }}
              className={`
                                cursor-pointer
                                ${
                                  index === activeIndex
                                    ? "border-l-[2px] border-orange-600 text-orange-600"
                                    : ""
                                }
                            `}
            >
              <button className="w-full text-left">
                <p className="pl-2">{item.title}</p>
              </button>
            </div>
          ))}
        </div>

        {/* Container for the image */}
        <div className="col-span-2 md:col-span-1">
          <img
            className="w-full h-[300px] object-cover"
            src={slide.image}
            alt={slide.title}
          />
        </div>

        {/* Container for the slide title and quote */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-3xl font-bold">{slide.title}</h3>
          <p className="text-gray-500 pt-4 sm:text-sm lg:text-lg">
            {slide.quote}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Design;
