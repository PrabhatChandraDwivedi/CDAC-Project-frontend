import axios from "axios";

import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function StudentLogin(){

  const[name,setName]=useState("");
  const[pass,setPass]=useState("");
  const[stuobject,setStuobject]=useState("")
    const navigate=useNavigate();
    const gotostudent=()=>{
      
      navigate("/student");
    }
    const gotoForgotPassword= ()=>{

      navigate("/forgot")
    }
    const gotoStudentLogin=()=>{
      
      navigate("/signupstudent");
    }


    const checkifAlreadyexists=async()=>{
      const user = JSON.parse(localStorage.getItem('user'))
      let email = user.username
    return await axios.get("http://localhost:8080/api/dao/checkstuuser/"+email,{mode:'no-cors'}).then((res)=>{
      console.log(res.data); 
     
     
     var x = res.data;
     
     if (res.data===1) {
      console.log("hey")
      setStuobject(res.data)
     }
     return x;
     
     })

    }

    //login magic happens here
    const doLogin =(event)=>{
      event.preventDefault();
      let loginvalues={
        username:name,
        password:pass
      }

      
     
        axios.post("http://localhost:8080/api/auth/signin",loginvalues,{mode:'no-cors'}).then(async(response) => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
            console.log(response.data.accessToken);
            const user = JSON.parse(localStorage.getItem('user'))
        console.log(user.username)
          }
       let x =  await checkifAlreadyexists()
          console.log(stuobject)
          if (x===1) {
            navigate("/studenthome")
          }
          else{
            navigate("/register")
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

    return(<div>
       
        <div class="pcenter">
      <h1>Student Login</h1>
      <form method="post">
        <div class="ptxt_field"> 
          <input type="text" name="username" value={name} onChange={handlechange} required/>
          <span></span>
          <label>Email Id</label>
        </div>
        <div class="ptxt_field">
          <input type="password" name="pass" value={pass} onChange={handlechange} required/>
          <span></span>
          <label>Password</label>
        </div>
        <div class="ppass" onClick={gotoForgotPassword} >Forgot Password?</div>
        <input type="submit" value="Login" onClick={doLogin}/>
        <div class="psignup_link">
          Don't have an account? <a href="" onClick={gotoStudentLogin}>Signup</a>
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