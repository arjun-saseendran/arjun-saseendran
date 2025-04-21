import dp from '../../assets/dp.png';

export const Card = () => {
  return (
    
    <div className="border p-2 gap-2 mx-auto flex flex-col text-center justify-center items-center rouded-xl bg-[#273F4F] h-full md:w-3/4 rounded-xl" >
      <div>
      <img className='w-32 rounded-full' src={dp} alt="profile photo" />
      </div>
      <div>
        <p className='text-white font-jetbrains'>
          
          Aspiring MERN Full Stack Developer | Proficient in HTML, CSS, JavaScript, Bootstrap, Tailwind, MongoDB, Express, React, Node.js | Passionate About Building Dynamic Web Applications
          
        </p>
      </div>
      
    </div>
  );
};