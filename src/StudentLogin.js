import axios from "axios";

import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function StudentLogin(){

  const[name,setName]=useState("");
  const[pass,setPass]=useState("");
    const navigate=useNavigate();
    const gotostudent=()=>{
      
      navigate("/student");
    }
    const gotoForgotPassword= ()=>{

      navigate("/forgot")
    }



    //login magic happens here
    const doLogin = (event)=>{
      event.preventDefault();
      let loginvalues={
        username:name,
        password:pass
      }
        axios.post("http://localhost:8080/api/auth/signin",loginvalues,{mode:'no-cors'}).then((response) => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
            console.log(response.data.accessToken);
          }
           navigate("/student")
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

    return(<div>
       
        <div class="pcenter">
      <h1>Student Login</h1>
      <form method="post">
        <div class="ptxt_field"> 
          <input type="text" name="username" value={name} onChange={handlechange} required/>
          <span></span>
          <label>Username</label>
        </div>
        <div class="ptxt_field">
          <input type="password" name="pass" value={pass} onChange={handlechange} required/>
          <span></span>
          <label>Password</label>
        </div>
        <div class="ppass" onClick={gotoForgotPassword} >Forgot Password?</div>
        <input type="submit" value="Login" onClick={doLogin}/>
        <div class="psignup_link">
          Don't have an account? <a href="#0">Signup</a>
        </div>
      </form>
    </div>
       
    </div>)
}

//dumped comments
//// let student = {
      //   sname: name,
      //   spass: pass
      // }
      // axios.post("http://localhost:8080/login",student)
      // .then((response) => {
        
     
         
          
        
        
         
          
        
      //   console.log(response.data);
      // })
      // .catch((err) => {
      //   console.log(err);
      // })
      // function displaydata(){
    //   let s_num = 1;
    //   axios.post("http://localhost:8080/getone",s_num)
    //   .then((response) => {
    //     response.json().then((response) => {
    //       // console.log("res", response);
    //       setTdata(response);
    //   })
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    // }
    // useEffect(() => {
    //   displaydata();
    // }, [])