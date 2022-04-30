import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login-com">
      <h1>Login</h1>
      <div class="form">
        {/* <form class="register-form"> */}
        <form class="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>login</button>
          <p class="message">
            Not registered? <Link to="/Signin">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
