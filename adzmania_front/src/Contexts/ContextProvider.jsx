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
  const logout = async () => {
    try {
      await axiosClient.post(
        "/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setToken(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      console.log("fetching the user ...");
      if (token) {
        try {
          const res = await axiosClient.get("/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(res.data);
        } catch (error) {
          if (error.response.status === 401) {
            setToken(null);
          }
          console.error("error", error);
        }
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
        logout,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
