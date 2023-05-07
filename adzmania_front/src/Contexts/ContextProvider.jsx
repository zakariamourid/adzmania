import { useState, useContext, createContext, useEffect } from "react";
import { axiosClient } from "../axios";
const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN")); //TODO: remember to make this get data from session
  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };
  useEffect(() => {
    const getUserData = async () => {
      console.log("fetching the user ...");

      try {
        const res = await axiosClient.get("/api/user", {
          headers: {
            Authorization: `Bearer {${token}}`,
          },
        });
        setUser(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, [token]);

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
