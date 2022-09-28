import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function AdminLogin() {

  const[name,setName]=useState("");
const[pass,setPass]=useState("");

const doLogin =(event)=>{
  event.preventDefault();
  let loginvalues={
    username:name,
    password:pass
  }

  
 
    axios.post("http://localhost:8080/api/auth/signin",loginvalues,{mode:'no-cors'}).then(async(response) => {
      if (response.data.accessToken) {
        localStorage.setItem("admin", JSON.stringify(response.data));
        console.log(response.data.accessToken);
        const user = JSON.parse(localStorage.getItem('admin'))
    console.log(user.username)
      }
   

       
      return response.data;



      
    }).catch((err)=>{
      console.log(err);
    })

}

  const handlechange =(e)=>{
    if(e.target.name==="username")
    setName(e.target.value)

    else if(e.target.name==="pass")
    setPass(e.target.value)

    console.log(e.target.value);
  }


  const navigate=useNavigate();
    const gotodashboard=()=>{
      navigate("/dashboard");
    }
  return (
    <div>
      <div class="pcenter" style={{height:430}}>
      <h1>Admin Login</h1>
      <form method="post">
        <div class="ptxt_field"> 
          <input type="text" name="username" onChange={handlechange} required/>
          <span></span>
          <label>Username</label>
        </div>
        <div class="ptxt_field">
          <input type="password" name="pass" onChange={handlechange} required/>
          <span></span>
          <label>Password</label>
        </div>
        {/* <div class="ppass">Forgot Password?</div> */}
        <input type="submit" value="Login" onClick={gotodashboard}/>
        {/* <div class="psignup_link">
          Don't have an account? <a href="#0">Signup</a>
        </div> */}
      </form>
    </div>
    </div>
  );
}
