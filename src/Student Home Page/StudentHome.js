import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";


export default function StudentHome() {
    const [room_no, setRoom_no] = useState("")
    const [bed_no, setBed_no] = useState("")
    const [wing, setWing] = useState("")
    const [from, setFrom] = useState("")
    const [till, setTill] = useState("")
    const [student_id, setStudent_id] = useState("")
    const [student_full_name, setStudent_full_name] = useState("")
    const [parrent_full_name, setParrent_full_name] = useState("")
    const [dob, setDob] = useState("")
    const [gender, setGender] = useState("")
    const [student_mo_no, setStudent_mo_no] = useState("")
    const [email_id, setEmail_id] = useState("")
    const [parrent_mo_no, setParrent_mo_no] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPincode] = useState("")
    const [collage_name, setCollage_name] = useState("")
    const [admission_date, setAdmission_date] = useState("")
    const [branch, setBranch] = useState("")
    const [course_Applied, setCourse_Applied] = useState("")
    const[fees,setFees] = useState("")
    const[dues,setDues] = useState("")
    const[feepaid,setFeepaid] = useState("")


// vishal
    const navigate = useNavigate();
    const Update = () => {
        navigate("/register");
    }

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/");
    }

    const top = () => {
        window.scrollTo(0, 0);
    }
    const show = () => {
        var x = document.getElementById("Box").innerHTML = ` <i class="fa-solid fa-box-open"></i> Complaint Box `;
        x.style.display = "Block";
    }
    const hide = () => {
        var x = document.getElementById("Box").innerHTML = ` <i class="fa-solid fa-box-open"></i> `;
        x.style.display = "none";
    }

    const gotoComplaintBox = () => {
        navigate("/complaintBox");
    }
    
    function capitalizeFirst(str) {
        if (gender==="Male") {
            console.log("hey");
            forRoomNo()
        }
        if (gender==="Female") {
             forFemaleRoom()
        }
        // return str.charAt(0).toUpperCase() + str.slice(1);
        
    }
    const forRoomNo = async()=>{
        await axios.get("http://localhost:8080/api/roomalloc/getmaleroom/"+student_full_name,{mode:'no-cors'}).then((response)=>{
        console.log(response.data)
                setRoom_no(response.data[0].room_no)
                setBed_no(response.data[0].bed_no)
                setWing(response.data[0].wing)
                setFrom(response.data[0].from_date)
                setTill(response.data[0].till_date)
                setFeepaid(response.data[0].feepaid)
                setDues(response.data[0].dues)
                setFees(response.data[0].fees)
        })
    }

    const forFemaleRoom = async()=>{
        await axios.get("http://localhost:8080/api/roomalloc/getfemaleroom/"+student_full_name,{mode:'no-cors'}).then((response)=>{
        console.log(response.data)
                setRoom_no(response.data[0].room_no)
                setBed_no(response.data[0].bed_no)
                setWing(response.data[0].wing)
                setFrom(response.data[0].from_date)
                setTill(response.data[0].till_date)
                setFeepaid(response.data[0].feepaid)
                setDues(response.data[0].dues)
                setFees(response.data[0].fees)
        })
    }



    const url = "http://localhost:8080/api/dao/user/";
    const user = JSON.parse(localStorage.getItem('user'))
    let email = user.username;
    console.log(email);
    const displaystudentdata = () => {
        axios.get(url + email, { mode: 'no-cors' })
            .then((response) => {
                
                console.log(response.data);
                // setRoom_no(response.data.room_no)
                // setBed_no(response.data.bed_no)
                // setWing(response.data.wing)
                // setFrom(response.data.from)
                // setTill(response.data.till)
                setStudent_id(response.data[0].srid)
                setStudent_full_name(response.data[0].student_full_name)
                setParrent_full_name(response.data[0].parent_full_name)
                setDob(response.data[0].dob)
                setGender(response.data[0].gender)
                setStudent_mo_no(response.data[0].student_mo_no)
                setEmail_id(response.data[0].email)
                setParrent_mo_no(response.data[0].parent_mo_no)
                setAddress(response.data[0].address)
                setCity(response.data[0].city)
                setState(response.data[0].state)
                setPincode(response.data[0].pincode)
                setCollage_name(response.data[0].college_name)
                setAdmission_date(response.data[0].admission_date)
                setBranch(response.data[0].branch)
                setCourse_Applied(response.data[0].course_applied)
            })
    }

    useEffect(() => {
        displaystudentdata();
    }, []);
    





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
                        
                        <li class="nav-item"><a style={{ position: "relative", left: 15 }} class="nav-link pcdptr" onClick={logout} href=""><span style={{ fontSize: 20 }}> Log out</span></a></li>
                    </ul>
                    <div class="text-center d-none d-md-inline"></div>
                </div>
            </nav>

            <div class="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar fixed-top">
                        <div class="container-fluid">
                            <h2 style={{ textAlign: "center" }}>Welcome ! {student_full_name} </h2>
                        </div>
                    </nav>

                    <div className="Detailsbox">
                        <div className="IdHeading">Student Id : {student_id} </div>
                        {/*---------------- Personal Details--------------- */}

                        <div className="CardBlock1 ">
                            <p className="Heading">Room Details</p>
                            <div className="HomePage">
                                <label className="form-label" > <strong>Room No:</strong> {room_no}  </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label className="form-label"><strong> Bed No:</strong> {bed_no} </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label className="form-label"><strong>Wing :</strong> {wing} </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label className="form-label"><strong>From :</strong> {from} </label>
                            </div>
                            <div className="HomePage" id="Line">
                                <label className="form-label"><strong>Till :</strong>{till}  </label>
                            </div>
                            <br/>
                            <div className="HomePage">
                                <label className="form-label"><strong>Feestatus :</strong> Paid </label>
                            </div>
                        </div>


                        <div className="CardBlock1">
                            <p className="Heading" >Personal Details</p>
                            <div className="HomePage" >
                                <label for="text" class="form-label"> <strong>Full Name:</strong> {student_full_name}</label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label for="dob" class="form-label"><strong>Parent Full Name:</strong> { parrent_full_name} </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label for="dob" class="form-label"><strong>Date of Birth:</strong> {dob} </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label for="Gender" class="form-label"><strong>Gender:</strong> {gender} </label>
                            </div>
                        </div>
                        <br />
                        {/*---------------- Contact Details--------------- */}
                        <div className="CardBlock2">
                    
                            <p className="Heading" >Contact Details</p>

                            {/* .................................... */}

                            <div className="HomePage" >
                                <label for="mobno" class="form-label "><strong>Mobile No:</strong> {student_mo_no} </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label for="email" class="form-label"><strong>E-Mail:</strong>{email_id}</label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label for="pmobno" class="form-label "> <strong>Parent Mobile No:</strong> {parrent_mo_no} </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label "><strong> Address:</strong>{address}   </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label "><strong> City:</strong>{(city)}</label>
                            </div>
                            <div className="HomePage" id="Line">
                                <label class="form-label"> <strong>State:</strong> { ( state)} </label>
                            </div>
                            <div className="HomePage" id="Line">

                                <label class="form-label" style={{ position: "relative", left: 190 }}><strong> Pin Code</strong> {pincode}</label>

                            </div>
                        </div>
                        {/*---------------- Academic Details--------------- */}
                        <div className="CardBlock2">
                            <p className="Heading" >Academic Details</p>
                            <div className="HomePage" >
                                <label class="form-label "><strong>College Name :</strong> {collage_name}</label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label"><strong>Admission Date:</strong> {admission_date} </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label class="form-label"><strong>Branch:</strong> {branch} </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label"><strong>Current Year/Semester:</strong> 4yr / 8 Sem </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label class="form-label "><strong>Course Type :</strong> {course_Applied}  </label>
                            </div>
                        </div>
                        {/*----------------Fees Details--------------- */}
                        <div className="CardBlock2">
                            <p className="Heading" >Fees Details</p>
                            <div className="HomePage" >
                                <label class="form-label "><strong>Total Fee:</strong> {fees}</label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label"><strong>Paid fee:</strong> {feepaid} </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label class="form-label"><strong>Remaining fee:</strong> {dues} </label>
                            </div>
                        </div>
                        <a class="Complaintbox" id="Box" onMouseOver={show} onMouseOut={hide} onClick={gotoComplaintBox} href=" "><i class="fa-solid fa-box-open"></i></a>
                    </div>
                </div>
                <a class="border rounded d-inline scroll-to-top" onClick={top} href=""><i class="fas fa-angle-up"></i></a>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="assets/js/script.min.js"></script>
        </div>
    );
}