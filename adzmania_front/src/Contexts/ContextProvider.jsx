import { useState, useContext, createContext, useEffect } from "react";
import { axiosClient } from "../axios";
const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
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
      setToken(null);
    }
  };
  const getUsers = async () => {
    const users = await axiosClient.get("api/admin/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(users.data);
    console.log(users);
  };

  const getOrders = async (role) => {
    let path = "api/orders";
    if (role == "admin") {
      path = "api/admin/orders";
    }
    const orders = await axiosClient.get(path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setOrders(orders.data.data);
  };
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
        getOrders(res.data.role);
        if (res.data.role == "admin") {
          getUsers();
        }
      } catch (error) {
        setToken(null);
        console.error("error", error);
      }
    }
  };
  useEffect(() => {
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
        orders,
        getOrders,
        users,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
