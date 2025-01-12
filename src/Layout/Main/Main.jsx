import MenuSidebar from "../../Components/MenuSidebar/MenuSidebar";
import Navbar from "../../Components/Navbar/Navbar";
import NavLinks from "../../Components/NavLinks/NavLinks";

const Main = () => {
  return (
    <div>
      <nav >
        <Navbar />
        <NavLinks />
      </nav>
      <div>
        <MenuSidebar />
      </div>
    </div>
  );
};

export default Main;
