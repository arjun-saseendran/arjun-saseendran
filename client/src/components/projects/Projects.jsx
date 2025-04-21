import store from "../../assets/store.png";

export const Projects = () => {
  return (
    <div className=" w-full mx-auto h-full bg-[#273F4F] border p-5 rounded-lg">
      <h1 className="text-white text-center font-jetbrains font-bold text-3xl mb-4">
        PROJECTS
      </h1>

      <div className="rounded-lg">
        <a href="https://store-ecommerce-web-application-client.vercel.app">
          <img className="rounded-lg" src={store} alt="store web app" />
        </a>
      </div>
    </div>
  );
};
