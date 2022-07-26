import classes from "./Button.module.scss";
import propTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className={classes.customButton}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  onClick: propTypes.func,
  type: propTypes.string,
  text: propTypes.string,
  disabled: propTypes.bool,
};

Button.defaultProps = {
  type: "button",
  text: "",
  disabled: false,
  onClick: null,
};

export default Button;
