import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionHeader from "../../Shaired/SectionHeader";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const HomeCategories = () => {
  const axiosPublic = useAxiosPublic();
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/categories");
      return data;
    },
  });
  console.log(categories);
  return (
    <div className=" bg-primary-color/5  py-10 w-full mt-14">
      <SectionHeader
        title="Featured Categories"
        des="Choose your necessary products from this feature categories."
      />

      <div className=" container mx-auto mt-7">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true ,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            1920: {
              slidesPerView: 6,
              spaceBetween: 15,
            },

          }}
          loop={true}
        >
          {categories.map((category) => (
            <SwiperSlide key={category?._id}>
              <div className=" flex flex-1  items-center gap-2 bg-white w-fit p-3 px-5 rounded">
                <img className=" w-14" src={category?.image} alt="" />
                <div>
                  <h3>{category?.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCategories;
