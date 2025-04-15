import React, { useState } from "react";
import { Link } from "react-router-dom";
import UrlPath from "../utils/UrlPath";
import { CiSearch } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  return (
    <div className="flex justify-between p-3 text-white bg-blue-600 fixed top-0 w-full">
      <div>
        <Link to={UrlPath.DASH} className="cursor-pointer">
          <span className="text-2xl font-bold">Ekart</span>
        </Link>
      </div>
      <div></div>
      <div className="flex -mt-2 me-1">
        <Link
          to={UrlPath.SEARCH}
          type="button"
          class="inline-flex cursor-pointer text-white items-center rounded-3xl justify-center p-3 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 text-sm font-medium leading-none dark:text-white "
        >
          <FaSearch  className="text-xl lg:me-1 " />
          <span class=" text-xl"> Search</span>
        </Link>
        <Link
          to={UrlPath.CART}
          type="button"
          class="inline-flex cursor-pointer text-white items-center rounded-3xl justify-center p-3 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 text-sm font-medium leading-none dark:text-white "
        >
          <LuShoppingCart className="text-xl lg:me-1 " />
          <span class=" text-xl"> Cart</span>
        </Link>
        {isUserLoggedIn ? (
         <Link
         to={UrlPath.PROFILE}
         type="button"
         class="inline-flex cursor-pointer text-white items-center rounded-3xl justify-center p-3 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 text-sm font-medium leading-none dark:text-white "
       >
         <FaRegUserCircle className=" me-2 text-xl lg:me-1 " />
         <span class=" text-xl"> Gopal</span>
       </Link>
        ) : (
          <Link
          to={UrlPath.LOGIN}
          type="button"
          class="inline-flex  text-white items-center rounded-3xl justify-center p-3 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 text-sm font-medium leading-none dark:text-white "
        >
          <FaRegUserCircle className="text-xl lg:me-1 " />
          <span class=" text-xl"> Login</span>
        </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
