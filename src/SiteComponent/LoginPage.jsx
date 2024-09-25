import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="contener col-12  content d-flex align-items-center justify-content-center">
    

      <div className='wrapper login container col-10 col-lg-4    content d-flex justify-content-center align-items-center align-content-center"'>
        <form action="">
          <h1>login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" required />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account?
              <Link to='/Register'>Registar</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
