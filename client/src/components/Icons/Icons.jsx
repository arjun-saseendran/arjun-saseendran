import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Icons = ({contact}) => {
  return (
    <div className="flex items-center gap-2 md:gap-10">
    <a href="https://github.com/arjun-saseendran">
    <FaGithub  className={`${ contact ? 'md:hover:text-5xl hover:text-2xl' : 'md:hover:text-5xl hover:text-2xl' } text-xl md:text-4xl hover:cursor-pointer transition-all duration-500`} />
    </a>  
    <a  href="https://www.linkedin.com/in/arjun-saseendran-dev/">
      <FaLinkedin className={`${ contact ? 'hover:text-2xl md:hover:text-5xl' : 'hover:text-2xl md:hover:text-5xl' } text-xl md:text-4xl hover:cursor-pointer transition-all duration-500`} />
    </a>
    </div>
  );
};
