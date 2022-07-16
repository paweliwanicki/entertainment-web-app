import classes from "./CustomInput.module.scss";
import propTypes from "prop-types";
import Loader from "../Loader/Loader";

const CustomInput = (props) => {
  let validClassName = "";
  if (props.isValidated) {
    validClassName = props.isValid ? classes.isValid : classes.isInvalid;
  }

  const defaultClassNames =
    validClassName !== ""
      ? [classes.inputContainer, validClassName].join(" ")
      : classes.inputContainer;

  const classNames = props.classNames
    ? [defaultClassNames, props.classNames].join(" ")
    : defaultClassNames;

  const inputClassNames = [classes.customInput, validClassName].join(" ");

  const validationText = props.validationText;
  let labelText = "";
  //const labelInfo = props.labelInfoText;
  //labelText = labelInfo ? <FaBeer title={labelInfo} /> : "";

  return (
    <div className={classNames}>
      <input
        id={props.id}
        className={inputClassNames}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        ref={props.inputRef}
        onBlur={props.onBlur}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
      />
      {props.isSending && props.showLoader && (
        <Loader className={classes.customInputLoader} />
      )}
      {props.isValidated && !props.isValid ? (
        <label
          className={[classes.customLabel, validClassName].join(" ")}
          htmlFor={props.id}
        >
          {validationText}
        </label>
      ) : (
        <label className={classes.customLabel} htmlFor={props.id}>
          {labelText}
        </label>
      )}
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
  type: "text",
  value: undefined,
  placeholder: "",
  ref: null,
};

export default CustomInput;
