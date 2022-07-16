import loaderGif from "./loader.gif";
import classes from './Loader.module.scss';

const Loader = (props) => {

  return (
  <img src={loaderGif} alt={`loader`} className={[classes.loader,classes.slideFwdCenter].join(" ")} />);
};

export default Loader;
