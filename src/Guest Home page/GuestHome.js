import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
export default function GuestHome() {
    const navigate = useNavigate();
    const logout = () => {
        navigate("/");
    }
    const gotoReview = () => {
        navigate("/review");
    }
    const top = () => {
        window.scrollTo(0, 0);
    }

    const show = () => {
        var x = document.getElementById("Box").innerHTML = ` <i class='fas fa-comment'></i> Review `;
        x.style.display = "Block";
    }
    const hide = () => {
        var x = document.getElementById("Box").innerHTML = `<i class='fas fa-comment'></i> `;
        x.style.display = "none";
    }
    //----------------------------JavaScript here for mapping-------------------------------------
    const[guest_Id,setGuest_Id] = useState("")
    const[Istate,setIstate] = useState("")
    const[address,setAddress] = useState("")
    const[room_Type,setRoomType] = useState("")
    const[date_Of_Birth,setDOB] = useState("")
    const[aadhar_no,setAadharnum] = useState("")
    const[check_in_date,setCheckinDate] = useState("")
    const[check_out,setCheckoutDate] = useState("")
    const[city,setCity] = useState("")
    const[gender,setGender] = useState("")
    const[guestName,setGuestName] = useState("")
    const[id_Proof,setIdProof] = useState("")
    const[mobile_no,setMobilenum] = useState("")
    const[pincode,setPincode] = useState("")
    const url="http://localhost:8080/getone/"
    const id =1
    const displayguestdata = ()=>{
        axios.get(url+id,{mode:'no-cors'}).then((response)=>{
            setGuest_Id(response.data.guest_Id)
            setIstate(response.data.state)
            setAddress(response.data.address)
            setRoomType(response.data.room_Type)
            setDOB(response.data.date_Of_Birth)
            setAadharnum(response.data.aadhar_no)
            setCheckinDate(response.data.check_in_date)
            setCheckoutDate(response.data.check_out)
            setCity(response.data.city)
            setGender(response.data.gender)
            setGuestName(response.data.guestName)
            setIdProof(response.data.id_Proof)
            setMobilenum(response.data.mobile_no)
            setPincode(response.data.pincode)

            console.log(response.data);
             console.log(guest_Id);
             console.log(Istate);
             console.log(address);
            console.log(room_Type);
            console.log(date_Of_Birth);
            console.log(aadhar_no);
            console.log(check_in_date);
            console.log(check_out);
            console.log(city);
            console.log(gender);
            console.log(guestName);
            console.log(id_Proof);
            console.log(mobile_no);
            console.log(pincode);

        })
    }


    function capitalizeFirst(str){
        return str.charAt(0).toUpperCase() + str.slice(1);      
  }




    useEffect(() => {
        displayguestdata();
      }, [])




    // ---------------------------Html here---------------------------------------
    return (
        <div id="wrapper">
            <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 fixed-side" >
                <div class="container-fluid d-flex flex-column p-0"><a
                    class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#0">
                    <div class="sidebar-brand-icon rotate-n-15"><i class="fa-solid fa-building-columns"></i></div>
                    <div class="sidebar-brand-text mx-3"><span>College Name</span></div>
                </a>
                    <hr class="sidebar-divider my-0" /><br />
                    <ul class="navbar-nav text-light" id="accordionSidebar">
                        <br /> <br />
                        {/* <li class="nav-item"><a style={{ padding: 40 }}><span style={{ fontSize: 20 }}>Id : 986532 </span></a></li><br />
                        <li class="nav-item"><a style={{ padding: 30 }}><span style={{ fontSize: 20 }}>Name : vishal </span></a></li>
                        <br /> */}
                        <li class="nav-item"><a style={{ position: "relative", left: 15 }} class="nav-link pcdptr" onClick={top} href="#page-top"> <span style={{ fontSize: 23 }}>Home</span></a></li>
                        {/* <li class="nav-item"><a style={{ position: "relative", left: 15 }} class="nav-link pcdptr" onClick={Update} href="#0"><span style={{ fontSize: 20 }}>Update Details</span></a></li> */}
                        <li class="nav-item"><a style={{ position: "relative", left: 15 }} class="nav-link pcdptr" onClick={logout} href="#0"><span style={{ fontSize: 20 }}> Log out</span></a></li>
                    </ul>
                    <div class="text-center d-none d-md-inline"></div>
                </div>
            </nav>
            <div class="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar fixed-top">
                        <div class="container-fluid">
                            {/* <button class="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button">
                                <i class="fas fa-bars"></i>
                            </button> */}
                            <h2 style={{ textAlign: "center" }}>Welcome Prabhat!!</h2>
                            {/* <form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div class="input-group"></div>
                            </form> */}
                            {/* <ul class="navbar-nav flex-nowrap ms-auto">
                                <li class="nav-item dropdown d-sm-none no-arrow">
                                    <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#0"><i
                                        class="fas fa-search"></i></a>
                                    <div class="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                        <form class="me-auto navbar-search w-100">
                                            <div class="input-group">
                                                <input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary py-0" type="button">
                                                        <i class="fas fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <div class="d-none d-sm-block topbar-divider"></div>
                            </ul> */}
                        </div>
                    </nav>

                    <div className="Detailsbox">
                        <div className="IdHeading">Guest Id : 1{guest_Id} </div>
                        {/*---------------- Stay Details--------------- */}
                        <div className="CardBlock1">
                            <p className="Heading" >Stay Details</p>
                            <div className="HomePage">
                                <label class="form-label"> <strong>Check-in Time :</strong> 12.00 PM </label>
                            </div>
                            <div className="HomePage" id="Line">
                                <label class="form-label"> <strong>Check-in Date:</strong> 09-09-2022{check_in_date}</label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label"> <strong>Check-out Time:</strong> 11.00 AM</label>
                            </div>
                            <div className="HomePage" id="Line">
                                <label class="form-label"><strong>Check-out Date :</strong>10-09-2022 {check_out}</label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label class="form-label"><strong>Room Type :</strong>Single {room_Type} </label>
                            </div>
                            <br/>
                            <div className="HomePage" >
                                <label class="form-label"><strong>Room number :</strong>101 {room_Type} </label>
                            </div>
                        </div>
                        <br />
                        {/*---------------- Personal Details--------------- */}
                        <div className="CardBlock12">
                            <p className="Heading" >Personal Details</p>
                            <div className="HomePage" >
                                <label for="text" class="form-label"> <strong>Full Name:</strong>Prabhat chandra dwivedi {capitalizeFirst(guestName)}</label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label for="dob" class="form-label"><strong>Date of Birth:</strong>21-11-1998 {date_Of_Birth} </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label for="Gender" class="form-label"><strong>Gender:</strong>Male {gender} </label>
                            </div>
                        </div>
                        <br />
                        {/*---------------- Contact Details--------------- */}
                        <div className="CardBlock22">
                            <p className="Heading" >Contact Details</p>
                            <div className="HomePage" >
                                <label for="mobno" class="form-label "><strong>Mobile No:</strong>9876543210 {mobile_no} </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label for="email" class="form-label"><strong>E-Mail:</strong> prabhat@gmail.com </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label "><strong> Valid Id Proof :</strong>Aadhar {id_Proof} </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label "><strong> Aadhar No.:</strong>1234-1234-1234 {aadhar_no}  </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label "><strong> Address:</strong>Ashok Nagar {address}  </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label "><strong> City:</strong>Ballia {city}</label>
                            </div>
                            <div className="HomePage" id="Line">
                                <label class="form-label"> <strong>State:</strong>Uttar Pradesh {Istate}</label>
                            </div>
                            <div className="HomePage" id="Line">

                                <label class="form-label" style={{ position: "relative", left: 190 }}><strong> Pin Code</strong> :277001 {pincode}</label>

                            </div>
                        </div>

                        {/*----------------Fees Details--------------- */}
                        <div className="CardBlock22">
                            <p className="Heading" >Payment Details</p>
                            <div className="HomePage" >
                                <label class="form-label "><strong>Total Amount:</strong> INR 1000 </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label"><strong>Paid Amount :</strong> INR 1000 </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label class="form-label"><strong>Remaining fee:</strong> INR 0 </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label class="form-label"><strong>Payment Mode:</strong> Upi / Cash </label>
                            </div>
                        </div>
                        <div className="IdHeading1"> Wish you a Comfortable Stay....!! </div><br/>
                        <a class="Complaintbox" id="Box" onMouseOver={show} onMouseOut={hide} onClick={gotoReview} href=" "><i class="fa-solid fa-flag-user"></i></a>
                        <hr /><hr />
                    </div>
                </div>
                <a class="border rounded d-inline scroll-to-top" onClick={top} href="#page-top"><i class="fas fa-angle-up"></i></a>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="assets/js/script.min.js"></script>
        </div>
    );
}