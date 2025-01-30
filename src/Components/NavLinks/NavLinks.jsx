import { AiOutlineHome } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { NavLink } from "react-router-dom";
import 'animate.css';
const NavLinks = () => {
      return (
            <div className=" py-1 border-b ">
                  <div className="container mx-auto px-3  justify-between flex items-center">
                        <div className=" flex items-center gap-2 md:gap-5">
                              <NavLink className="flex gap-1 items-center text-xs  md:text-sm xl:text-lg"><AiOutlineHome /> Home</NavLink>
                              <NavLink className="flex gap-1 items-center text-xs  md:text-sm xl:text-lg"><MdOutlineShoppingBasket /> Shop</NavLink>
                              <NavLink className="flex gap-1 items-center text-xs  md:text-sm xl:text-lg"> <BiSupport/> Contact Us</NavLink>
                        </div>
                        <div className=" w-fit relative">
                              <div className="bg-red-500 animate__animated animate__flash animate__infinite	 w-2 h-2 rounded-full absolute -right-1 -top-1"></div>
                              <div className=" bg-red-500 bg-opacity-10 text-red-600 px-2 rounded-sm  cursor-pointer select-none text-sm">Offers</div>
                        </div>
                  </div>
            </div>
      );
};

export default NavLinks;