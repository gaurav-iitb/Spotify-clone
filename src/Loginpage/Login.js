// do rfce to generate a component tamplate
import React from "react";
import "./Login.css";
import { loginUrl } from "../spotify";
function Login() {
  return (
    <div className="main-login">
      <img src="./Spotify-logo.png" alt="spotify-logo" />
      <a href={loginUrl}>Login To Spotify</a>
    </div>
  );
}

export default Login;
