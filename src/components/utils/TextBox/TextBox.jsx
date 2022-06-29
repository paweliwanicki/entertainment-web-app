import classes from "./TextBox.module.scss";
import propTypes from "prop-types";

const TextBox = (props) => {
  // define color in style -> default #fff
  const textColor = props.color;
  return (
    <div className={classes.textBox}>
      <p className={classes[textColor]}>{props.text}</p>
    </div>
  );
};

TextBox.propTypes = {
  text: propTypes.string.isRequired,
  color: propTypes.string,
};

export default TextBox;
