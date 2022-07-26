import { useSelector, useDispatch } from "react-redux";
import classes from "./Layout.module.scss";
import LoginPage from "../LoginPage/LoginPage";
import MainContainer from "../MainContainer/MainContainer";
import Icon from "../utils/Icon/Icon";
import { getUser, loginUser } from "../../reducers/authorizationSlice";
import { auth } from "../../firebase";

function Layout() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getUser);

  if (!isAuthenticated) {
    auth.onAuthStateChanged(function (user) {
      dispatch(loginUser(user));
    });
  }
  return (
    <div className={classes.layout}>
      {!isAuthenticated && (
        <div className={classes.loginFormContainer}>
          <Icon id="logo" classNames={classes.logo} width={32} height={26} />
          <LoginPage />
        </div>
      )}
      {isAuthenticated && <MainContainer />}
    </div>
  );
}

export default Layout;
