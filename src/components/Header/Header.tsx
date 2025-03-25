import React from "react";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <nav className="flex items-center justify-between w-full py-4 px-6 bg-gray-800">
      <div className="flex items-center">
        <a href="#" className="text-2xl font-bold text-white">
          Logo
        </a>
      </div>
      <div className="flex items-center">
        <a href="#" className="text-lg font-semibold text-white mr-4">
          About
        </a>
        <a href="#" className="text-lg font-semibold text-white">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
