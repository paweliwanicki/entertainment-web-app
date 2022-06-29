import  classes from "./CustomInput.module.scss";
import propTypes from "prop-types";
import Loader from "../Loader/Loader";

const CustomInput = (props) => {
  const validClassName = props.isValid ? classes.isValid : classes.isInvalid;
  const isValidated = props.isValidated;
  const validKey = props.isValid ? "success" : "error";
  const validationText = props.validationsText[validKey];

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
      {isValidated ? (
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

export default CustomInput;
