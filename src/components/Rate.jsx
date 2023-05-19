import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";

const Rate = ({ rate }) => {
  const maxRate = 5;
  const yellowStar = rate;
  const regularStar = maxRate - rate;
  return (
    <div className={"flex"}>
      {[...Array(yellowStar)].map((_, index) => {
        return (
          <FontAwesomeIcon
            key={index}
            className={"text-orange-500 w-5 h-5"}
            icon={solidStar}
          ></FontAwesomeIcon>
        );
      })}
      {[...Array(regularStar)].map((_, index) => {
        return (
          <FontAwesomeIcon
            key={index + yellowStar}
            className={"text-orange-500 w-5 h-5"}
            icon={emptyStar}
          ></FontAwesomeIcon>
        );
      })}
    </div>
  );
};
Rate.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default Rate;
