import PropTypes from "prop-types";

const Logo = ({ white }) => {
  return (
    <div className=" flex items-center gap-1">
      <img
        className={`${white && "brightness-0 invert"} w-6 md:w-11`}
        src="https://res.cloudinary.com/dkal0omka/image/upload/v1736597894/green-basket-logo_jrijx7.png"
        alt=""
      />
      <h1 className={`${white?'text-white':'text-primary-color'} text-sm md:text-xl   lg:text-2xl font-bold flex flex-col leading-none  `}>
        Green <span className=" font-light my-0">Basket</span>
      </h1>
    </div>
  );
};

Logo.propTypes = {
  white: PropTypes.bool.isRequired,
};
export default Logo;
