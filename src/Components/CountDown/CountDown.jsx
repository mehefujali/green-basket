import PropTypes from "prop-types";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render this when the countdown is complete
    return <span className="text-red-500 font-bold">Expired!</span>;
  } else {
    // Render the countdown
    return (
      <div className="flex gap-2 text-primary-color">
        <span className="text-lg font-bold bg-primary-color bg-opacity-10 p-2 py-0">
          {days}
        </span>
        :
        <span className="text-lg font-bold bg-primary-color bg-opacity-10 p-2 py-0">
          {hours}
        </span>
        :
        <span className="text-lg font-bold bg-primary-color bg-opacity-10 p-2 py-0">
          {minutes}
        </span>
        :
        <span className="text-lg font-bold bg-primary-color bg-opacity-10 p-2 py-0">
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
