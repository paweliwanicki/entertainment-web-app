import LoginForm from "../LoginForm/LoginForm";
import MainContainer from "../MainContainer/MainContainer";
import Icon from "../utils/Icon/Icon";
import classes from "./Layout.module.scss";

function Layout() {
  const isAuth = false;
  return (
    <div className={classes.layout}>
      {!isAuth && (
        <div className={classes.loginFormContainer}>
          <Icon id="logo" width={32} height={26}/>
          <LoginForm />
        </div>
      )}
      {isAuth && <MainContainer />}
    </div>
  );
}

export default Layout;
