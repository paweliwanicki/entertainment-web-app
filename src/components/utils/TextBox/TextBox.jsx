import classes from "./TextBox.module.scss";
import propTypes from "prop-types";

const TextBox = (props) => {
  const textColor = props.color;
  const classNames = props.classNames
    ? [classes.textBox, props.classNames].join(" ")
    : classes.textBox;

  return (
    <div className={classNames} onClick={props.onClick}>
      <p className={classes[textColor]}>{props.text}</p>
      {props.children}
    </div>
  );
};

TextBox.propTypes = {
  text: propTypes.string.isRequired,
  color: propTypes.string,
  children: propTypes.node,
};

TextBox.defaultProps = {
  color: "",
  children: null,
};

export default TextBox;
