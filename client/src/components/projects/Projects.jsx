import store from "../../assets/store.png";
import amazon from "../../assets/amazon.png";
import youtube from "../../assets/youtube.png";

export const Projects = () => {
  return (
    <div className=" w-full mx-auto h-full border p-5 rounded-lg">
      <h1 className="text-white text-center font-jetbrains font-bold text-3xl mb-10">
        PROJECTS
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-4">
        <div
          className="rounded-lg text-center border p-2 w-32 h-32 
      
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
          <p className="text-white font-bold text-lg">stOre</p>
        </div>
        <div
          className="rounded-lg text-center border p-2 w-32 h-32
      
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
          <p className="text-white font-bold text-lg">amazon(c)</p>
        </div>
        <div
          className="rounded-lg text-center border p-2 w-32 h-32
      
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
          <p className="text-white font-bold text-lg">youtube(c)</p>
        </div>
        <div className="rounded-lg border p-2 w-32 h-32 text-center">
          <p title="Chat app project" className="text-white py-5">
            coming soon..
          </p>

          <p className="text-white font-bold text-lg">crush</p>
        </div>
      </div>
    </div>
  );
};
