import store from "../../assets/store.png";
import amazon from "../../assets/amazon.png";
import youtube from "../../assets/youtube.png";
import aimoviebox from '../../assets/aimovebox.png'

export const Projects = () => {
  return (
    <div className=" w-full mx-auto h-full border border-black p-5 rounded-lg text-black">
      <h1 className=" text-center font-thin  text-3xl mb-10">
        PROJECTS
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-4">
        <div
          className="rounded-lg text-center border border-black p-2 w-32 h-32 
      
      transition-transform duration-300 ease-in-out transform hover:scale-105
      
      "
        >
          <a href="https://store-ecommerce-web-application-client.vercel.app">
            <img
              title="stOre ecommerce  project"
              className="rounded-lg"
              src={store}
              alt="store web app"
            />
          </a>
          <p className="font-thin text-lg">stOre</p>
        </div>
        <div
          className="rounded-lg text-center border border-black p-2 w-32 h-32
      
       transition-transform duration-300 ease-in-out transform hover:scale-105
      "
        >
          <a href="https://aimoivebox.web.app/">
            <img
              title="AI movie box"
              className="rounded-lg"
              src={aimoviebox}
              alt="ai movie box web app"
            />
          </a>
          <p className="font-thin text-lg">AImoviebOx</p>
        </div>
        <div
          className="rounded-lg text-center border border-black p-2 w-32 h-32
      
       transition-transform duration-300 ease-in-out transform hover:scale-105
      
      "
        >
          <a href="https://arjun-saseendran.github.io/amazon/">
            <img
              title="Amazon clone project"
              className="rounded-lg"
              src={amazon}
              alt="store web app"
            />
          </a>
          <p className=" font-thin text-lg">amazon(c)</p>
        </div>
        <div
          className="rounded-lg text-center border border-black p-2 w-32 h-32
      
       transition-transform duration-300 ease-in-out transform hover:scale-105
      "
        >
          <a href="https://arjun-saseendran.github.io/youtube/">
            <img
              title="Youtube clone project"
              className="rounded-lg"
              src={youtube}
              alt="store web app"
            />
          </a>
          <p className=" font-thin text-lg">youtube(c)</p>
        </div>
       
        <div className="rounded-lg border border-black p-2 w-32 h-32 text-center">
          <p title="Chat app project" className="font-thin py-5">
            coming soon..
          </p>

          <p className=" font-thin text-lg">crush</p>
        </div>
      </div>
    </div>
  );
};
