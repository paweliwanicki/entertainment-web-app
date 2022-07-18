import { useState } from "react";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import classes from "./LoginPage.module.scss";
import {
  LOGIN_FORM,
  SIGNUP_FORM,
  RESET_PASSWORD_FORM,
} from "../../utils/mixins";
import ResetPasswordForm from "./ResetPasswordForm";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginPage = (props) => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user,loading,error);
  const [form, setForm] = useState(LOGIN_FORM);

  const setFormHandler = (form) => {
    setForm(form);
  };

  return (
    <div className={classes.loginPage}>
      {form === LOGIN_FORM && (
        <LoginForm changeFormHandler={(form) => setFormHandler(form)} />
      )}
      {form === SIGNUP_FORM && (
        <SignupForm changeFormHandler={() => setForm(LOGIN_FORM)} />
      )}
      {form === RESET_PASSWORD_FORM && (
        <ResetPasswordForm changeFormHandler={(form) => setFormHandler(form)} />
      )}
    </div>
  );
};

export default LoginPage;
