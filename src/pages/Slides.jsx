import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const Slides = () => {
  return (
    <div>
    <Swiper
     modules={[Autoplay]} // Include the Autoplay module
     spaceBetween={30}    // Space between slides
     slidesPerView={1}    // Number of slides visible at once
     autoplay={{
       delay: 2500,       // Delay between transitions in milliseconds (2.5 seconds)
       disableOnInteraction: false, // Autoplay won't stop after user interaction
     }}
     loop={true}          // Enable looping
     onSlideChange={() => console.log('')}
     onSwiper={(swiper) => console.log('', swiper)}
   >
     <SwiperSlide>
       <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/42382089ed9633c6.jpeg?q=20"
         className=" w-full rounded-lg"
        />
       </div>
     </SwiperSlide>
     <SwiperSlide>
       <div>
       <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/32ae7a24a81ac88a.jpeg?q=20"
         className="h-auto w-full rounded-lg"
        />
       </div>
     </SwiperSlide>
     <SwiperSlide>
       <div>
       <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/d23bf6762667b343.jpeg?q=20"
         className="h-auto w-full rounded-lg"
        />
       </div>
     </SwiperSlide>
     <SwiperSlide>
       <div>
       <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/ac303d31c766a1be.jpeg?q=20"
         className="h-auto w-full rounded-lg"
        />
       </div>
     </SwiperSlide>
     <SwiperSlide>
       <div>
       <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/7850424b771b8f98.jpg?q=20"
         className="h-auto w-full rounded-lg"
        />
       </div>
     </SwiperSlide>
     <SwiperSlide>
       <div>
       <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/66b29ac6e4fc9119.jpg?q=20"
         className="h-auto w-full rounded-lg"
        />
       </div>
     </SwiperSlide>
   </Swiper>
   </div>
  )
}

export default Slides