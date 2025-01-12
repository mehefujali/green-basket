
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
        className="mySwiper"
      >
        <SwiperSlide>

            <div>
                  <img src="https://res.cloudinary.com/dkal0omka/image/upload/v1736681245/image_1_fdvzst.webp" alt="" />
            </div>
        </SwiperSlide>
        
        <SwiperSlide>

            <div>
                  <img src="https://res.cloudinary.com/dkal0omka/image/upload/v1736681245/image_1_fdvzst.webp" alt="" />
            </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
};

export default SwiperBanner;