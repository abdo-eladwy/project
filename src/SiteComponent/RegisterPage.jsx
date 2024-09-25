import { Link } from "react-router-dom";




export default function RegisterPage() {
  return (
    <div className="register-page ">
      
      <div className="container col-11  col-lg-4   contents d-flex flex-column gap-5 justify-content-center align-content-center">
        <h2> welcome!</h2>
        <div className="inputs d-flex flex-column gap-3">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password " />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <button className="  text-white ">Sign Up</button>
        <div className="  d-flex flex-column  flex-md-row  gap-md-3">
          <p>Already have an account?</p>
          <Link to='/'>Sign in</Link>
        </div>
      </div>
    </div>
  );
}
