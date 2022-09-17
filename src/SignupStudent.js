import "./Signup.css"
import axios from "axios";
import React,{useState} from "react";

export default function Signup(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirm_password, setCpass] = useState("");

    
    const [error, setError] = useState({
        errors:{},
        isError:false
    });

    //handle change
    const handleChange=(e)=>{
        //dynamic
     var value=e.target.value;
        if (e.target.name==="username") {
            setUsername(value);
        }
        else if (e.target.name==="email") {
            setEmail(value);
        }
        else if (e.target.name==="password") {
            setPassword(value);
        }
        else if (e.target.name==="confirm_password") {
            setCpass(value);
        }
    }

    //reseting the form
    const resetData=()=>{
        setUsername("");
        setEmail("");
        setPassword("");
        setCpass("");

    }
let formvalue={
    username,
    email,
    password,
    role:["user"]
}


    //submit the form
    const submitForm=(event)=>{


        event.preventDefault()
        axios.post("http://localhost:8080/api/auth/signup",formvalue,{mode:'no-cors'})
        .then((response) => {
            console.log("signup successful");
          })
          .catch((err) => {
            console.log(err);
          })

        //data validate

    //call server api for sending data

    // signUp(data).then((resp)=>{
    //     console.log("success log")
    // }).catch((error)=>{
    //     console.log("Error log")
    // });
    }


    return(
        <div class="signup-form">	
        <form  class="signform"action="/examples/actions/confirmation.php" method="post" onSubmit={submitForm}>
            <h2>Create  Student Account</h2>
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                    <input type="text" class="form-control" id='fname' name="username" placeholder="Fullname" onChange={handleChange} value={username} required="required"></input>
                    
                </div>
                </div>
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                    <input type="text" class="form-control" id='email' name="email" placeholder="email" onChange={handleChange} value={email} required="required"></input>
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                    <input type="text" class="form-control" id='password' name="password" placeholder="Password" onChange={handleChange} value={password} required="required"></input>
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="fa fa-lock"></i>
                        <i class="fa fa-check"></i>
                    </span>
                    <input type="text" class="form-control" id='confirm_password' name="confirm_password" onChange={handleChange} value={confirm_password} placeholder="Confirm Password" required="required"></input>
                </div>
            </div>        
            <div class="form-group">
                <button type="submit"  class="btn btn-primary btn-block btn-lg">Sign Up</button>
                <button onClick={resetData} type="submit" class="btn btn-danger btn-block btn-lg">Reset</button>
            </div>
            <p class="small text-center">By clicking the Sign Up button, you agree to our <br></br><a href="#0">Terms &amp; Conditions</a>, and <a href="#">Privacy Policy</a>.</p>
        </form>
        <div class="text-center">Already have an account? <a href="#0">Login here</a>.</div>
    </div>
    )
}