import React from 'react'

const bikeData = [
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/motorcycle/f/n/j/i3s-self-kick-splendor-i3s-drum-97-2-booking-for-ex-showroom-original-imah6ceyypsearut.jpeg?q=70",
    title: "Hero Spender",
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/300/300/xif0q/motorcycle/5/y/j/xtreme-125r-ibs-self-kick-xtreme-125r-ibs-disc-124-7-booking-for-original-imah6ceyjscqbefy.jpeg?q=90",
    title: "Hero Xtreme",
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/300/300/xif0q/scooter-moped/u/o/v/zx-disc-xoom-zx-booking-for-ex-showroom-price-pan-india-hero-original-imahauhpv3yagaqd.jpeg?q=90",
    title: "Hero XOOM",
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/electric-bike-scooter/9/s/0/-original-imah2ay3p9rqgjvn.jpeg?q=70",
    title: "Lectrix LXS",
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/electric-bike-scooter/j/m/e/ampere-reo-li-plus-portable-charger-reo-li-plus-drum-booking-for-original-imagx35z5w5ssddv.jpeg?q=70",
    title: "Ampere Reo Li",
  },
];
const ApplianceCard = () => {
  return (
    <div>
      <div class="grid grid-cols-5 md:grid-cols-5 gap-4 bg-white">
        {bikeData.map((item, index) => (
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
    </div>
  )
}

export default ApplianceCard