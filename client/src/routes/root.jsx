import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header>
          <Header />
        </header>
        <main className="flex-grow mt-4 md:mt-20  mx-2 md:mx-20 md:my-20">
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
