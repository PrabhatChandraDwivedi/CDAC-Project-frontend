import React from "react";
import { useState } from "react";
import $ from "jquery";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Review.css';
import Star from "./Star";

export default function Review() {
    const [rating, setRating] = useState(0);

    const [hover, setHover] = useState(0);
    const navigate = useNavigate();
    const gotoguestHome = () => {
        navigate("/guestHome")
    }
    const logout = () => {
        localStorage.removeItem("guest")
        navigate("/");
    }
    // const alert=()=>{
    //     alert("thanks for giving 5 star rating");
    // }









    $(function () {

        $(document).on({
            mouseover: function (event) {
                $(this).find('.far').addClass('star-over');
                $(this).prevAll().find('.far').addClass('star-over');
            },
            mouseleave: function (event) {
                $(this).find('.far').removeClass('star-over');
                $(this).prevAll().find('.far').removeClass('star-over');
            }
        }, '.rate');


        $(document).on('click', '.rate', function () {
            if (!$(this).find('.star').hasClass('rate-active')) {
                $(this).siblings().find('.star').addClass('far').removeClass('fas rate-active');
                $(this).find('.star').addClass('rate-active fas').removeClass('far star-over');
                $(this).prevAll().find('.star').addClass('fas').removeClass('far star-over');
            } else {
                console.log('has');
            }
        });

    });

    const [guest_id, setGuest_id] = useState("");
    const [name, setName] = useState("");
    const [email_id, setEmail_id] = useState("");
    const [suggestion, setSuggestion] = useState("");



    //handle change
    const handleChange = (e) => {
        //dynamic
        var value = e.target.value;
        if (e.target.name === "guest_id") {
            setGuest_id(value);
        }
        else if (e.target.name === "name") {
            setName(value);
        }
        else if (e.target.name === "emailid") {
            setEmail_id(value);
        }
        else if (e.target.name === "suggestion") {
            setSuggestion(value);
        }
        else if (e.target.name === "rating") {
            setRating(value);
        }

    }

    const Submithandle = (e) => {
        // if (guest_id.length === 0 || name.length === 0) {
        //     e.preventDefault();
        //     window.alert("Don't leave field empty");
        // }
        // else {
        var formvalue = {
            guest_id,
            name,
            emailid:email_id,
            suggestion,
            rating
        }

        console.log(formvalue);
        e.preventDefault();
        axios.post("http://localhost:8080/api/dao/review", formvalue, { mode: 'no-cors' })
            .then((res) => {

            })
        resetData();
        navigate("/guesthome")



    };

    //reseting the form
    const resetData = () => {
        setGuest_id("");
        setName("");
        setEmail_id("");
        setSuggestion("");
        setRating(0);

    }

    return (
        <div>
            <div class="d-flex flex-column" id="content-wrapper">
                <div id="content" className="Rbody">
                    <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar fixed-top  Rhorinav">
                        <div className="container-fluid Rbox">
                            <h1 style={{ fontSize: 25 }}>Rate Us !!</h1>
                            <div className="RComplaintBtn">
                                <button className="btn Rbtn1" onClick={gotoguestHome}> Back to Home</button>
                                <button className="btn Rbtn2" onClick={logout}> Log Out</button>
                            </div>
                        </div>
                    </nav>
                    <div className="BigratingBox">
                        <div className="RatingBox">
                            <div className="TextDiv">
                                <h4 style={{ fontSize: 18 }}>Before you say goodbye to us, Please tell us how you liked our Service </h4>
                            </div>
                            <div className="StayRating">
                                <h5>How was your stay ????</h5>
                                <div className=" newrating">
                                    
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <Star
                                            key={value}
                                            filled={value <= rating}
                                            onClick={() => setRating(value)}
                                        />

                                    ))}

                                </div>
                            </div>
                            <div className="RatingSuggestion">
                                <h4 style={{ fontSize: 18 }}>Tell us what you love about the hostel, or what we could be doing better </h4>
                                <textarea type="textarea" onChange={handleChange} name="suggestion" placeholder=" Any Suggestions" />
                            </div>
                        </div>
                        <div className="RatingPersonDetail">
                            <div className=" guestidname1">
                                <strong>Guest Id :</strong><br />
                                <input type="text" className="form-control" required name="guest_id" onChange={handleChange} />
                            </div>
                            <div className=" guestidname2">
                                <strong>Name : </strong><br />
                                <input type="text" className='form-control' required name='name' onChange={handleChange} />
                            </div>
                            <div className=" guestidname3">
                                <strong>E-Mail Id : (optional) </strong><br />
                                <input type="text" className='form-control' name='emailid' onChange={handleChange} />
                            </div>
                        </div>
                        <div className="ratingbutton">

                            <button type="Submit" className="btn Ratingsubmit" onClick={Submithandle} >Submit</button>
                            <button type="Reset" className='btn Ratingreset' onClick={resetData}>Reset</button>
                        </div>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="assets/js/script.min.js"></script>
            </div >
        </div >


    );
}
