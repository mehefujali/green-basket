import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import NavLinks from "../../Components/NavLinks/NavLinks";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-primary-color/5">
      <nav>
        <Navbar />
        <NavLinks />
      </nav>
      <div>
        <Outlet />
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Main;
