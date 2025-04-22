import { Icons } from "../Icons/Icons"

export const Footer = () => {
  return (
    <div className=" flex  justify-between p-2 md:px-10 items-center w-full h-[100px] bg-[#536493] text-white text-sm  md:text-lg font-jetbrains">
     <div className="text-[10px] md:text-xl ">
       
       Copyright &copy; 2024-2025 arjunsaseendran.
     </div> 
     <Icons/>
      
    </div>
  )
}