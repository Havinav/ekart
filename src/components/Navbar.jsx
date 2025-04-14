import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { BiUserCircle } from "react-icons/bi";
import UrlPath from "../utils/UrlPath";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLohgedIn, setIsLoggedIn] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.code == "Enter") {
        navigate(`/search?data=${searchValue}`)
        setSearchValue('')
      }
    });
  });

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-blue-700 p-4 fixed top-0 w-full">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Ekart</Link>
        </div>
        <div>
          <div class="pt-2 relative mx-auto text-gray-600">
            <input
              class="border-2 border-gray-300 bg-white h-10 px-1 pr-1 md:pr-20 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search" value={searchValue} onChange={handleChange}
              placeholder="Search"
            />
          </div>
        </div>
        <div>
          <Link
            to={UrlPath.CART}
            type="button"
            class="inline-flex  text-white items-center rounded-3xl justify-center p-3 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 text-sm font-medium leading-none dark:text-white "
          >
            <LuShoppingCart className="text-xl lg:me-1 " />
            <span class="hidden sm:flex text-xl"> Cart</span>
          </Link>
          <button
            type="button"
            class="inline-flex  text-white items-center rounded-lg justify-center p-3 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 text-sm font-medium leading-none dark:text-white "
          >
            {isLohgedIn ? (
              <Link to={UrlPath.PROFILE}>
                <BiUserCircle className="text-xl lg:me-1" />
              </Link>
            ) : (
              <Link to={UrlPath.LOGIN}>
                <BiUserCircle className="text-xl lg:me-1" />
              </Link>
            )}
            {isLohgedIn ? (
              <Link to={UrlPath.PROFILE} className="hidden sm:flex text-xl">
                Gopal
              </Link>
            ) : (
              <Link to={UrlPath.LOGIN} class="hidden sm:flex text-xl">
                {" "}
                Login
              </Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
