import { useNavigate } from "react-router-dom";

export default function GuestLogin(){
    
        const navigate=useNavigate();
    const gotodashboard=()=>{
      navigate("/dashboard");
    }
    const gotoForgotPassword= ()=>{

      navigate("/forgot")
    }
  return (
    <div>
      <div class="pcenter">
      <h1>Guest Login</h1>
      <form method="post">
        <div class="ptxt_field"> 
          <input type="text" name="username"  required/>
          <span></span>
          <label>Username</label>
        </div>
        <div class="ptxt_field">
          <input type="password" name="pass"  required/>
          <span></span>
          <label>Password</label>
        </div>
        <div class="ppass" onClick={gotoForgotPassword}>Forgot Password?</div>
        <input type="submit" value="Login" onClick={gotodashboard}/>
        <div class="psignup_link">
          Don't have an account? <a href="#0">Signup</a>
        </div>
      </form>
    </div>
    </div>
    )
}