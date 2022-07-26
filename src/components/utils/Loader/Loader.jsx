import loaderGif from "./loader.gif";
import classes from "./Loader.module.scss";
import propTypes from "prop-types";

const Loader = (props) => {
  const defaultClassNames = [classes.loader, classes.slideFwdCenter].join(" ");
  const classNames = props.classNames
    ? [defaultClassNames, props.classNames].join(" ")
    : defaultClassNames;
  return <img src={loaderGif} alt={`loader`} className={classNames} />;
};

Loader.propTypes = {
  classNames: propTypes.string,
};

Loader.defaultProps = {
  classNames: "",
};

export default Loader;
