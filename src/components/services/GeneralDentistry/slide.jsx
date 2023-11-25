import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <video className="h-full w-full rounded-lg" controls autoPlay>
            <source
              src="https://res.cloudinary.com/db1i46uiv/video/upload/v1700947035/WhatsApp_Video_2023-11-25_at_09.44.27_1fd64fe5_bjb9rl.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video className="h-full w-full rounded-lg" controls autoPlay>
            <source
              src="https://res.cloudinary.com/db1i46uiv/video/upload/v1700947035/WhatsApp_Video_2023-11-25_at_09.44.27_1fd64fe5_bjb9rl.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video className="h-full w-full rounded-lg" controls autoPlay>
            <source
              src="https://res.cloudinary.com/db1i46uiv/video/upload/v1700947035/WhatsApp_Video_2023-11-25_at_09.44.27_1fd64fe5_bjb9rl.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video className="h-full w-full rounded-lg" controls autoPlay>
            <source
              src="https://res.cloudinary.com/db1i46uiv/video/upload/v1700947035/WhatsApp_Video_2023-11-25_at_09.44.27_1fd64fe5_bjb9rl.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
