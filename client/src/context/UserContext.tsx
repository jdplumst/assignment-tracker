import { createContext, useReducer, useEffect } from "react";

type User = {
  email: String;
  token: String;
};

type UserStateType = {
  user: User;
};

export const enum ActionOptions {
  LOGIN,
  LOGOUT
}

type ActionType = {
  type: ActionOptions;
  payload: any;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<{
  userState: UserStateType;
  dispatch: React.Dispatch<ActionType>;
}>({ userState: { user: {} as User }, dispatch: () => null });

export const userReducer = (state: UserStateType, action: ActionType) => {
  switch (action.type) {
    case ActionOptions.LOGIN:
      return { user: action.payload };
    case ActionOptions.LOGOUT:
      return { user: null };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userState, dispatch] = useReducer(userReducer, { user: null });
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (user !== "null") {
      dispatch({ type: ActionOptions.LOGIN, payload: user });
    }
  }, []);
  console.log("UserContext state:", userState);
  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
