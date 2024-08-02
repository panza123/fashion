import { useState } from "react";
import { question1, question2 } from "./index";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Faq() {
  const [openQuestion1, setOpenQuestion1] = useState<number | null>(null);
  const [openQuestion2, setOpenQuestion2] = useState<number | null>(null);

  function handleToggleQuestion1(index: number) {
    setOpenQuestion1(openQuestion1 === index ? null : index);
  }

  function handleToggleQuestion2(index: number) {
    setOpenQuestion2(openQuestion2 === index ? null : index);
  }

  return (
    <section className="w-full h-full">
      <div className="w-full h-[300px] bg-blue-200">
        <h4 className="text-xl md:text-3xl lg:text-5xl font-bold pt-4 px-6">
          <span className="text-orange-600">Your favorite questions </span>
          <br /> and our answers to them
        </h4>
      </div>
      <div className="max-w-[700px] px-6 mt-4">
        <h3 className="text-sm md:text-2xl lg:text-4xl font-bold">General Info.</h3>
        <div className="max-w-full mt-5">
          {question1.map((item, index) => (
            <div className="border-b-[1px] border-gray-500 pb-5 pt-5" key={index}>
              <div className="flex justify-between items-center">
                <p className="text-xl md:text-2xl">{item.title}</p>
                <div onClick={() => handleToggleQuestion1(index)}>
                  {openQuestion1 === index ? (
                    <MdKeyboardArrowUp size={20} className="cursor-pointer" />
                  ) : (
                    <MdKeyboardArrowDown size={20} className="cursor-pointer" />
                  )}
                </div>
              </div>
              <p className={openQuestion1 === index ? 'flex pt-3 text-xl text-gray-500' : 'hidden'}>
                {item.ans}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[700px] px-6 mt-8">
        <h3 className="text-sm md:text-2xl lg:text-4xl font-bold">About Fashion</h3>
        <div className="max-w-full mt-5">
          {question2.map((item, index) => (
            <div className="border-b-[1px] border-gray-500 pb-5 pt-5" key={index}>
              <div className="flex justify-between items-center">
                <p className="text-xl md:text-2xl">{item.title}</p>
                <div onClick={() => handleToggleQuestion2(index)}>
                  {openQuestion2 === index ? (
                    <MdKeyboardArrowUp size={20} className="cursor-pointer" />
                  ) : (
                    <MdKeyboardArrowDown size={20} className="cursor-pointer" />
                  )}
                </div>
              </div>
              <p className={openQuestion2 === index ? 'flex pt-3 text-xl text-gray-500' : 'hidden'}>
                {item.ans}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
