import propTypes from "prop-types";

const FormContainer = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const valid = props.onSubmitHandler();
    console.log(valid);
    return valid;
  };

  return (
    <form onSubmit={submitHandler} className={props.classes}>
      {props.children}
    </form>
  );
};

FormContainer.propTypes = {
  children: propTypes.node,
};

export default FormContainer;
