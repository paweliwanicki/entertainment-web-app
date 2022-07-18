import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./LoginPage.module.scss";
import Button from "../utils/Button/Button";
import CustomInput from "../utils/CustomInput/CustomInput";
import CustomHeader from "../utils/CustomHeader/CustomHeader";
import TextBox from "../utils/TextBox/TextBox";
import FormContainer from "../utils/FormContainer/FormContainer";
import { resetPassword, getErrorCode } from "../../reducers/authorizationSlice";
import { SIGNUP_FORM, LOGIN_FORM } from "../../utils/mixins";

const ResetPasswordForm = (props) => {
  const dispatch = useDispatch();

  const error = useSelector(getErrorCode);
  console.log(error);

  const [email, setEmail] = useState("");

  const [emailIsValid, setEmailIsValid] = useState(null);
  const [emailIsValidated, setEmailIsValidated] = useState(null);

  const validateForm = () => {
    const validEmail = email !== "";
    setEmailIsValid(validEmail);
    setEmailIsValidated(true);
    return validEmail;
  };

  const resetPasswordHandler = () => {
    const valid = validateForm();
    console.log(valid);
    if (valid) {
      try {
        dispatch(() => resetPassword(email));
      } catch (err) {
        alert(err.message);
      }
    }
  };

  return (
    <div className={[classes.loginForm, classes.fadeIn].join(" ")}>
      <CustomHeader mainText="Reset password" />
        <TextBox text={"E-mail with password reset instruction was send. Please check your e-mail inbox."} classNames={classes.infoBox}></TextBox>

      <FormContainer
        classes={classes.formContainer}
        onSubmitHandler={resetPasswordHandler}
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
        <Button type="submit" text="Send reset e-mail" />
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

export default ResetPasswordForm;
