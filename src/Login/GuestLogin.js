import { useNavigate } from "react-router-dom";
import React, { useState,useEffect } from "react";
import axios from "axios";
export default function GuestLogin(){
  const[name,setName]=useState("");
  const[pass,setPass]=useState("");
        const navigate=useNavigate();
    const gotodashboard=()=>{
      navigate("/dashboard");
    }
    const gotoForgotPassword= ()=>{

      navigate("/forgot")
    }
    const gotoGuestLogin= ()=>{

      navigate("/signupguest")
    }

    const handlechange =(e)=>{
      if(e.target.name==="username")
      setName(e.target.value)

      else if(e.target.name==="pass")
      setPass(e.target.value)

      console.log(e.target.value);
    }
    const checkifAlreadyexists=async()=>{
      const user = JSON.parse(localStorage.getItem('guest'))
      let email = user.username
      console.log(email)
    return await axios.get("http://localhost:8080/api/dao/checkguestuser/"+email,{mode:'no-cors'}).then((res)=>{
      console.log(res.data); 
     
     
     var x = res.data;
     
     if (x===1) {
      console.log("hey")
     
     }
     return x;
     
     })

    }




    const doLogin =(event)=>{
      event.preventDefault();
      let loginvalues={
        username:name,
        password:pass
      }

      
     
        axios.post("http://localhost:8080/api/auth/signin",loginvalues,{mode:'no-cors'}).then(async(response) => {
          if (response.data.accessToken) {
            localStorage.setItem("guest", JSON.stringify(response.data));
            console.log(response.data.accessToken);
            const user = JSON.parse(localStorage.getItem('guest'))
        console.log(user.username)
          }
       let x =  await checkifAlreadyexists()
          
          if (x===1) {
            navigate("/guesthome")
          }
          else{
            navigate("/guestregister")
          }

           
          return response.data;



          
        }).catch((err)=>{
          console.log(err);
        })

    }

  return (
    <div>
      <div class="pcenter">
      <h1>Guest Login</h1>
      <form method="post">
        <div class="ptxt_field"> 
          <input type="text" name="username" onChange={handlechange} required/>
          <span></span>
          <label>Email Id</label>
        </div>
        <div class="ptxt_field">
          <input type="password" name="pass" onChange={handlechange} required/>
          <span></span>
          <label>Password</label>
        </div>
        <div class="ppass" onClick={gotoForgotPassword}>Forgot Password?</div>
        <input type="submit" value="Login" onClick={doLogin}/>
        <div class="psignup_link">
          Don't have an account? <a href="" onClick={gotoGuestLogin}>Signup</a>
        </div>
      </form>
    </div>
    </div>
    )
}