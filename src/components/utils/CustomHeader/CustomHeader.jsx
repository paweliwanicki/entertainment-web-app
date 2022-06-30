import classes from "./CustomHeader.module.scss";
import propTypes from "prop-types";

const CustomHeader = (props) => {
  return (
    <h2 className={classes.customHeader}>
      {props.mainText}
    </h2>
  );
};

CustomHeader.propTypes = {
  mainText: propTypes.string,
  text: propTypes.string,
};

export default CustomHeader;
