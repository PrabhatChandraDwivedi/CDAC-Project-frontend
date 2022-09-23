import React from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

export default function ForgotPassword() {

    const navigate=useNavigate();
    const gotoStudentLogin =()=>{
        navigate("/login")
    }
    const gotoforgotnext =()=>{
        navigate("/forgotnext")
    }




    return (
        <div className="pcdmaindiv">
            <div className="pcdforg ">
                <h4 className="HeadingForgot">
                    <label
                        style={{ position: "relative", top: 15, width: 540, left: -16 }}
                    >
                        Hey! Looks Like you forgot your password
                    </label>
                </h4>
                <form>
                    <h5 className="pcdforgmsg">
                        No worries! Hang tight! just a few clicks to go
                    </h5>
                    <div class="form-group" style={{ position: "relative", top: 99 }}>
                        <label
                            for="exampleInputEmail1 pcdmailforg"
                            style={{ position: "relative", bottom: 18, left: 17 }}
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            style={{ position: "relative", width: 500, left: 14, bottom: 10 }}
                        />
                        <small
                            id="emailHelp"
                            class="form-text text-muted"
                            style={{ position: "relative", left: 15, bottom: 10 }}
                        >
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary"
                        style={{
                            position: "relative",
                            top: 130,
                            left: 18,
                            backgroundColor: "#3057C9",
                            color: "white",
                            width: 150,
                        }} onClick={gotoStudentLogin}>
                        Back to Login
                    </button>
                    <button
                        type="submit"
                        class="btn btn-primary"
                       onClick={gotoforgotnext}
                        style={{
                            position: "relative",
                            top: 130,
                            left: 210,
                            backgroundColor: "#3057C9",
                            color: "white",
                            width: 150,
                        }}
                    >
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
}
