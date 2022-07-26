import classes from "./CustomInput.module.scss";
import propTypes from "prop-types";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const CustomInput = (props) => {
  let validClassName = "";

  const isValidated = props.isValidated;
  const validationText = props.validationText;
  const labelInfo = props.labelInfoText;

  const labelText = labelInfo ? (
    <div title={labelInfo}>
      <InfoOutlinedIcon />
    </div>
  ) : (
    ""
  );

  if (isValidated) {
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
  onChange: propTypes.func.isRequired,
  onBlur: propTypes.func,
  type: propTypes.string,
  value: propTypes.string,
  placeholder: propTypes.string,
  ref: propTypes.string,
  autoComplete: propTypes.string,
  classNames: propTypes.string,
  labelInfoText: propTypes.string,
  validationText: propTypes.string,
  isValid: propTypes.bool,
  isValidated: propTypes.bool,
};

CustomInput.defaultProps = {
  type: "text",
  value: undefined,
  placeholder: "",
  ref: null,
  autoComplete: "off",
  classNames: "",
  labelInfoText: "",
  validationText: "",
  onBlur: null,
  isValid: null,
  isValidated: false,
};

export default CustomInput;
