import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./LoginPage.module.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import {
  loginUser,
  setStatus,
  setMessage,
  getMessage,
  getStatus,
  isLoading,
  setIsLoading,
} from "../../reducers/authorizationSlice";
import { getErrorMessage } from "./Messages";
import Button from "../utils/Button/Button";
import CustomInput from "../utils/CustomInput/CustomInput";
import CustomHeader from "../utils/CustomHeader/CustomHeader";
import TextBox from "../utils/TextBox/TextBox";
import FormContainer from "../utils/FormContainer/FormContainer";
import Loader from "../utils/Loader/Loader";
import {
  SIGNUP_FORM,
  RESET_PASSWORD_FORM,
  SUCCESS,
  ERROR,
} from "../../utils/mixins";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const message = useSelector(getMessage);
  const status = useSelector(getStatus);
  const showLoader = useSelector(isLoading);

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
    const valid = validateForm();
    if (valid) {
      dispatch(setIsLoading(true));
      signInWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
          dispatch(setStatus(SUCCESS));
          dispatch(
            loginUser({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoUrl: userAuth.user.photoURL,
            })
          );
          dispatch(setIsLoading(false));
        })
        .catch((error) => {
          dispatch(setStatus(ERROR));
          dispatch(setMessage(getErrorMessage(error.code)));
          dispatch(setIsLoading(false));
        });
    }
  };

  return (
    <div className={[classes.loginForm, classes.fadeIn].join(" ")}>
      <CustomHeader mainText="Login" />
      {message && (
        <TextBox
          text={message}
          classNames={classes.infoBox}
          status={status}
        ></TextBox>
      )}
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
        <TextBox
          text="Forgot password?"
          classNames={classes.resetPasswordLink}
          onClick={() => props.changeFormHandler(RESET_PASSWORD_FORM)}
        />

        {showLoader ? (
          <Loader classNames={classes.loader} />
        ) : (
          <Button type="submit" text="Login to your account" />
        )}
      </FormContainer>
      <TextBox text="Don’t have an account?" classNames={classes.changeFormBox}>
        <span
          className={classes.changeFormLink}
          onClick={() => props.changeFormHandler(SIGNUP_FORM)}
        >
          Sign up
        </span>
      </TextBox>
    </div>
  );
};

export default LoginForm;
