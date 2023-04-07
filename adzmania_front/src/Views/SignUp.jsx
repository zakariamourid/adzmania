import React from "react";

function SignUp() {
  localStorage.setItem("ACCESS_TOKEN", "123");
  window.location.reload();
  return <div>SignUp</div>;
}

export default SignUp;
