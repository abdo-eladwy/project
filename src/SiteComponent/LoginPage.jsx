import React from "react";
import { Link } from "react-router-dom";

import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function LoginPage() {

  const phoneInput = useRef();
  const codeInput = useRef();
  const navigate = useNavigate();

  const phoneRegex = /^\+201\d{9}$/;
  const codeRegex = /^[A-Za-z0-9]{4}$/;

  const handleLogin = (event) => {
    event.preventDefault();
    let phoneTest = phoneRegex.test(phoneInput.current.value);
    let codeTest = codeRegex.test(codeInput.current.value);
    
    if (phoneTest && codeTest) {
      let data = {
        'user_phone': phoneInput.current.value,
        'user_code': codeInput.current.value
      };
      
      axios.post('https://support.israaosman.com/php/index.php/api/auth/login', data)
        .then((res) => {
          if (res.data.err) {
            Swal.fire({
              icon:'success',
              text : res.data.msg,
              timer:1500,
          });
          } else {
            Swal.fire({
              icon: 'erorr',
              text : res.data.msg,
              timer:1500,
            }).then(() => {
              sessionStorage.setItem('userInfo', JSON.stringify(res.data.data[0]));
              navigate('/home');
            });
          }
        });
    } else {
      Swal.fire({
        icon: 'info',
        text : 'Data is invalid (TL:(+201)and9no;code:4NO)',
        timer:1400,
      });
    }
  };

  return (
    <div className="contener col-12  content d-flex align-items-center justify-content-center">
    

      <div className='wrapper login container col-10 col-lg-4    content d-flex justify-content-center align-items-center align-content-center"'>
        <form  onSubmit={handleLogin}  action="">
          <h1>login</h1>
          <div className="input-box">
            <input  ref={phoneInput} className="form-control" type="text" placeholder="Enter your phone number" required />
          </div>
          <div className="input-box">
            <input ref={codeInput} type="password" placeholder="Enter your code" required />
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
