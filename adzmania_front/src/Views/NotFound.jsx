import React, { useEffect } from "react";
import { useStateContext } from "../Contexts/contextProvider.jsx";
function NotFound() {
  const { user, setUser } = useStateContext();
  useEffect(() => {
    setUser({ name: "mohamed", email: "zak@gmao.c", phone: "123456789" });
  }, []);

  console.log(user);

  return (
    <div>
      NotFound error 404
      <p>{"hello"}</p>
    </div>
  );
}

export default NotFound;
