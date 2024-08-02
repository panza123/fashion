import { useState } from "react";
import { avatar } from ".";
import story from "../../assets/images/pexels-august-de-richelieu-4427817.jpg";
import { FaRegPlusSquare, FaTimes } from "react-icons/fa";

// Define types for Avatar
interface Avatar {
  image: string;
  name: string;
  title: string;
  info: string;
  statement: string;
}

// Define the Story functional component
const Story: React.FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar | null>(null);
  const [click, setClick] = useState<Avatar>(avatar[0]);
  const [activeAvatar, setActiveAvatar] = useState<Avatar | null>(null);

  // Function to handle click on avatar button
  const handleAvatarClick = (avatar: Avatar) => {
    setSelectedAvatar(avatar);
  };

  // Function to handle click on cancel button
  const handleCancelClick = () => {
    setSelectedAvatar(null);
  };

  // Function to handle button click
  const handleButtonClick = (avatar: Avatar) => {
    setClick(avatar);
    setActiveAvatar(avatar);
  };

  return (
    <div className="w-full h-full">
      {/* Outer Flex Container */}
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-blue-200 flex items-center justify-center py-8 md:py-20">
          <h4 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
            Company <span className="text-orange-600">Fashion</span>
          </h4>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <img src={story} alt="Fashion story" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full bg-slate-400 px-6 py-6">
        <h4 className="text-xl md:text-3xl lg:text-5xl font-bold text-center mb-6">
          Meet <span className="text-orange-600">Our Team</span>
        </h4>

        {/* Avatar Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {avatar.map((item: Avatar, index: number) => (
            <div
              className={`bg-white flex items-center justify-between p-4 rounded-lg shadow-md relative border-2 ${
                activeAvatar === item ? 'border-orange-600' : 'border-transparent'
              }`}
              key={index}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="flex-1 ml-4">
                <p className="font-bold text-lg">{item.name}</p>
                <p className="text-gray-500">{item.title}</p>
              </div>
              <button
                className="absolute top-4 right-4 w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center"
                onClick={() => handleAvatarClick(item)}
              >
                <FaRegPlusSquare size={16} className="text-white" />
              </button>
            </div>
          ))}
        </div>

        {/* Modal for Avatar Details */}
        {selectedAvatar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white max-w-md w-full p-6 rounded-lg relative">
              <button
                className="absolute top-2 right-2 text-gray-600"
                onClick={handleCancelClick}
              >
                <FaTimes size={20} />
              </button>
              <div className="text-center">
                <img
                  src={selectedAvatar.image}
                  alt={selectedAvatar.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto"
                />
                <h2 className="font-bold text-xl mt-4">{selectedAvatar.name}</h2>
                <p className="text-gray-500">{selectedAvatar.title}</p>
                <p className="text-gray-500 mt-2">{selectedAvatar.info}</p>
                <p className="text-gray-700 mt-4">{selectedAvatar.statement}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Clicked Avatar Details */}
      <div className="w-full h-full px-6 mt-10 flex items-center justify-center">
        <div className="max-w-[500px]">
          <p className="text-xl text-gray-500">{click.statement}</p>
          <div className="flex items-center mt-4">
            <img
              src={click.image}
              alt={click.title}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="ml-4">
              <p className="font-bold text-lg">{click.name}</p>
              <p className="text-gray-500">{click.title}</p>
            </div>
          </div>
          <div className="mt-6">
            {avatar.map((item: Avatar, index: number) => (
              <button
                className={`text-white px-4 py-2 ${
                  activeAvatar === item ? 'bg-orange-600' : 'bg-gray-500'
                }`}
                key={index}
                onClick={() => handleButtonClick(item)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Story component as default export
export default Story;
