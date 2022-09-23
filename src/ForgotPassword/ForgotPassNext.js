import React from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"

export default function ForgotPassNext() {
    const navigate=useNavigate();
    const gotoStudentLogin =()=>{
        navigate("/login")
    }

    return(
        <div className="pcdmaindiv">
        <div className="pcdforg ">
            <h4 className="HeadingForgot">
                <label
                    style={{ position: "relative", top: 15, width: 540, left: -16 }}
                >
                    Almost There!
                </label>
            </h4>
            <form>
                <h5 className="pcdforgmsg">
                    Enter the password of your choice
                </h5>
                <div class="form-group" style={{ position: "relative", top: 99 }}>
                    
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="New Password"
                        style={{ position: "relative", width: 250, left: 140, bottom: 10,marginBottom:15,marginTop:-10 }}
                    />
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Confirm New Password"
                        style={{ position: "relative", width: 250, left: 140, bottom: 10 }}
                    />
                    {/* <small
                        id="emailHelp"
                        class="form-text text-muted"
                        style={{ position: "relative", left: 15, bottom: 10 }}
                    >
                        We'll never share your email with anyone else.
                    </small> */}
                </div>
                <button
                    type="submit"
                    class="btn btn-primary"
                   onClick={gotoStudentLogin}
                    style={{
                        position: "relative",
                        top: 130,
                        left: 190,
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
    )
}