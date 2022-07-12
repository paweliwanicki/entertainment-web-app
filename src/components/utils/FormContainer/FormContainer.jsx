import propTypes from "prop-types";

const FormContainer = (props) => {
  
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmitHandler();
  };

  return (
    <form onSubmit={submitHandler} className={props.classes}>
      {props.children}
    </form>
  );
};

FormContainer.propTypes = {
  children: propTypes.node,
  onSubmit: propTypes.func,
};

FormContainer.defaultProps = {
  children: null,
  onSubmit: null,
};

export default FormContainer;
