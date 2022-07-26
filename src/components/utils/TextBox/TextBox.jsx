import classes from "./TextBox.module.scss";
import propTypes from "prop-types";
import { SUCCESS } from "../../../utils/mixins";

const TextBox = (props) => {
  const textColor = props.color;
  let alertBoxClasses = "";

  if (props.status) {
    alertBoxClasses =
      props.status === SUCCESS ? classes.success : classes.error;
  }

  const defaultClassNames = [alertBoxClasses, classes.textBox].join(" ");

  const classNames = props.classNames
    ? [defaultClassNames, props.classNames].join(" ")
    : defaultClassNames;

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
  classNames: propTypes.string,
  children: propTypes.node,
  onClick: propTypes.func,
  status: propTypes.string,
};

TextBox.defaultProps = {
  color: "",
  classNames: "",
  children: null,
  onClick: null,
  status: "",
};

export default TextBox;
