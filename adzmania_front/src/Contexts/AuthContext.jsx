import axios from "axios";
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../axios";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const csrf = axiosClient.get("sanctum/csrf-cookie");
  const getUser = async () => {
    const res = await axiosClient.get("/api/user");
    console.log(res.data);
  };
  return (
    <AuthContext.Provider value={{ user, setUser, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default function useAuthContext() {
  return useContext(AuthContext);
}
//
