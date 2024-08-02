import nav from "../nav/index";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  // Split the nav array into two halves
  const halfIndex = Math.ceil(nav.length / 2);
  const navFirstHalf = nav.slice(0, halfIndex);
  const navSecondHalf = nav.slice(halfIndex);

  return (
    <footer className="w-full bg-black text-white py-6 px-4 md:px-6 lg:px-8 mt-10">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
        {/* Brand Logo */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-gray-300">Great</span>Fashion
          </h1>
        </div>

        {/* Site Map */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4">Site Map</h2>
          <div className="flex space-x-4">
            <ul className="space-y-2">
              {navFirstHalf.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {navSecondHalf.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={24} className="hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="hover:text-gray-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={24} className="hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="text-center mt-8">
        <p className="text-gray-400">© 2024 GreatFashion. All rights reserved.</p>
      </div>
    </footer>
  );
}
