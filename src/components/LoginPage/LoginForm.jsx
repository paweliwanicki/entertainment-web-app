import { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./LoginPage.module.scss";
import Button from "../utils/Button/Button";
import CustomInput from "../utils/CustomInput/CustomInput";
import CustomHeader from "../utils/CustomHeader/CustomHeader";
import TextBox from "../utils/TextBox/TextBox";
import FormContainer from "../utils/FormContainer/FormContainer";
import {
  //setIsAuthenticated,
  setIsSigning,
} from "../../reducers/authorizationSlice";
import request from "../..//utils/APIHandler";
import {auth} from '../../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
// const logInWithEmailAndPassword = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const LoginForm = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailIsValid, setEmailIsValid] = useState(null);
  const [emailIsValidated, setEmailIsValidated] = useState(null);
  const [passwordIsValid, setPasswordIsValid] = useState(null);
  const [passwordIsValidated, setPasswordIsValidated] = useState(null);

  const validateForm = () => {
    const validEmail = email !== "";
    const validPassword = password !== "";
    setEmailIsValid(validEmail);
    setEmailIsValidated(true);
    setPasswordIsValid(validPassword);
    setPasswordIsValidated(true);
    return validEmail && validPassword;
  };

  const loginHandler = () => {
    // simulate login api handler -> for test cases
    const valid = validateForm();
    
    dispatch(setIsSigning(true));
    try {
   //   await signInWithEmailAndPassword(auth, email, password);
      dispatch(() => signInWithEmailAndPassword(auth,email,password));
    } catch (err) {
      console.error(err);
      alert(err.message);
    }

    if (valid) {
      return dispatch(() => {
        const loginRequest = request();
        return loginRequest.then(() => {
          //dispatch(setIsSigning(false));
          //dispatch(setIsAuthenticated(true));
        });
      });
    }
  };

  return (
    <div className={[classes.loginForm, classes.fadeIn].join(" ")}>
      <CustomHeader mainText="Login" />

      <FormContainer
        classes={classes.formContainer}
        onSubmitHandler={loginHandler}
      >
        <CustomInput
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          validationText="Can't be empty"
          isValid={emailIsValid}
          isValidated={emailIsValidated}
          autoComplete="off"
          onBlur={() => setEmailIsValidated(false)}
        />
        <CustomInput
          classNames={classes.customInput}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          validationText="Can't be empty"
          isValid={passwordIsValid}
          isValidated={passwordIsValidated}
          autoComplete="on"
          onBlur={() => setPasswordIsValidated(false)}
        />
        <Button type="submit" text="Login to your account" />
      </FormContainer>
      <TextBox text="Don’t have an account?" classNames={classes.changeFormBox}>
        <span
          className={classes.changeFormLink}
          onClick={props.changeFormHandler}
        >
          Sign up
        </span>
      </TextBox>
    </div>
  );
};

export default LoginForm;
