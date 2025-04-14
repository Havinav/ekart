import React from "react";
import { Link } from "react-router-dom";
import UrlPath from "../utils/UrlPath";

const Login = () => {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data submitted:", loginData);
  };

  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2  px-3 md:px-10 mt-22">
        <div class="bg-blue-500 text-white p-5">
          <span className="font-bold text-xl">Login</span>
          <br />
          <span>Get access to your Orders, Wishlist and Recommendations</span>
        </div>
        <div class="bg-white p-5 md:p-10">
          <form class="max-w-md md:ml-auto w-full">
            <h3 class="text-gray-800 text-3xl font-extrabold mb-8">Sign in</h3>

            <div class="space-y-4">
              <div>
                <input
                  name="email" value={loginData.email} onChange={handleChange}
                  type="email"
                  autocomplete="email"
                  required
                  class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  name="password" value={loginData.password} onChange={handleChange}
                  type="password"
                  autocomplete="current-password"
                  required
                  class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Password"
                />
              </div>
              <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    for="remember-me"
                    class="ml-3 block text-sm text-gray-800"
                  >
                    Remember me
                  </label>
                </div>
                <div class="text-sm">
                  <a
                    href="jajvascript:void(0);"
                    class="text-blue-600 hover:text-blue-500 font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>

            <div class="!mt-8">
              <button
                type="button" onClick={handleSubmit}
                class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-orange-400 hover:bg-orange-700 focus:outline-none"
              >
                Log in
              </button>
            </div>
          </form>
          <span class="text-sm text-gray-500 mt-9 block text-center">
            <span class="font-bold text-blue-500">
              <Link to={UrlPath.SIGNUP}>New to Flipkart? Create an account</Link>
            </span>
            </span>
          <br />
        </div>
      </div>
    </>
  );
};

export default Login;
