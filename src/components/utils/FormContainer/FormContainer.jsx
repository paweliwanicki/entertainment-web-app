import propTypes from "prop-types";
import classes from "./FormContainer.module.scss";

const FormContainer = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmitHandler();
  };

  const classNames = props.classNames
    ? [props.classNames, classes.formContainer].join(" ")
    : classes.formContainer;

  return (
    <form onSubmit={submitHandler} className={classNames}>
      {props.children}
    </form>
  );
};

FormContainer.propTypes = {
  children: propTypes.node,
  onSubmit: propTypes.func,
  classNames: propTypes.string,
};

FormContainer.defaultProps = {
  children: null,
  onSubmit: null,
  classNames: "",
};

export default FormContainer;
