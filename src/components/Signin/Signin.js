import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div className='Signin-com'>
                <h1>Sign in</h1>
      <div class="form">
        <form class="login-form">
        <input type="text" placeholder="username" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="phone number" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <button>login</button>
          <p class="message">
            Not registered? <Link to="/Signin">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signin