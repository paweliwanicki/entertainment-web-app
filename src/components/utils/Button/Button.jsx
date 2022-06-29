
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
  type: propTypes.string,
  onClick: propTypes.func,
  text: propTypes.string,
  disabled: propTypes.bool,
};

export default Button;
