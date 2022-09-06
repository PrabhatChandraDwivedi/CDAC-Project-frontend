import axios from "axios";

import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function StudentLogin(){
  const[tdata,setTdata]=useState([]);
  const[name,setName]=useState("");
  const[pass,setPass]=useState("");
    const navigate=useNavigate();
    const gotostudent=()=>{
      // let student = {
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
      navigate("/student");
    }
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
        <div class="ppass">Forgot Password?</div>
        <input type="submit" value="Login" onClick={gotostudent}/>
        <div class="psignup_link">
          Don't have an account? <a href="#0">Signup</a>
        </div>
      </form>
    </div>
       
    </div>)
}