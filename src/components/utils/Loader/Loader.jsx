import loaderGif from "./loader.gif";
import classes from "./Loader.module.scss";

const Loader = (props) => {
  let classNames = [classes.loader, classes.slideFwdCenter].join(" ");
  classNames = props.classNames
    ? [classNames, props.classNames].join(" ")
    : classNames;
  return <img src={loaderGif} alt={`loader`} className={classNames} />;
};

export default Loader;
