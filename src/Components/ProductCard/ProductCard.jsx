import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white w-full h-full flex flex-col justify-between items-center">
      <div className="h-36 w-36 md:h-52 md:w-52 xl:h-64 xl:w-64 2xl:w-72 2xl:h-72 ">
        <img
          className=" h-full w-full object-contain"
          src={product?.image}
          alt=""
        />
      </div>
      <div className=" p-3 md:p-4 xl:p-5 text-start w-full ">
        <h3 className=" text-sm xl:text-lg  text-gray-600">{product?.name}</h3>
        <div className=" flex justify-between items-center">
          <h4 className=" font-bold text-sm xl:text-lg">₹{product?.price}</h4>
          <div className=" w-fit h-fit border-2 border-primary-color p-2 rounded cursor-pointer select-none">
            <img
              className=" w-5 h-5"
              src="https://i.imgur.com/14n3wPG.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
export default ProductCard;
