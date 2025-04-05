import dp from '../../assets/dp.png';

export const Card = () => {
  return (
    
    <div className="border p-5 gap-4 mx-2 md:mx-20 flex flex-col text-center justify-center items-center rouded-xl bg-[#1A120B] h-[500px] w-[300px] rounded-xl" >
      <div>
      <img className='w-60 rounded-full' src={dp} alt="profile photo" />
      </div>
      <div>
        <p className='text-white font-jetbrains'>
          
          Aspiring MERN Full Stack Developer | Proficient in HTML, CSS, JavaScript, Bootstrap, Tailwind, MongoDB, Express, React, Node.js | Passionate About Building Dynamic Web Applications
          
        </p>
      </div>
      
    </div>
  );
};