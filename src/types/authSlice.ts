import User from "./User";

export default interface AuthSlice {
  isAuth: boolean;
  isLoading: boolean;
  token: string;
  message: string;
  user: User | null;
  status: string;
}
