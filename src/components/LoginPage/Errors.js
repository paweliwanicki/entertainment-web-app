export const getErrorMessage = (errorCode) => {
  let message = "";
  console.log(errorCode);
  switch (errorCode) {
    case "auth/invalid-user-token": {
      message = "Your token is no longer valid. Please sign in again.";
      break;
    }

    case "auth/email-already-in-use": {
      message =
        "E-mail is already in use. Use another e-mail address and try again.";
      break;
    }

    default: {
      break;
    }
  }
  return message;
};
