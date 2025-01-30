import PropTypes from "prop-types";

const SectionHeader = ({title,des}) => {
      return (
            <div className=" text-center">
                 <h1 className=" text-xl font-bold md:text-2xl ">{title}</h1>
                 <p className=" text-gray-600">{des}</p> 
            </div>
      );
};
SectionHeader.propTypes ={
      title: PropTypes.string.isRequired ,
      des: PropTypes.string.isRequired
}
export default SectionHeader;