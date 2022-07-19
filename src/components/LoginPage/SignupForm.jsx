import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./LoginPage.module.scss";
import Button from "../utils/Button/Button";
import CustomInput from "../utils/CustomInput/CustomInput";
import CustomHeader from "../utils/CustomHeader/CustomHeader";
import TextBox from "../utils/TextBox/TextBox";
import FormContainer from "../utils/FormContainer/FormContainer";
import { getMessage, loginUser, setError, setStatus } from "../../reducers/authorizationSlice";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../firebase";
import { getErrorMessage } from "./Errors";
import {SUCCESS, ERROR} from '../../utils/mixins';

const SignupForm = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("Can't be empty");

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [emailIsValid, setEmailIsValid] = useState(null);
  const [emailIsValidated, setEmailIsValidated] = useState(null);
  const [passwordIsValid, setPasswordIsValid] = useState(null);
  const [passwordIsValidated, setPasswordIsValidated] = useState(null);
  const [password2IsValid, setPassword2IsValid] = useState(null);
  const [password2IsValidated, setPassword2IsValidated] = useState(null);

  const message = useSelector(getMessage);
  console.log(message);

  const validateEmailAddress = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-|[\]]{6,50}$/;
    return regex.test(password);
  };

  const validateForm = () => {
    const validEmail = validateEmailAddress(email);
    if (email !== "" && !validEmail) {
      setEmailError("Wrong e-mail address");
    }
    const validPassword = password !== "" && validatePassword(password);
    const validPassword2 = password2 !== "" && password === password2;
    validatePassword(password);
    setEmailIsValid(validEmail);
    setPasswordIsValid(validPassword);
    setPassword2IsValid(validPassword2);
    setEmailIsValidated(true);
    setPasswordIsValidated(true);
    setPassword2IsValidated(true);
    return validEmail && validPassword && validPassword2;
  };

  const registerNewUser = () => {
    const isValid = validateForm();
    if (isValid) {
        createUserWithEmailAndPassword(auth, email,password2)
        .then(userAuth => {
          console.log(userAuth)
          dispatch(setStatus(SUCCESS));
          dispatch(loginUser(userAuth));
        })
        .catch(error => {
          console.log(error.code);
          dispatch(setStatus(ERROR));
          dispatch(setError(getErrorMessage(error.code)));
        })
      } 
    }

  return (
    <div className={[classes.signupForm, classes.fadeIn].join(" ")}>
      <CustomHeader mainText="Sign up" />
      {message && <TextBox text={message} classNames={classes.infoBox}></TextBox>}
      <FormContainer
        classes={classes.formContainer}
        onSubmitHandler={registerNewUser}
      >
        <CustomInput
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailIsValidated(false)}
          validationText={emailError}
          isValid={emailIsValid}
          isValidated={emailIsValidated}
          autoComplete="off"
        />
        <CustomInput
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordIsValidated(false)}
          validationText="Can't be empty"
          isValid={passwordIsValid}
          isValidated={passwordIsValidated}
          autoComplete="on"
          classNames={classes.customInput}
          labelInfoText="Password must containt at least 6 chars length,1 number and 1 special character"
        />

        <CustomInput
          id="repeat_password"
          name="repeat_password"
          type="password"
          placeholder="Repeat password"
          onChange={(e) => setPassword2(e.target.value)}
          onBlur={() => setPassword2IsValidated(false)}
          validationText="Passwords do not match"
          isValid={password2IsValid}
          isValidated={password2IsValidated}
          autoComplete="on"
          classNames={classes.customInput}
        />
        {
          
        <Button type="submit" text="Create an account" />
        }
      </FormContainer>
      <TextBox
        text="Already have an account?"
        classNames={classes.changeFormBox}
      >
        <span
          className={classes.changeFormLink}
          onClick={props.changeFormHandler}
        >
          Login
        </span>
      </TextBox>
    </div>
  );
};

export default SignupForm;
