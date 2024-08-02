import { NavLink } from "react-router-dom";
import nav from "./index"; // Assuming nav is an array of objects with `path` and `name`
import { BsCart2 } from "react-icons/bs";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react"; // Import the Auth0 hook
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";

export default function Navbar() {
  // State to handle the opening and closing of the mobile menu
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Get Auth0 state and methods
  const { isAuthenticated } = useAuth0(); // Use Auth0 hook to get authentication status

  // Function to toggle the menu state
  function handleClick() {
    setMenuOpen(!menuOpen); // Toggle the menu open state
  }

  return (
    <header className="w-full flex items-center justify-between py-4 px-6 bg-white shadow-md">
      {/* Brand Logo */}
      <h1 className="text-3xl md:text-4xl font-bold">
        <span className="text-orange-600">Great</span>Fashion
      </h1>

      {/* Navigation Links for larger screens */}
      <ul className="hidden md:flex items-center gap-6 md:gap-10 text-gray-600 text-lg md:text-xl">
        {nav.map((item, index) => (
          <li key={index} className="flex items-center">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "border-b-2 border-orange-600" : ""
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Icons for Sign and Cart on larger screens */}
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <LogoutButton />
        ) : (
          <LoginButton />
        )}
        <NavLink to="cart">
          <BsCart2 size={25} className="hover:text-orange-600" />
        </NavLink>
      </div>

      {/* Hamburger menu icon for smaller screens */}
      <div className="block md:hidden" onClick={handleClick}>
        {/* Toggle between hamburger menu and close icon */}
        {!menuOpen ? <RxHamburgerMenu size={30} /> : <RxCross1 size={30} />}
      </div>

      {/* Mobile menu - only shown when menuOpen is true */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white shadow-md
          transform transition-transform duration-300 ease-in-out z-[1px] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <RxCross1 size={30} onClick={handleClick} />
        </div>
        <ul className="flex flex-col items-center gap-6 text-gray-600 text-lg">
          {nav.map((item, index) => (
            <li key={index} className="flex items-center">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-orange-600" : ""
                }
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          {isAuthenticated ? (
            <LogoutButton />
          ) : (
            <LoginButton />
          )}
        </ul>
      </div>
    </header>
  );
}
