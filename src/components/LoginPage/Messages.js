//errors
export const INVALID_USER_TOKEN = "auth/invalid-user-token";
export const EMAIL_ALREADY_IN_USE = "auth/email-already-in-use";
export const WRONG_PASSWORD = "auth/wrong-password";
export const TOO_MANY_REQUEST = "auth/too-many-requests";
export const USER_NOT_FOUND = "auth/user-not-found";

// info
export const RESET_EMAIL_SENDED = "reset_email_sended";

// messages
const INVALID_USER_TOKEN_MSG =
  "Your token is no longer valid. Please sign in again.";
const EMAIL_ALREADY_IN_USE_MSG =
  "E-mail is already in use. Use another e-mail address and please try again.";
const WRONG_PASSWORD_MSG =
  "E-mail address or password is wrong. Check it and please try again.";
const TOO_MANY_REQUEST_MSG =
  "Too many request! Please wait a moment and try again.";
const RESET_EMAIL_SENDED_MSG =
  "An email with instructions on how to reset the password has been sent.";
const USER_NOT_FOUND_MSG =
  "The email address you provided was not found. To create an account click on Sign Up.";

export const getErrorMessage = (errorCode) => {
  let message = "";
  switch (errorCode) {
    case INVALID_USER_TOKEN: {
      message = INVALID_USER_TOKEN_MSG;
      break;
    }

    case EMAIL_ALREADY_IN_USE: {
      message = EMAIL_ALREADY_IN_USE_MSG;
      break;
    }

    case WRONG_PASSWORD: {
      message = WRONG_PASSWORD_MSG;
      break;
    }
    case TOO_MANY_REQUEST: {
      message = TOO_MANY_REQUEST_MSG;
      break;
    }
    case USER_NOT_FOUND: {
      message = USER_NOT_FOUND_MSG;
      break;
    }

    default: {
      break;
    }
  }
  return message;
};

export const getMessageText = (messageCode) => {
  let message = "";
  switch (messageCode) {
    case RESET_EMAIL_SENDED: {
      message = RESET_EMAIL_SENDED_MSG;
      break;
    }

    default: {
      break;
    }
  }
  return message;
};
