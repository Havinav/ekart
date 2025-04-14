import React from "react";

const LaptopsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
      <div class="max-w-sm flex flex-c bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="p-1">
          <img
            class="rounded-t-lg"
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/c/w/5/-original-imagpecqk6gdp9dh.jpeg?q=70"
            alt=""
          />
        </a>
        <div class="p-5">
          <span>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              HP 
            </h5>
          </span>
        </div>
      </div>
      <div class="max-w-sm flex flex-c bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="p-1">
          <img
            class="rounded-t-lg"
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/w/u/e/-original-imah46f8th3pnphq.jpeg?q=70"
            alt=""
          />
        </a>
        <div class="p-5">
          <span>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SAMSUNG
            </h5>
          </span>
        </div>
      </div>
      <div class="max-w-sm flex flex-c bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="p-1">
          <img
            class="rounded-t-lg"
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/7/h/8/vostro-3520-thin-and-light-laptop-dell-original-imah8zwby3ywckju.jpeg?q=70"
            alt=""
          />
        </a>
        <div class="p-5">
          <span>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            DELL
            </h5>
          </span>
        </div>
      </div>
      <div class="max-w-sm flex flex-c bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="p-1">
          <img
            class="rounded-t-lg"
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/a/a/o/-original-imah7tknwg7brmfv.jpeg?q=70"
            alt=""
          />
        </a>
        <div class="p-5">
          <span>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Acer
            </h5>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LaptopsCard;
