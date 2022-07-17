import { useSelector } from "react-redux";
import LoginPage from "../LoginPage/LoginPage";
import MainContainer from "../MainContainer/MainContainer";
import Icon from "../utils/Icon/Icon";
import classes from "./Layout.module.scss";
import { isAuth } from "../../reducers/authorizationSlice";

function Layout() {
  const isAuthenticated = useSelector(isAuth);
  return (
    <div className={classes.layout}>
      {!isAuthenticated && (
        <div className={classes.loginFormContainer}>
          <Icon id="logo" classes={classes.logo} width={32} height={26} />
          <LoginPage />
        </div>
      )}
      {isAuthenticated && <MainContainer />}
    </div>
  );
}

export default Layout;
