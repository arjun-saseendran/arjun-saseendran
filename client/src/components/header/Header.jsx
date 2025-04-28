import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav
      className={`bg-[#155E95] ${
        navOpen ? "mb-36" : "mb-0"
      } md:mb-0 w-full h-[80px] py-4 md:py-0 md:h-[100px]  text-white  md:ps-4 md:pe-16  font-thin `}
    >
      <div className="md:flex justify-between  items-center h-[100px]">
        <div className="flex justify-between w-full items-center p-2">
          <div className="flex flex-col justify-center items-center">
            <p className="text-center my-auto text-xl  hover:text-2xl transition-all duration-500 rounded-lg bg- p-2 cursor-pointer">
              <a href="https://www.linkedin.com/in/arjun-saseendran-dev/">
                ARJUN SASEENDRAN
              </a>
            </p>
          </div>
          <div className="md:hidden my-auto">
            <IoMenu onClick={() => setNavOpen(!navOpen)} className="text-3xl" />
          </div>
        </div>
        <div
          className={` bg-[#155E95] w-full md:w-auto md:block ${
            navOpen ? "block" : "hidden"
          }`}
        >
          <ul className="md:flex items-center gap-20 py-4 text-lg text-center">
            <li className="cursor-pointer border hover:text-xl transition-all duration-500 mb-2 md:mb-0  rounded-lg mx-2 py-2 p-5">
           <Link to='/'>
           HOME
           </Link>  
            </li>
            <li className="cursor-pointer border hover:text-xl transition-all duration-500 mb-2 md:mb-0  rounded-lg mx-2 py-2 p-5">
              <Link to='/about'>ABOUT</Link>
            </li>
            <li className="cursor-pointer border hover:text-xl transition-all duration-500  rounded-lg mx-2 py-2 p-5">
              <Link to='/contact'>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
