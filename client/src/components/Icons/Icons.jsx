import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Icons = () => {
  return (
    <div className="flex items-center gap-2 md:gap-10">
      <FaGithub className="text-xl md:text-4xl hover:cursor-pointer" />
      <FaLinkedin className="text-xl md:text-4xl hover:cursor-pointer" />
    </div>
  );
};
