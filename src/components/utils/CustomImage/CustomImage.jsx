import classes from "./CustomImage.module.scss";
import propTypes from "prop-types";

const CustomImage = (props) => {
  const defaultClassNames = props.classNames
    ? [classes.customImage, props.classNames].join(" ")
    : classes.customImage;

  return <img src={props.src} alt={props.alt} className={defaultClassNames} />;
};

CustomImage.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  classNames: propTypes.string,
};

CustomImage.defaultProps = {
  classNames: "",
};

export default CustomImage;
