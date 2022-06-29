import classes from "./CustomImage.module.scss";
import propTypes from "prop-types";

const CustomImage = (props) => {
  const className = classes[props.className]
    ? classes[props.className]
    : props.className;

  return <img src={props.src} alt={props.alt} className={className} />;
};

CustomImage.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
  className: propTypes.string,
};

export default CustomImage;
