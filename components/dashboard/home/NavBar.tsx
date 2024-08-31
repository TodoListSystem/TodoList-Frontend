import Image, { StaticImageData } from "next/image";
import React from "react";

interface NavBarProps {
  logo: StaticImageData;
  profilePicture: StaticImageData;
}

const NavBar: React.FC<NavBarProps> = ({ logo, profilePicture }) => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-gray-800 border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <a className="flex ms-2 md:me-24  cursor-pointer">
              <Image
                src={logo}
                width={24}
                height={24}
                className="me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                E-Todo
              </span>
            </a>
          </div>
          <div className="flex items-center me-4">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600"
            >
              <Image
                src={profilePicture}
                width={35}
                height={35}
                className="rounded-full"
                alt="FlowBite Logo"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
