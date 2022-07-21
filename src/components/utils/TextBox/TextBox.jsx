import classes from "./TextBox.module.scss";
import propTypes from "prop-types";
import { SUCCESS } from "../../../utils/mixins";

const TextBox = (props) => {
  const textColor = props.color;
  let alertBoxClasses;
  if(props.status) {
    alertBoxClasses = props.status === SUCCESS ? classes.success : classes.error;
  } 

  let classNames = [alertBoxClasses, classes.textBox].join(" ");

  classNames = props.classNames
    ? [classNames, props.classNames].join(" ")
    : classNames;

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
