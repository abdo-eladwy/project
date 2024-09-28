import React from "react";
// import LoginPage from "LoginPage";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

// import RegisterPage from "RegisterPage";
import "./SiteComponent/RegisterPage.css";
import LoginPage from "./SiteComponent/LoginPage";
import RegisterPage from "./SiteComponent/RegisterPage";
import HomePage from "./SiteComponent/HomePAge";

export default function App() {
  return (
      

        
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="*" element={<h1>404 page Not Found</h1>} />
          <Route path="/home" element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>

      

); 
// {/* <BrowserRouter>
//     <Routes>
//           <Route path="/" element={<LoginRegister />} />
//           <Route path="/Register" element={<Register />} />
//         </Routes>
//       </BrowserRouter>
//     </div>

//     //  <div>
//     //   <LoginRegister/>
//     //    {/* <Register/> */}
    //  </div>
//   );
}