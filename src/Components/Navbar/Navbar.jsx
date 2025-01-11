import { IoIosSearch } from "react-icons/io";
import Logo from "../../Shaired/Logo";
import { FiBell, FiShoppingCart } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className=" bg-primary-color  py-3 ">
      <div className=" container mx-auto px-2  gap-12 flex justify-between items-center ">
        <Logo white={true}></Logo>

        <div className=" md:w-4/12 w-full  relative">
          <IoIosSearch className=" absolute right-3 top-2 text-lg  " />
          <input
            placeholder="Search..."
            className=" px-8 w-full rounded-sm input-sm hover:outline-none focus:outline-none input "
            type="search"
          />
        </div>

        <div className=" flex items-center gap-3">
          <div className="  hidden md:flex gap-7 select-none ">
            <div className="indicator">
              <span className="indicator-item badge bg-white -top-2">3</span>
              <button>
                <FiBell className="text-2xl text-white" />
              </button>
            </div>
            <div className="indicator">
              <span className="indicator-item badge bg-white -top-2">9</span>
              <button>
                <FiShoppingCart className="text-2xl text-white" />
              </button>
            </div>
            <RiUser3Line className="text-2xl text-white cursor-pointer" />
          </div>
          <div>
            <IoMenu className=" text-2xl text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
