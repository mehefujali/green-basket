
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./swiperbanner.css";
const SwiperBanner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiperBanner max-w-xs md:max-w-3xl lg:max-w-5xl"
        
      >
        <SwiperSlide>

            <div>
                  <img src="https://res.cloudinary.com/dkal0omka/image/upload/v1736681245/image_1_fdvzst.webp" alt="" />
            </div>
        </SwiperSlide>
        
        <SwiperSlide>

            <div className="">
                  <img src="https://res.cloudinary.com/dkal0omka/image/upload/v1736681245/image_ywu1n1.webp" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>

            <div className="">
                  <img src="https://res.cloudinary.com/dkal0omka/image/upload/v1736681244/image_2_tniry8.webp" alt="" />
            </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
};

export default SwiperBanner;
