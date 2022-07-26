import classes from "./CustomHeader.module.scss";
import propTypes from "prop-types";

const CustomHeader = (props) => {
  return <h2 className={classes.customHeader}>{props.text}</h2>;
};

CustomHeader.propTypes = {
  text: propTypes.string,
};

CustomHeader.defaultProps = {
  text: "",
};

export default CustomHeader;
