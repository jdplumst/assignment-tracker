import { useState } from "react";
import { useUserContext } from "./useUserContext";
import { ActionOptions } from "../context/UserContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { dispatch } = useUserContext();

  const login = async (email: String, password: String) => {
    setIsLoading(true);
    setError(null);
    console.log(email, password);

    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    } else if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: ActionOptions.LOGIN, payload: data });
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};
