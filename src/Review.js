import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Review.css';

export default function Review() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const navigate = useNavigate();
    const gotoguestHome = () => {
        navigate("/guestHome")
    }
    const logout = () => {
        navigate("/");
    }
    // const alert=()=>{
    //     alert("thanks for giving 5 star rating");
    // }

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
                                <div className="StayRating1">
                                    <h4 style={{ fontSize: 18 }}>How was your Stay ??</h4>
                                    <div className="RatingBar1">
                                        <h4 style={{ fontSize: 18 }}>1  2  3  4  5</h4>
                                    </div>
                                </div>
                                <div className="StayRating2">
                                    <h4 style={{ fontSize: 18 }}>How would you recommended this to your friends??</h4>
                                    <div className="RatingBar2">
                                        {/* <h4 style={{ fontSize: 18 }}>1  2  3  4  5</h4> */}


                                        {[...Array(5)].map((star, index) => {
                                            index += 1;
                                            return (
                                                <button type="button" name={index} key={index} className={index <= (hover || rating) ? "on" : "off"}
                                                onClick={()=> setRating(index)}
                                               
                                                onMouseEnter={()=> setHover(index)}
                                                onMouseLeave={()=> setHover(rating)}>
                                                <span className="star"><span class="fa fa-star checked"></span> </span>
                                                {/* if (index==5) {
                                                    onsubmit={
                                                    
                                                     }
                                                } */}
                                                </button>
                                               
                                            );
                                        })}
                                    </div>



                                </div>
                            </div>
                            <div className="RatingSuggestion">
                                <h4 style={{ fontSize: 18 }}>Tell us what you love about the hostel, or what we could be doing better </h4>
                                <textarea type="textarea" name="suggestion" placeholder=" Any Suggestions" />
                            </div>
                        </div>
                        <div className="RatingPersonDetail">
                            <div className=" guestidname1">
                                <strong>Guest Id :</strong><br />
                                <input type="text" className="form-control" required name="id" />
                            </div>
                            <div className=" guestidname2">
                                <strong>Name : </strong><br />
                                <input type="text" className='form-control' required name='name' />
                            </div>
                            <div className=" guestidname3">
                                <strong>E-Mail Id : (optional) </strong><br />
                                <input type="text" className='form-control' name='emailid' />
                            </div>
                        </div>
                        <div className="ratingbutton">
                            <button type="Submit" className="btn Ratingsubmit">Submit</button>
                            <button type="Reset" className='btn Ratingreset'>Reset</button>
                        </div>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="assets/js/script.min.js"></script>
            </div >
        </div >


    );
}
