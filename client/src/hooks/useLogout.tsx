import { useUserContext } from "./useUserContext";
import { ActionOptions } from "../context/UserContext";

export const useLogout = () => {
  const { dispatch } = useUserContext();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: ActionOptions.LOGOUT, payload: null });
  };

  return { logout };
};
