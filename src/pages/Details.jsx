import React from "react";
import { Link, Outlet } from "react-router-dom";
import UrlPath from "../utils/UrlPath";
import {  FaJediOrder, FaRegUserCircle } from "react-icons/fa";
import { CiSaveUp1 } from "react-icons/ci";

const Details = () => {
 
  return (
    <div className="mt-22 p-5 md:p-2">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="bg-white p-1 md:p-10 w-full md:w-1/5 shadow-md rounded-md">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
            alt="User Icon"
            className="w-20 h-20 mx-auto mb-5"
          />
          <span className="text-center items-center justify-center text-xl text-black font-bold">
            Hello,Gopal
          </span>
          <br /> <br />
          <div className="items-center flex">
            <Link to={UrlPath.ORDERS} className="flex items-center gap-2">
              <span className="text-gray-500 text-sm hover:text-blue-500 flex items-center gap-2">
                <FaJediOrder /> MY ORDERS
              </span>
            </Link>
          </div>
          <br/>
          <hr class="border-gray-800 dark:border-white"/>
          <br />
          <div className="items-center">
            <span className="text-gray-500 text-sm hover:text-blue-500 flex items-center gap-2">
              <FaRegUserCircle /> ACCOUNT SETTINGS
            </span>
            <br />
            &emsp;{" "}
            <Link to={UrlPath.PROFILE} className="">
              <span className="text-gray-500 hover:text-blue-500">
                Profile Information
              </span>
            </Link>
            <br />
            <br />
            &emsp;{" "}
            <Link to={UrlPath.ADDRESSES} className="">
              <span className="text-gray-500 hover:text-blue-500">
                Manage Addresses
              </span>
            </Link>
          </div>
          <br />
          <hr class="border-gray-800 dark:border-white"/>
          <br />
          <div className="items-center -ml-1">
            <span className="text-gray-500 text-sm hover:text-blue-500 flex items-center gap-2">
              <CiSaveUp1 />
              LOGOUT
            </span>
          </div>

        </div>
        <div className="bg-white p-3 md:p-3 w-full md:w-3/4 shadow-md rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Details;
