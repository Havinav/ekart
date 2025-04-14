import React from "react";

const products = [
  {
    imageSrc:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/motorcycle/d/n/f/drum-self-kick-passion-drum-drum-97-2-booking-for-ex-showroom-original-imah6ceyz5ecdtys.jpeg?q=70",
    color: "Black",
  },
  {
    imageSrc:
      "https://rukminim2.flixcart.com/image/300/300/xif0q/motorcycle/5/y/j/xtreme-125r-ibs-self-kick-xtreme-125r-ibs-disc-124-7-booking-for-original-imah6ceyjscqbefy.jpeg?q=90",
    color: "Black",
  },
  {
    imageSrc:
      "https://rukminim2.flixcart.com/image/300/300/xif0q/scooter-moped/c/n/4/-original-imah58qgyzdgyagq.jpeg?q=90",
    color: "Blue",
  },
  {
    imageSrc:
      "https://rukminim2.flixcart.com/image/300/300/xif0q/scooter-moped/g/n/b/2025-drum-destini-prime-booking-for-ex-showroom-price-pan-india-original-imahauhzpkebhbhy.jpeg?q=90",
    color: "White",
  },
];
const ApplianceCard = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-9">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Bikes</h2>

          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplianceCard;
