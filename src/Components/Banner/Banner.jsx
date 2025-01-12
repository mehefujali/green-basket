import Swiper from "../Swiper/SwiperBanner";

const Banner = () => {
  return (
    <div className=" container mx-auto mt-7  ">
      <div className=" flex items-center  justify-between">
        <div className=" w-8/12">
          <Swiper />
        </div>
        <div className=" w-full">
          <h1>Latest Super Discount Active Coupon Code</h1>
          <div>
            <div className=" flex gap-2 ">
              <img
                src="https://res.cloudinary.com/dkal0omka/image/upload/v1736681581/ins4_puuedf.webp"
                alt=""
              />
              <div>
                <h1 className=" text-lg text-primary-color font-bold">30%off</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
