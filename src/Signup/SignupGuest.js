import "./Signup.css"
import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function SignupGuest(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirm_password, setCpass] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [cofigPassError, setConfigPassError] = useState(false);
    
    const gotologin = () => {
        navigate("/guestlogin")
      }
    
    const handleUser = (e) => {
        var value = e.target.value;
        setUsername(value);   
    }
    //handle change
    const handleEmail = (e) => {
        var value = e.target.value;
        if(!/\S+@\S+\.\S+/.test(value)){
            setEmailError(true)
        }else{
            setEmailError(false)
        }
            setEmail(value);
    }


    const handlePassword = (e) => {
        //dynamic
        var value = e.target.value;
        if (value.length < 5  ) {
            setPassError(true)
        }
        else {
            setPassError(false)
        }
        setPassword(value); 
    }

    const handleConfPassword = (e) => {
        //dynamic
        var value = e.target.value;
        if(value!==password)
        {
            setConfigPassError(true)
        }else{
            setConfigPassError(false)
        }
        setCpass(value);
        
    }

    //reseting the form
    const resetData=()=>{
        setUsername("");
        setEmail("");
        setPassword("");
        setCpass("");
        setEmailError(false);
        setPassError(false);
        setConfigPassError(false);

    }
let formvalue={
    username:email,
    email:username,
    password,
    role:["guest"]
}

    //submit the form
    const submitForm=(event)=>{


        event.preventDefault()

        axios.post("http://localhost:8080/api/auth/signup",formvalue,{mode:'no-cors'})
        .then((response) => {
            alert("Sign up Successful")
            navigate("/guestlogin")
          })
          .catch((err) => {
            console.log(err);
          })
    }

    const navigate=useNavigate();
    const gototerms=()=>{
        navigate("/terms");
    }
 
    return(   
        <div class="signup-form">	
        <form  class="signform"action="/examples/actions/confirmation.php" method="post" onSubmit={submitForm}>
            <h2>Guest Sign Up</h2>
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                    <input type="text" class="form-control" id='uname' name="username" placeholder="Username" onChange={handleUser} value={username} required="required"></input>
                </div>
                </div>
                <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                    <input type="email" class="form-control" id='email' name="email" placeholder="email" onChange={handleEmail} value={email} required="required"></input>
                   
                </div>
                {emailError?<p className="error">Invalid format</p>:null}
            </div>
    
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                    <input type="password" class="form-control" id='password' name="password" placeholder="Password" onChange={handlePassword} value={password} required="required"></input>
                   
                </div>
                {passError?<p className="error">Password must be more than 4 character</p>:null}
            </div>
   
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="fa fa-lock"></i>
                        <i class="fa fa-check"></i>
                    </span>
                    <input type="password" class="form-control" id='confirm_password' name="confirm_password" onChange={handleConfPassword} value={confirm_password} placeholder="Confirm Password" required="required"></input>
                                      
                   </div> 
                   {cofigPassError?<p className="error">Password and comfirm password does not Match</p>:null}
            </div>        
            <div class="form-group">
                <button type="submit"  class="btn btn-primary btn-block btn-lg cbtn" style={{color:"white"}}>Sign Up</button>
                <button onClick={resetData} type="submit" class="btn btn-danger btn-block btn-lg cbtn" style={{color:"white"}}>Reset</button>
            </div>
            
            <p class="small text-center">By clicking the Sign Up button, you agree to our <br></br><a href="#0"  onClick={gototerms} style={{color:"blue", textDecoration:"underline"}}>Terms &amp; Conditions</a></p>
        </form>
        <div class="text-center">Already have an account? <a href="" onClick={gotologin}>Login here</a>.</div>
    </div>

    )
}

