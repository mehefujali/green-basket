import { IoIosSearch } from "react-icons/io";
import Logo from "../../Shaired/Logo";
import { FiBell, FiShoppingCart, FiX } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { BsBox2 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className=" bg-primary-color  py-3 px-4 ">
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

          <div className="drawer drawer-end  z-50 right-0">
            <input
              id="my-drawer-4"
              type="checkbox"
              className="drawer-toggle hidden w-fit"
            />
            <div className="drawer-content right-0">
              {/* Page content here */}
              <label htmlFor="my-drawer-4">
                <div>
                  <IoMenu className=" text-2xl text-white cursor-pointer" />
                </div>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-white text-base-content min-h-full w-72 p-4 ">
                {/* Sidebar content here */}
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className=" w-fit cursor-pointer"
                >
                  <FiX className=" text-3xl" />
                </label>



                <div className=" mt-8 space-y-3">
                  <button className=" flex gap-1 items-center text-lg hover:bg-primary-color w-full px-2 rounded hover:bg-opacity-10"> <RiUser3Line/> Profile</button>
                  <button className=" flex gap-1 items-center text-lg hover:bg-primary-color w-full px-2 rounded hover:bg-opacity-10"> <FiShoppingCart/> Cart</button>
                  <button className=" flex gap-1 items-center text-lg hover:bg-primary-color w-full px-2 rounded hover:bg-opacity-10"> <BsBox2/> Order</button>
                  <button className=" flex gap-1 items-center text-lg hover:bg-primary-color w-full px-2 rounded hover:bg-opacity-10"> <BiSupport/> Contact Us</button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
