import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductServices";
import { Link } from "react-router-dom";
import UrlPath from "../utils/UrlPath";
import Loading from "./Loading";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  
  const searchProducts = async () => {
    if (searchValue) {
      setLoading(true);
      setError(null);
      try {
        const results = await ProductService.searchProducts(searchValue);
        console.log(results);
        setProducts(results);
      } catch (err) {
        setError("Failed to fetch products. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setProducts([]);
    }
  };
  const searchData = () => {
    searchProducts();
  };
  return (
    <div className="mt-23">
      <div>
        <span class="mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
          <input
            type="text"
            value={searchValue}
            onChange={handleChange}
            placeholder="Search anything"
            class=" text-black bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
            name="topic"
          />
          <button
            onClick={searchData}
            class="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full  disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3"
          >
            Search
          </button>
        </span>
      </div>
      <br />
      <div>
      {loading && (
           <div className="mt-9">
            <Loading/>
          
          </div>
          
      )}
      {error && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md"
          role="alert"
        >
          <p>{error}</p>
        </div>
      )}
        {!loading && !error && (
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              return (
                <Link to={UrlPath.PD+"?data="+product.name}>
                <div className="rounded-lg m-h-64 p-3" key={product.id}>
                  <div class="rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <img
                      class="h-58 p-8 object-cover rounded-t-lg "
                      src={product.imgurl}
                      alt="Product Image"
                    />
                    <div class="p-4">
                      <h2 class="mb-1  font-medium dark:text-white text-gray-900">
                       {product.name}
                      </h2>
                      
                      <div class="flex items-center">
                        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                          $ {product.price}
                        </p>
                        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                          $25.00
                        </p>
                        <p class="ml-auto text-base font-medium text-green-500">
                          20% off
                        </p>
                      
                      </div>
                      <br/>
                      <button className="bg-blue-500 text-white w-full h-8 rounded-2xl">ADD TO CART</button>
                    </div>
                  </div>
                </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
