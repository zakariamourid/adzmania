import React, { useState } from "react";
// import {
//   ContextProvider,
//   useStateContext,
// } from "../Contexts/contextProvider.jsx";
// import Navigate from "react-router-dom";
function Login() {
  // const { token, setToken } = useStateContext(ContextProvider);
  // const { user, setUser } = useStateContext(ContextProvider);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  };
  // TODO: add a check to see if the user is already logged in

  // if (token) return <Navigate to="/dashboard" />;
  return (
    <div className="container    flex ">
      <div className="form p-12 text-center">
        {username}
        <div className="form-group m-4">
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleUsername}
            value={username}
          />
        </div>
        <div className="form-group m-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlePassword}
            value={password}
          />
        </div>
        <div className="form-group">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
