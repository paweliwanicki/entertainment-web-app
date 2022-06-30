import  classes from "./CustomInput.module.scss";
import propTypes from "prop-types";
import Loader from "../Loader/Loader";

const CustomInput = (props) => {

  const validClassName = props.isValid ? classes.isValid : classes.isInvalid;
  const isValidated = props.isValidated;
  const validationText = props.validationText;
  
  return (
    <div className={classes.inputContainer}>
      <input
        id={props.id}
        className={classes.customInput}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        ref={props.inputRef}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
      {props.isSending && props.showLoader && (
        <Loader className={classes.customInputLoader} />
      )}
      {isValidated && !props.isValid ? (
        <label
          className={[classes.customLabel, validClassName].join(" ")}
          htmlFor={props.id}
        >
          {validationText}
        </label>
      ) : null}
    </div>
  );
};

CustomInput.propTypes = {
  id: propTypes.string.isRequired,
  type: propTypes.string,
  value: propTypes.string,
  placeholder: propTypes.string,
  ref: propTypes.string,
};

CustomInput.defaultProps = {
  type: 'text',
  value: undefined,
  placeholder: '',
  ref: null,
}

export default CustomInput;
