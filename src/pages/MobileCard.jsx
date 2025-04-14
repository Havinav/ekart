import React from "react";

const mobileData = [
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/v/y/-original-imah4jz66dmcwhmd.jpeg?q=70",
    title: "IPhones",
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/g/l/-original-imah2yyfxkbhrgbz.jpeg?q=70",
    title: "Samsung",
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/n/9/-original-imah8ffza3kjyhwp.jpeg?q=70",
    title: "Realme",
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70",
    title: "Motorola",
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/g/z/-original-imah7jsp8bh3s4rv.jpeg?q=70",
    title: "POCO",
  },
];
const MobileCard = () => {
  return (
    <div>
      <div class="grid grid-cols-5 md:grid-cols-5 gap-4 bg-white">
        {mobileData.map((item, index) => (
          <div key={index} className="flex flex-col p-3">
            <div>
              <img src={item.imgurl} alt="" className="h-20 md:h-70 w-full" />
            </div>
            <h2 className="md:text-lg font-semibold text-black text-sm">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
      <br/>
      <div>
        <div class="container mx-auto px-5 py-2 bg-white">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/office-study-chair/x/b/l/-original-imah8j628zhsshmy.jpeg?q=70"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/shampoo-styling-chair/f/d/c/44-4-diamond-saloon-chair-kanishka-original-imah9y2byze9gktu.jpeg?q=70"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/office-study-chair/m/b/m/1-iron-58-42-oc-13-grey-oakcraft-120-original-imahfzvqk84jwf7w.jpeg?q=70"
                />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/television/r/d/j/-original-imah9m5yumvnrxzc.jpeg?q=70"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/x/k/f/-original-imaha5cqzhhe2reu.jpeg?q=70"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/2/q/z/-original-imah8f35rhuzyptd.jpeg?q=70"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
