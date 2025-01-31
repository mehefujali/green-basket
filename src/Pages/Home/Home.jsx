import Banner from "../../Components/Banner/Banner";
import HomeCategories from "../../Components/HomeCategories/HomeCategories";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div className=" ">
      <Banner />
      <div>
        <HomeCategories />
      </div>
      <div className=" my-14">
            <PopularProducts/>
      </div>
    </div>
  );
};

export default Home;
