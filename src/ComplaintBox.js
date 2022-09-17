import React from "react";
import { useNavigate } from "react-router-dom";
import './Complaint.css';

export default function ComplaintBox() {
    const navigate = useNavigate();
    const gotostudentHome = () => {
        navigate("/studentHome")
    }
    const logout = () => {
        navigate("/");
    }
    return (
        <div >
            <div class="d-flex flex-column CBody" id="content-wrapper">
                <div id="content">
                    <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar fixed-top  horinav">
                        <div className="container-fluid CBox">
                            <h2 style={{ fontSize: 25 }}>Complaint Box !!</h2>
                            <div className="ComplaintBtn">
                                <button className="btn btn1" onClick={gotostudentHome}> Back to Home</button>
                                <button className="btn btn2" onClick={logout}> Log Out</button>
                            </div>
                        </div>
                    </nav>
                    <div className="form-por">
                        <form className="formdetail">
                            <h4 style={{color:"black"}}>Hello Student</h4>
                            <div className="form-group">
                                <strong>Student Id :</strong><br />
                                <input type="text" className="form-control" required name="id" />
                            </div>
                            <div className="form-group">
                                <strong>Full Name : </strong><br />
                                <input type="text" className='form-control' required name='name' />
                            </div>
                            <div className="form-group">
                                <strong >Email Id : </strong><br />
                                <input type="email" className='form-control' required name='emailId' />
                            </div>
                            <div>
                                {/* <label for="Comlpaint"><strong>Choose Your Compliant : </strong></label><br />
                                <select className='Form-Control' id="option" name="Comaplaint" required multiple>
                                    <option value={"a"}> ABCDEFGHIJKL</option>
                                    <option value={"b"}> ABCDEFGHIJKL</option>
                                    <option value={"c"}> ABCDEFGHIJKL</option>
                                    <option value={"d"}> ABCDEFGHIJKL</option>
                                    <option value={"e"}> ABCDEFGHIJKL</option>
                                    

                                    </select> */}


                                <strong>Choose your Complaint Type : </strong><br />
                                <div className="probcol">
                                    <td className="probcol1">
                                        <tr>
                                            <input type={"checkbox"} value={"a"}/> 
                                            <label for="Comlpaint"> Electricity Related Issue </label>
                                        </tr>
                                        <tr>
                                            <input type={"checkbox"} value={"b"} />
                                            <label for="Comlpaint"> Drinking Water </label>
                                        </tr>

                                        <tr>
                                            <input type={"checkbox"} value={"c"} />
                                            <label for="Comlpaint"> Regarding Wi-Fi</label>
                                        </tr>
                                        <tr>
                                            <input type={"checkbox"} value={"d"} />
                                            <label for="Comlpaint"> Laundry Issue </label>
                                        </tr>
                                    </td>
                                    <td className="probcol2">
                                        <tr>
                                            <input type={"checkbox"} value={"e"} />
                                            <label for="Comlpaint">Food Quality </label>
                                        </tr>
                                        <tr>
                                            <input type={"checkbox"} value={"f"} />
                                            <label for="Comlpaint">Staff Behaviour </label>
                                        </tr>
                                        <tr>
                                            <input type={"checkbox"} value={"g"} />
                                            <label for="Comlpaint">Cleanliness</label>
                                        </tr>
                                        <tr>
                                            <input type={"checkbox"} value={"h"} />
                                            <label for="Comlpaint"> Security </label>
                                        </tr>
                                    </td>
                                </div>
                            </div>
                            <div>
                                <strong>Any other Complaint ? : (optional) </strong><br />
                                <textarea type="textarea" className='form-control' name='emailId' />

                            </div>
                            <div>
                                <button type="Submit" className="btn submit">Submit</button>
                                <button type="Reset" className='btn reset'>Reset</button>
                            </div>

                        </form>

                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="assets/js/script.min.js"></script>
            </div >
        </div >


    );
}
