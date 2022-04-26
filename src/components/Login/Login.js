import React from "react";

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
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
