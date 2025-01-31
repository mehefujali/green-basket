import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../Shaired/SectionHeader";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ProductCard from "../ProductCard/ProductCard";

const PopularProducts = () => {
  const axiosPublic = useAxiosPublic();
  const { data: popularProducts = [] } = useQuery({
    queryKey: ["popular-products"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/popular-products");
      return data;
    },
  });

  return (
    <div>
      <div className=" container mx-auto w-11/12 md:w-full ">
        <SectionHeader
          title="Popular Products for Daily Shopping"
          des="See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping."
        />
        <div className=" min-h-96 gap-6   mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {popularProducts?.map((product) => (
            <ProductCard key={product?._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
