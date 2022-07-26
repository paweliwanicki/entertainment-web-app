import Button from "../utils/Button/Button";
import classes from "./MainContainer.module.scss";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../reducers/authorizationSlice";

const MainContainer = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.mainContainer}>
      LOGGED
      <Button text={"LOGOUT"} onClick={() => dispatch(logoutUser())} />
    </div>
  );
};

export default MainContainer;
