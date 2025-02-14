import PropTypes from "prop-types";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render this when the countdown is complete
    return <span className="text-red-500 font-bold">Expired!</span>;
  } else {
    // Render the countdown
    return (
      <div className="flex  text-primary-color">
        <span className=" font-bold bg-primary-color bg-opacity-10 p-1 py-0">
          {days}
        </span>
        :
        <span className=" font-bold bg-primary-color bg-opacity-10 p-1 py-0">
          {hours}
        </span>
        :
        <span className=" font-bold bg-primary-color bg-opacity-10 p-1 py-0">
          {minutes}
        </span>
        :
        <span className=" font-bold bg-primary-color bg-opacity-10 p-1 py-0">
          {seconds}
        </span>
      </div>
    );
  }
};

const CountDown = ({ time }) => {
  return (
    <div>
      <Countdown date={new Date(time).getTime()} renderer={renderer} />
    </div>
  );
};
CountDown.propTypes = {
  time: PropTypes.string.isRequired,
};
export default CountDown;
