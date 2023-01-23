import { createContext, useReducer } from "react";

type User = {
  _id: String;
  email: String;
  password: String;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

type UserStateType = {
  user: User[];
};

const enum ActionOptions {
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
}>({ userState: { user: [] }, dispatch: () => null });

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
  console.log("UserContext state:", userState);
  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
