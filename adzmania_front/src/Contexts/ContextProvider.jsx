import { useState, useContext, createContext } from "react";
const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "ahmed",
    lastName: "brahim",
    email: "zakariamourid10@gmail.com",
    phone: "0663054819",
    password: "",
  }); // mock name
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN")); //TODO: remember to make this get data from session
  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };
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
