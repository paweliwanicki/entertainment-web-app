import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import propTypes from "prop-types";
import classes from "./LoginPage.module.scss";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import {
  setMessage,
  getMessage,
  setStatus,
  setIsLoading,
  isLoading,
  getStatus,
} from "../../reducers/authorizationSlice";
import {
  getErrorMessage,
  getMessageText,
  RESET_EMAIL_SENDED,
} from "./Messages";
import Button from "../utils/Button/Button";
import CustomInput from "../utils/CustomInput/CustomInput";
import CustomHeader from "../utils/CustomHeader/CustomHeader";
import TextBox from "../utils/TextBox/TextBox";
import FormContainer from "../utils/FormContainer/FormContainer";
import Loader from "../utils/Loader/Loader";
import { SIGNUP_FORM, LOGIN_FORM, SUCCESS, ERROR } from "../../utils/mixins";
import { validateEmailAddress } from "../../utils/utils";

const ResetPasswordForm = (props) => {
  const dispatch = useDispatch();
  const showLoader = useSelector(isLoading);

  const message = useSelector(getMessage);
  const status = useSelector(getStatus);

  const [email, setEmail] = useState("");

  const [emailIsValid, setEmailIsValid] = useState(null);
  const [emailIsValidated, setEmailIsValidated] = useState(null);

  const validateForm = () => {
    const validEmail = validateEmailAddress(email);
    setEmailIsValid(validEmail);
    setEmailIsValidated(true);
    return validEmail;
  };

  const resetPasswordHandler = () => {
    const valid = validateForm();
    if (valid) {
      dispatch(setIsLoading(true));
      sendPasswordResetEmail(auth, email)
        .then(() => {
          dispatch(setMessage(getMessageText(RESET_EMAIL_SENDED)));
          dispatch(setStatus(SUCCESS));
          dispatch(setIsLoading(false));
          setEmail("");
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
      <CustomHeader text="Reset password" />
      {message && (
        <TextBox
          text={message}
          classNames={classes.infoBox}
          status={status}
        ></TextBox>
      )}

      <FormContainer onSubmitHandler={resetPasswordHandler}>
        <CustomInput
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          validationText="Can't be empty"
          isValid={emailIsValid}
          isValidated={emailIsValidated}
          onBlur={() => setEmailIsValidated(false)}
        />
        {showLoader ? (
          <Loader classNames={classes.loader} />
        ) : (
          <Button type="submit" text="Send reset e-mail" />
        )}
      </FormContainer>
      <TextBox
        text="Already have an account?"
        classNames={classes.changeFormBox}
      >
        <span
          className={classes.changeFormLink}
          onClick={() => props.changeFormHandler(LOGIN_FORM)}
        >
          Login
        </span>
      </TextBox>
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

ResetPasswordForm.propTypes = {
  changeFormHandler: propTypes.func.isRequired,
};

export default ResetPasswordForm;
