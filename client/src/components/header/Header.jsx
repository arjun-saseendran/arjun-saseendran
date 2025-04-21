import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="bg-[#273F4F] w-full h-[80px] py-4 md:py-0 md:h-[100px] font-jetbrains text-white  md:ps-4 md:pe-16  font-bold ">
      <div className="md:flex justify-between  items-center h-[100px]">
        <div className="flex justify-between w-full items-center p-2">
          <div className="flex flex-col justify-center items-center">
           
            <p className="text-center my-auto text-xl hover:text-[#547792] cursor-pointer">ARJUN SASEENDRAN </p>
            
          </div>
          <div className="md:hidden my-auto">
            <IoMenu onClick={() => setNavOpen(!navOpen)} className="text-3xl" />
          </div>
        </div>
        <div
          className={` bg-[#273F4F] w-full md:w-auto md:block ${navOpen ? "block" : "hidden"}`}
        >
          <ul className="md:flex items-center gap-20 py-4 text-lg text-center">
            <li className="cursor-pointer border hover:text-[#547792] mb-2 md:mb-0  rounded-lg mx-2 py-2 p-5">
              HOME
            </li>
            <li className="cursor-pointer border hover:text-[#547792] mb-2 md:mb-0  rounded-lg mx-2 py-2 p-5">
              ABOUT
            </li>
            <li className="cursor-pointer border hover:text-[#547792]  rounded-lg mx-2 py-2 p-5">
              CONTACT
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
