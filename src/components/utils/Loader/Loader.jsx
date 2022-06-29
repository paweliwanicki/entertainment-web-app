import loaderGif from "./loader.gif";

const Loader = (props) => {
  return <img src={loaderGif} alt={`loader`} className={props.className} />;
};

export default Loader;
