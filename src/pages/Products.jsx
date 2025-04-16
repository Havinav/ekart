import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductService from "../services/ProductServices";
import UrlPath from "../utils/UrlPath";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const data = searchParams.get("data") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      if (data) {
        setLoading(true);
        setError(null);
        try {
          const results = await ProductService.searchProducts(data);
          setProducts(results);
        } catch (err) {
          setError("Failed to fetch products. Please try again...");
        } finally {
          setLoading(false);
        }
      } else {
        setProducts([]);
      }
    };

    fetchProducts();
  }, [data]);

  return (
    <div className="mt-20">
      <div>
        {loading && (
          <div className="flex justify-center items-center h-64"></div>
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
                <div className="rounded-lg m-h-64 p-3" key={product.id}>
                  <Link to={UrlPath.PD+"?data="+product.name}>
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
                        <br />
                        <button className="bg-blue-500 text-white w-full h-8 rounded-2xl">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
