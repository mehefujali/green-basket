import CountDown from "../Countdown/CountDown";
import Swiper from "../SwiperBanner/SwiperBanner";



const Banner = () => {
  return (
    <div className="container mx-auto mt-7">
      <div className="flex items-center justify-between">
        <div className="w-8/12">
          <Swiper />
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-4">
            Latest Super Discount Active Coupon Code
          </h1>
          <div>
            <div className="flex gap-2">
              <img
                src="https://res.cloudinary.com/dkal0omka/image/upload/v1736681581/ins4_puuedf.webp"
                alt="Discount"
             
              />
              <div>
                <div className="flex gap-4 items-center">
                  <h1 className="text-lg text-primary-color font-bold">
                    30% Off
                  </h1>
                  <p className="bg-primary-color bg-opacity-10 text-primary-color rounded-full px-2">
                    Active
                  </p>
                </div>
                <h1 className="text-lg text-red-500 font-bold">
                  Winter Gift Voucher
                </h1>
                <h1 className="text-primary-color text-xl mt-2">
                        <CountDown/>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
