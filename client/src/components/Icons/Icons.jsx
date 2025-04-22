import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Icons = ({contact}) => {
  return (
    <div className="flex items-center gap-2 md:gap-10">
    <a href="https://github.com/arjun-saseendran">
    <FaGithub  className={`${ contact ? 'hover:text-[#536493]' : 'hover:text-[#ADB2D4]' } text-xl md:text-4xl hover:cursor-pointer`} />
    </a>  
    <a  href="https://www.linkedin.com/in/arjun-saseendran-dev/">
      <FaLinkedin className={`${ contact ? 'hover:text-[#536493]' : 'hover:text-[#ADB2D4]' } text-xl md:text-4xl hover:cursor-pointer`} />
    </a>
    </div>
  );
};
