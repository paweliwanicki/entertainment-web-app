import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import classes from "./LoginPage.module.scss";

const LOGIN_FORM = "login";
const SIGNUP_FORM = "signup";

const LoginPage = (props) => {
  const [form, setForm] = useState(LOGIN_FORM);

  return (
    <div className={classes.loginPage}>
      {form === LOGIN_FORM && (
        <LoginForm changeFormHandler={() => setForm(SIGNUP_FORM)} />
      )}
      {form === SIGNUP_FORM && (
        <SignupForm changeFormHandler={() => setForm(LOGIN_FORM)} />
      )}
    </div>
  );
};

export default LoginPage;
