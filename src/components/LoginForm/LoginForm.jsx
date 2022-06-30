import Button from "../utils/Button/Button";
import CustomInput from "../utils/CustomInput/CustomInput";
import CustomHeader from "../utils/CustomHeader/CustomHeader";
import classes from "./LoginForm.module.scss";
import TextBox from "../utils/TextBox/TextBox";
import { useState } from "react";
import FormContainer from "../utils/FormContainer/FormContainer";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailIsValid, setEmailIsValid] = useState(null);
  const [passwordIsValid, setPasswordIsValid] = useState(null);

  const validateEmailAddress = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = (password) => {
    return true;
  };

  const validateForm = () => {
    const emailIsValid = email !== '' && validateEmailAddress(email);
    const passwordIsValid = password !== '';
    setEmailIsValid(emailIsValid);
    setPasswordIsValid(passwordIsValid);
    console.log(emailIsValid);
    console.log(passwordIsValid);
    return emailIsValid && passwordIsValid;
  } 

  return (
    <div className={classes.loginForm}>
      <CustomHeader mainText="Login" />

      <FormContainer classes={classes.formContainer} onSubmitHandler={validateForm}>
        <CustomInput
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          validationText="Can't be empty"
          isValid={emailIsValid}
          isValidated={emailIsValid}
        />
        <CustomInput
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onBlur={validatePassword}
          onChange={(e) => setPassword(e.target.value)}
          validationText="Can't be empty"
          isValid={passwordIsValid}
          isValidated={passwordIsValid}
        />
        <Button type="submit" text="Login to your account" />
      </FormContainer>
      <div className={classes.signupLinkContainer}>
        <TextBox text="Don’t have an account?">
          {" "}
          <a href="#">Sign Up</a>
        </TextBox>
      </div>
    </div>
  );
};

export default LoginForm;
