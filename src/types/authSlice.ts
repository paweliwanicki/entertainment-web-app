export default interface AuthSlice {
  isAuth: boolean;
  isLoading: boolean;
  token: string;
  message: string;
  user: object | null;
  status: string;
}
