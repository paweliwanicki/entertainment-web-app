import classes from "./CustomHeader.module.scss";
import propTypes from "prop-types";

const CustomHeader = (props) => {
  return (
    <h2 className={classes.customHeader}>
      <span className={classes.greenLightColor}>{props.mainText}</span>{" "}
      {props.text}
    </h2>
  );
};

CustomHeader.propTypes = {
  mainText: propTypes.string,
  text: propTypes.string,
};

export default CustomHeader;
