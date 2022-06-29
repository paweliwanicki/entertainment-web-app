import { useState } from "react";
import classes from "./FormContainer.module.scss";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../Button/Button";
import propTypes from "prop-types";
//import request from "../../../utils/APIHandler";

const FormContainer = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  

  const inputOnChangeHandler = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };


  const validateInput = (e) => {
    setIsValid(true);
  };

  return (
    <div className={classes.formContainer}>
      <CustomInput
        type={`text`}
        id={props.inputID}
        placeholder={`Search for movies or TV series`}
        validationsText={""}
        isValid={isValid}
        showLoader={true}
        value={inputValue}
        onChange={inputOnChangeHandler}
      />
      <Button
        type={`button`}
        onClick={validateInput}
        text={""}
      />
      {props.children}
    </div>
  );
};

FormContainer.propTypes = {
  inputID: propTypes.string.isRequired,
  children: propTypes.node,
};

export default FormContainer;
