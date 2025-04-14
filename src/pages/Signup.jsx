import React from "react";
import { Link } from "react-router-dom";
import UrlPath from "../utils/UrlPath";

const Signup = () => {
  const [signupData, setSignupData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data submitted:", signupData);
  };
  return (
    <div className="mt-25">
      <div class="grid grid-cols-1 md:grid-cols-2  px-3 md:px-10">
        <div class="bg-blue-500 text-white p-5">
          <span className="font-bold text-xl">Looks like you're new here!</span>
          <br /> <br />
          <span>Sign up with your mobile number to get started</span>
          <br /> <br />
          <span className="font-bold text-xl underline">
            <Link to={UrlPath.LOGIN}>Login</Link>
          </span>
        </div>
        <div class="bg-white p-5 md:p-10">
          <form class=" w-full">
            <h3 class="text-3xl font-extrabold mb-2 text-orange-500">
              New Account
            </h3>

            <div class="space-y-4">
              <span class="text-gray-800 text-sm font-semibold">
                First Name
              </span>
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={signupData.firstName}
                  onChange={handleChange}
                  required
                  class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="first Name"
                />
              </div>
              <span class="text-gray-800 text-sm font-semibold">Last Name</span>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={signupData.lastName}
                  onChange={handleChange}
                  required
                  class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="last Name"
                />
              </div>
              <span class="text-gray-800 text-sm font-semibold">Email</span>
              <div>
                <input
                  type="text"
                  name="email"
                  value={signupData.email}
                  onChange={handleChange}
                  required
                  class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="email"
                />
              </div>
              <span class="text-gray-800 text-sm font-semibold">
                Mobile Number
              </span>
              <div>
                <input
                  type="text"
                  name="mobileNumber"
                  value={signupData.mobileNumber}
                  onChange={handleChange}
                  required
                  class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="mobile number"
                />
              </div>
              <span class="text-gray-800 text-sm font-semibold">Password</span>
              <div>
                <input
                  value={signupData.password}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  required
                  class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="password"
                />
              </div>
              <div class="flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit" onClick={handleSubmit}
                  class="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
