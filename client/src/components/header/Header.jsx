import { IoMenu } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { useState } from "react";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="bg-[#1A120B] w-full h-[100px] font-jetbrains text-white  md:ps-4 md:pe-16  font-bold ">
      <div className="md:flex justify-between  items-center h-[100px]">
        <div className="flex justify-between w-full items-center p-2">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-16 h-16 hover:cursor-pointer hover:opacity-45"
              src={logo}
              alt="logo"
            />
            <p className="text-center text-xs">ARJUN SASEENDRAN</p>
          </div>
          <div className="md:hidden">
            <IoMenu onClick={() => setNavOpen(!navOpen)} className="text-3xl" />
          </div>
        </div>
        <div className={` bg-[#1A120B] w-full md:w-auto md:block ${navOpen ?  'block' :'hidden' }`}>
          <ul className="md:flex items-center gap-20 py-4 text-lg text-center">
            <li className="cursor-pointer border hover:text-amber-900 mb-2 md:mb-0 bg-black rounded-lg mx-2 py-2 p-5">HOME</li>
            <li className="cursor-pointer border hover:text-amber-900 mb-2 md:mb-0 bg-black rounded-lg mx-2 py-2 p-5">ABOUT</li>
            <li className="cursor-pointer border hover:text-amber-900 bg-black rounded-lg mx-2 py-2 p-5">CONTACT</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
