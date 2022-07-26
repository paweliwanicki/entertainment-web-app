import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./LoginPage.module.scss";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ResetPasswordForm from "./ResetPasswordForm";
import { getMessage, setMessage } from "../../reducers/authorizationSlice";
import {
  LOGIN_FORM,
  SIGNUP_FORM,
  RESET_PASSWORD_FORM,
} from "../../utils/mixins";

const LoginPage = () => {
  const [form, setForm] = useState(LOGIN_FORM);
  const dispatch = useDispatch();
  const message = useSelector(getMessage);

  const setFormHandler = (form) => {
    setForm(form);
    if (message) {
      dispatch(setMessage(null));
    }
  };

  return (
    <div className={classes.loginPage}>
      {form === LOGIN_FORM && (
        <LoginForm changeFormHandler={(form) => setFormHandler(form)} />
      )}
      {form === SIGNUP_FORM && (
        <SignupForm changeFormHandler={() => setFormHandler(LOGIN_FORM)} />
      )}
      {form === RESET_PASSWORD_FORM && (
        <ResetPasswordForm changeFormHandler={(form) => setFormHandler(form)} />
      )}
    </div>
  );
};

export default LoginPage;
