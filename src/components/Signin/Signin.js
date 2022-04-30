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
          <button>Sign in</button>
          <p class="message">
          You already have an account? <Link to="/Login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signin