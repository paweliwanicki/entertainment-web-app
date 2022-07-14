import { useState } from "react";
import { useSelector } from "react-redux";
import { isSigning } from "../../reducers/authorizationSlice";
import Loader from "../utils/Loader/Loader";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import classes from "./LoginPage.module.scss";

const LOGIN_FORM = "login";
const SIGNUP_FORM = "signup";

const LoginPage = (props) => {
  const [form, setForm] = useState(LOGIN_FORM);
  const userIsSigning = useSelector(isSigning);

  return (
    <div className={classes.loginPage}>
      {userIsSigning && <Loader className={classes.loader}/>}
      {!userIsSigning && form === LOGIN_FORM && (
        <LoginForm changeFormHandler={() => setForm(SIGNUP_FORM)} />
      )}
      {!userIsSigning && form === SIGNUP_FORM && (
        <SignupForm changeFormHandler={() => setForm(LOGIN_FORM)} />
      )}
    </div>
  );
};

export default LoginPage;
