import React from 'react'
import Slides from './Slides'
import MobileCard from './MobileCard'
import ApplianceCard from './ApplianceCard'
import LaptopsCard from './LaptopsCard'
import FunitureCard from './FunitureCard'
import Footer from './Footer'

const headerData = [
  {
    imgurl : "https://rukminim2.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100",
    title : "Mobiles"
  },
  {
    imgurl : "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/0139228b2f7eb413.jpg?q=100",
    title : "Appliances"
  },
  {
    imgurl : "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/3/g/m/-original-imah3xrqttkdbss4.jpeg?q=70",
    title : "Laptops"
  },
  {
    imgurl : "https://rukminim2.flixcart.com/image/300/300/xif0q/scooter-moped/g/n/b/2025-drum-destini-prime-booking-for-ex-showroom-price-pan-india-original-imahauhzpkebhbhy.jpeg?q=90",
    title : "Bikes"
  },
  {
    imgurl :"https://rukminim2.flixcart.com/image/612/612/xif0q/gaming-chair/j/n/h/-original-imah933enzngmnsv.jpeg?q=70",
    title : "Furniture"
  }
]
const Dashboard = () => {
  return (
    <div className='mt-25 lg:mt-25 md:20 p-1 rounded-b-lg'>
      <div className='grid grid-cols-5 md:grid-cols-5 bg-white gap-4 md:gap-25 lg:gap-55 rounded-xl'>
        {headerData.map((item, index) => (
          <div key={index} className='flex flex-col items-center'>
            <img src={item.imgurl} alt={item.title} className='w-7 h-10 ' />
            <h2 className='md:text-lg font-semibold text-black text-sm'>{item.title}</h2>
          </div>
        ))}
      </div> 
      <br/>
      <div>
        <Slides />
      </div> 
      <br/>
      <div>
        <MobileCard/>
      </div>
      <br/>
      <div>
        <ApplianceCard/>
      </div>
      <br/>
      <div>
        <LaptopsCard/>
      </div>
      <br/>
      <div>
        <FunitureCard/>
      </div>
      <br/>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Dashboard