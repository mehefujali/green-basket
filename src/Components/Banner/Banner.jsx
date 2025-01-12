import CuponCard from "../CuponCard/CuponCard";
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
          <div className=" flex flex-col gap-3">
            <CuponCard
              off="30%"
              title="Winter Gift Voucher"
              cupon="WINTER30"
              sopingAmount="100"
              time="2025-02-02T01:02:06"
              image={"https://res.cloudinary.com/dkal0omka/image/upload/v1736681581/ins4_puuedf.webp"}
            />
            <CuponCard
              off="42%"
              title="Winter Gift Voucher"
              cupon="WINTER42"
              sopingAmount="200"
              time="2025-02-02T11:02:00"
              image={"https://res.cloudinary.com/dkal0omka/image/upload/v1736688643/ins2_asrday.webp"}
            />
            <CuponCard
              off="50%"
              title="Winter Gift Voucher"
              cupon="WINTER50"
              sopingAmount="300"
              time="2025-02-08T09:02:02"
              image={"https://res.cloudinary.com/dkal0omka/image/upload/v1736681581/ins4_puuedf.webp"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
