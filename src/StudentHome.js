import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import authHeader from "./Headerhelper";
import "./styles.css";
export default function StudentHome() {
    const[tdata,setTdata]=useState([]);
    const navigate = useNavigate();
    const getCurrentUser = () => {
        return JSON.parse(localStorage.getItem("user"));
      };
    const currentUser = getCurrentUser();
    const passed_email = currentUser.email;
    console.log(passed_email)
    const Update = () => {
        navigate("/register");
    }

    const logout = () => {
        navigate("/");
    }

    const top = () => {
        window.scrollTo(0, 0);
    }
    const show = () => {
        var x = document.getElementById("Box").innerHTML = ` <i class="fa-solid fa-house-user"></i> Complaint Box `;
        x.style.display = "Block";
    }
    const hide = () => {
        var x = document.getElementById("Box").innerHTML = ` <i class="fa-solid fa-house-user"></i> `;
        x.style.display = "none";
    }

    const gotoComplaintBox = () => {
        navigate("/complaintBox");
    }
    const id=1;
    function displaydata() {

        axios.get("http://localhost:8080/getdata/"+id, { mode: 'no-cors' })
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        displaydata();
    }, [])


    return (
        <div id="wrapper" >
            <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 fixed-side" >
                <div class="container-fluid d-flex flex-column p-0"><a
                    class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="">
                    <div class="sidebar-brand-icon rotate-n-15"><i class="fa-solid fa-building-columns"></i></div>
                    <div class="sidebar-brand-text mx-3"><span>College Name</span></div>
                </a>
                    <hr class="sidebar-divider my-0" /><br />
                    <ul class="navbar-nav text-light" id="accordionSidebar">
                        <br /> <br />
                        <li class="nav-item"><a style={{ position: "relative", left: 15 }} class="nav-link pcdptr" onClick={top} href=""> <span style={{ fontSize: 23 }}>Home</span></a></li>
                        <li class="nav-item"><a style={{ position: "relative", left: 15 }} class="nav-link pcdptr" onClick={Update} href=""><span style={{ fontSize: 20 }}>Update Details</span></a></li>
                        <li class="nav-item"><a style={{ position: "relative", left: 15 }} class="nav-link pcdptr" onClick={logout} href=""><span style={{ fontSize: 20 }}> Log out</span></a></li>
                    </ul>
                    <div class="text-center d-none d-md-inline"></div>
                </div>
            </nav>
            
            <div class="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar fixed-top">
                        <div class="container-fluid">
                            <h2 style={{ textAlign: "center" }}>Welcome  Vishal !!</h2>
                        </div>
                    </nav>

                    <div className="Detailsbox">
                        <div className="IdHeading">Student Id : 192198 </div>
                        {/*---------------- Personal Details--------------- */}
                        <div className="CardBlock1">
                            <p className="Heading" >Personal Details</p>
                            <div className="HomePage" >
                                <label for="text" class="form-label"> <strong>Full Name:</strong> Vishal Kukde</label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label for="dob" class="form-label"><strong>Parent Full Name:</strong> Dnyaneshwar Kukde </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label for="dob" class="form-label"><strong>Date of Birth:</strong> 19-09-1998 </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label for="Gender" class="form-label"><strong>Gender:</strong> Male </label>
                            </div>
                        </div>
                        <br />
                        {/*---------------- Contact Details--------------- */}
                        <div className="CardBlock2">
                            <p className="Heading" >Contact Details</p>
                            <div className="HomePage" >
                                <label for="mobno" class="form-label "><strong>Mobile No:</strong> 7030530997 </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label for="email" class="form-label"><strong>E-Mail:</strong> vishalkukde19@gmail.com </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label for="pmobno" class="form-label "> <strong>Parent Mobile No:</strong> 987654321 </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label "><strong> Address:</strong> 46,Hiwari Nagar  </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label "><strong> City:</strong> Nagpur</label>
                            </div>
                            <div className="HomePage" id="Line">
                                <label class="form-label"> <strong>State:</strong> "Maharashtra" </label>
                            </div>
                            <div className="HomePage" id="Line">

                                <label class="form-label" style={{ position: "relative", left: 190 }}><strong> Pin Code</strong> : 440008</label>

                            </div>
                        </div>
                        {/*---------------- Academic Details--------------- */}
                        <div className="CardBlock2">
                            <p className="Heading" >Academic Details</p>
                            <div className="HomePage" >
                                <label class="form-label "><strong>College Name :</strong> Priyadarshini College of Engg.</label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label"><strong>Admission Date:</strong> 18-08-2017 </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label class="form-label"><strong>Branch:</strong> Mechanical Engg. </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label"><strong>Current Year/Semester:</strong> 4yr / 8 Sem </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label class="form-label "><strong>Course Type :</strong> B.E /BCA/ BSC  </label>
                            </div>
                        </div>
                        {/*----------------Fees Details--------------- */}
                        <div className="CardBlock2">
                            <p className="Heading" >Fees Details</p>
                            <div className="HomePage" >
                                <label class="form-label "><strong>Total Fee:</strong> 100</label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label"><strong>Paid fee:</strong> 60 </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label class="form-label"><strong>Remaining fee:</strong> 40 </label>
                            </div>
                        </div>
                        <a class="Complaintbox" id="Box" onMouseOver={show} onMouseOut={hide} onClick={gotoComplaintBox} href=" "><i class="fa-solid fa-house-user"></i></a>
                    </div>
                </div>
                <a class="border rounded d-inline scroll-to-top" onClick={top} href=""><i class="fas fa-angle-up"></i></a>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="assets/js/script.min.js"></script>
        </div>
    );
}