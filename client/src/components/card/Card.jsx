import dp from "../../assets/dp.png";

export const Card = () => {
  return (
    <div className=" p-2 gap-2 mx-auto flex flex-col text-center justify-center items-center   h-full md:w-3/4 ">
      <div>
        <img className="w-32 border border-black rounded-full" src={dp} alt="profile photo" />
      </div>
      <div>
        <p className="font-thin">
          Hey! I’m Arjun Saseendran, a full-stack web developer who loves
          building clean, responsive, and user-friendly web apps using the MERN
          stack. I enjoy turning ideas into smooth, functional experiences both
          on the front end and the back. Always learning, always building 
     <p>     let’s create something great together.</p>
        </p>
      </div>
    </div>
  );
};
