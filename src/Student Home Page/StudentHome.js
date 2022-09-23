import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function StudentHome() {
    const [tdata, setTdata] = useState([]);

    // for edit details
    const [shows, setShows] = useState(false);

    const handleClose = () =>{
        setmobile("");
        setpmobile("");
        setaddress("");
        setcity("");
        setstate("");
        setpin("");
        setShows(false);

    } 
    const handleShow = () => setShows(true);
   
    //Update 
    const handleUpdate = () =>{
        console.log(formValue);
        setShows(false);
    }



    const [mobile, setmobile] = useState("");
    const [pmobile, setpmobile] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [pin, setpin] = useState("");
    const [mobileerror, setmobileerror] = useState(false);
    // const [emailerror, setemailerror] = useState(false);
    const [pmobileerror, setpmobileerror] = useState(false);
    const [pinerror, setpinerror] = useState(false);
   

    const handleMobile = (e)=>{
        var value = e.target.value
        if(isNaN(value)){
            setmobileerror(true)
        }else{
            setmobileerror(false)
        }
        if(value.length!==10){
            setmobileerror(true)
        }else{
            setmobileerror(false)
        }
        setmobile(value)
    }
    // const handleEmail = (e)=>{
    //     var value = e.target.value
    //     if(!/\S+@\S+\.\S+/.test(value)){
    //         setemailerror(true)
    //     }else{
    //         setemailerror(false)
    //     }
    //     setemail(value);
    // }
    const handlePmobile = (e)=>{
        var value = e.target.value
        if(isNaN(value)){
            setpmobileerror(true)
        }else{
            setpmobileerror(false)
        }
        if(value.length!==10){
            setpmobileerror(true)
        }else{
            setpmobileerror(false)
        }
        setpmobile(value);
    }
    const handleAddress = (e)=>{
        var value = e.target.value
        setaddress(value);
    }
    const handleCity = (e)=>{
        var value = e.target.value
        setcity(value);
    }
    const handleState = (e)=>{
        var value = e.target.value
        setstate(value);
    }
   

    const handlePincode=(e)=>{
        var value = e.target.value
        if(isNaN(value)){
            setpinerror(true)
        }else{
            setpinerror(false)
        }
        if(value.length !== 6){
            setpinerror(true);
        }else{
            setpinerror(false);
        }
        setpin(value);
    }


    let formValue = {mobile,pmobile,address,city,state,pin}


// vishal
    const navigate = useNavigate();
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
    function displaydata() {

        axios.get("http://localhost:8080/getall", { mode: 'no-cors' })
            .then((response) => {
                setTdata(response.data);
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
                        <div className="IdHeading">Student Id : 9891170 </div>
                        {/*---------------- Personal Details--------------- */}

                        <div className="CardBlock1 ">
                            <p className="Heading">Room Details</p>
                            <div className="HomePage">
                                <label className="form-label" > <strong>Room No:</strong>S101  </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label className="form-label"><strong> Bed No:</strong> A </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label className="form-label"><strong>Wing :</strong> Alpha </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label className="form-label"><strong>From :</strong> 08-08-2022 </label>
                            </div>
                            <div className="HomePage" id="Line">
                                <label className="form-label"><strong>Till :</strong>08-08-2023  </label>
                            </div>
                            <br/>
                            <div className="HomePage">
                                <label className="form-label"><strong>Feestatus :</strong>Paid  </label>
                            </div>
                        </div>


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
                    
                            <p className="Heading" >Contact Details
                            {/* chaitra................................... */}
                            <Button variant="primary" style={{ backgroundColor:"white", marginLeft: "750px" }} onClick={handleShow}><i class="fa fa-pencil"></i></Button>
                            </p>

                            <Modal show={shows} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit Details</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Mobile NO.</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Mobile No."
                                                autoFocus
                                                onChange={handleMobile}
                                                value={mobile}
                                                required={true}
                                            /></Form.Group>
                                             {mobileerror?<p style={{color:"red", fontSize:"small"}}>Only 10 numbers are allowed</p>:null}

                                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                                            <Form.Label>E-mail</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="name@example.com"
                                                autoFocus
                                                onChange={handleEmail}
                                                value={email}
                                                required={true}
                                            /></Form.Group>
                                            {emailerror?<p style={{color:"red", fontSize:"small"}}>Invalid format</p>:null} */}

                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                                            <Form.Label>Parent Mobile No.</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Parent Mobile No."
                                                autoFocus
                                                onChange={handlePmobile}
                                                value={pmobile}
                                                required={true}
                                            /></Form.Group>
                                            {pmobileerror?<p style={{color:"red", fontSize:"small"}}>Only 10 numbers are allowed</p>:null}

                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control
                                               as="textarea"
                                                placeholder="Address"
                                                autoFocus
                                                onChange={handleAddress}
                                                value={address}
                                                required={true}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                                            <Form.Label>City</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="City"
                                                autoFocus
                                                onChange={handleCity}
                                                value={city}
                                                required={true}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                                            <Form.Label>State</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="State"
                                                autoFocus
                                                onChange={handleState}
                                                value={state}
                                                required={true}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                                            <Form.Label>Pin Code</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Pin Code"
                                                autoFocus
                                                onChange={handlePincode}
                                                value={pin}
                                                required={true}
                                            />
                                        </Form.Group>
                                        {pinerror?<p style={{color:"red", fontSize:"small"}}>Enter 6 number pin</p>:null}
                                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Example textarea</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group> */}
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button type="submit" variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button type="submit" variant="primary" onClick={handleUpdate} >
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            {/* .................................... */}

                            <div className="HomePage" >
                                <label for="mobno" class="form-label "><strong>Mobile No:</strong> 1234567890 </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label for="email" class="form-label"><strong>E-Mail:</strong> vishal@gmail.com </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label for="pmobno" class="form-label "> <strong>Parent Mobile No:</strong> 9876543210 </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label "><strong> Address:</strong> 86,Hiwari   </label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label "><strong> City:</strong> Pune</label>
                            </div>
                            <div className="HomePage" id="Line">
                                <label class="form-label"> <strong>State:</strong> "Maharashtra" </label>
                            </div>
                            <div className="HomePage" id="Line">

                                <label class="form-label" style={{ position: "relative", left: 190 }}><strong> Pin Code</strong> : 123456</label>

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
                                <label class="form-label"><strong>Admission Date:</strong> 18-08-2016 </label>
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
                                <label class="form-label "><strong>Course Type :</strong> B.E  </label>
                            </div>
                        </div>
                        {/*----------------Fees Details--------------- */}
                        <div className="CardBlock2">
                            <p className="Heading" >Fees Details</p>
                            <div className="HomePage" >
                                <label class="form-label "><strong>Total Fee:</strong> 80,000</label>
                            </div>
                            <br />
                            <div className="HomePage">
                                <label class="form-label"><strong>Paid fee:</strong> 60,000 </label>
                            </div>
                            <br />
                            <div className="HomePage" >
                                <label class="form-label"><strong>Remaining fee:</strong> 20,000 </label>
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