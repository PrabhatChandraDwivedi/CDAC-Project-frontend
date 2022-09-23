import { useEffect } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Popup from "../../../Dummytest/Popuptest";
import "./GuestRoom.css"
export default function StudentRoom(){
  function Popup1(){
  
    const [shows, setShows] = useState(true);
   // setShows(bool);
  
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
    // console.log(formValue)
  
  
    return(
       
                           
  
                            <Modal show={true} onHide={handleClose}>
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
                           
    )
                                      }
    const showAvailableRoom = () => {
        document.getElementById("avilroom").style.display = "block";
        document.getElementById("bookedroom").style.display = "none";
      }
      const showBookedRoom = () => {
        document.getElementById("avilroom").style.display = "none";
        document.getElementById("bookedroom").style.display = "block";
      };
      const bookedRoom1 = () => {
        document.getElementById("bookedroom1").style.display = 'block';
      }
      const bookedRoom2 = () => {
        document.getElementById("bookedroom2").style.display = 'block';
      }
      const bookedRoom3 = () => {
        document.getElementById("bookedroom3").style.display = 'block';
      }
      const bookedRoom4 = () => {
        document.getElementById("bookedroom4").style.display = 'block';
      }
      const bookedRoom5 = () => {
        document.getElementById("bookedroom5").style.display = 'block';
      }
      const bookedRoom6 = () => {
        document.getElementById("bookedroom6").style.display = 'block';
      }
      const bookedRoom7 = () => {
        document.getElementById("bookedroom7").style.display = 'block';
      }
      const bookedRoom8 = () => {
        document.getElementById("bookedroom8").style.display = 'block';
      }
      const bookedRoom9 = () => {
        document.getElementById("bookedroom9").style.display = 'block';
      }
      const bookedRoom10 = () => {
        document.getElementById("bookedroom10").style.display = 'block';
      }
      const bookedRoom11 = () => {
        document.getElementById("bookedroom11").style.display = 'block';
      }
      const bookedRoom12 = () => {
        document.getElementById("bookedroom12").style.display = 'block';
      }
      const hideRoom1=()=>{
        document.getElementById("bookedroom1").style.display='none'
      }
      const hideRoom2=()=>{
        document.getElementById("bookedroom2").style.display='none'
      }
      const hideRoom3=()=>{
        document.getElementById("bookedroom3").style.display='none'
      }
      const hideRoom4=()=>{
        document.getElementById("bookedroom4").style.display='none'
      }
      const hideRoom5=()=>{
        document.getElementById("bookedroom5").style.display='none'
      }
      const hideRoom6=()=>{
        document.getElementById("bookedroom6").style.display='none'
      }
      const hideRoom7=()=>{
        document.getElementById("bookedroom7").style.display='none'
      }
      const hideRoom8=()=>{
        document.getElementById("bookedroom8").style.display='none'
      }
      const hideRoom9=()=>{
        document.getElementById("bookedroom9").style.display='none'
      }
      const hideRoom10=()=>{
        document.getElementById("bookedroom10").style.display='none'
      }
      const hideRoom11=()=>{
        document.getElementById("bookedroom11").style.display='none'
      }
      const hideRoom12=()=>{
        document.getElementById("bookedroom12").style.display='none'
      }

      /////pop-up form logic
















     
    
    return(
        
            
                <div>
                    <div id="wrapper">
                <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                  <div class="container-fluid d-flex flex-column p-0">
                    <a
                      class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
                      href="#0"
                    >
                      <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fa-solid fa-building-columns"></i>
                      </div>
                      <div class="sidebar-brand-text mx-3">
                        <span>College name</span>
                      </div>
                    </a>
                    <hr class="sidebar-divider my-0" />
                    <ul class="navbar-nav text-light" id="accordionSidebar">
                      <li class="nav-item">
                        <a class="nav-link pcdptr" onClick={''}href="#0">
                          <i class="fas fa-tachometer-alt"></i>
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link pcdptr" onClick={''}href="#0">
                          <i class="fas fa-user"></i>
                          <span>Room</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active pcdptr"href="#0" >
                          <i class="fas fa-table"></i>
                          <span>Student</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link pcdptr" onClick={''}href="#0" >
                          <i class="far fa-user-circle"></i>
                          <span>Guest</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link pcdptr" onClick={''}href="#0">
                          <i class="far fa-user-circle"></i>
                          <span>Back</span>
                        </a>
                      </li>
                    </ul>
                    <div class="text-center d-none d-md-inline"></div>
                  </div>
                </nav>
                <div class="d-flex flex-column" id="content-wrapper">
                  <div id="content">
                    <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                      <div class="container-fluid">
                        <h2>Student Room</h2>
                        </div>
                        </nav>
        
        
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous" />
        
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        
        
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
                      integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
        
                    <div><button className='button1' onClick={showAvailableRoom}>show available rooms</button>
                    <button className='button2' onClick={showBookedRoom}>show booked rooms</button>
                    </div>
                     
                     
                    <div id='avilroom' style={{ display: 'none' }}>
                      <h3>Available Rooms</h3>
                      <hr></hr>
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Room no.</th>
                            <th scope="col">Room type</th>
                            <th scope="col">Bed1</th>
                            <th scope="col">Bed2</th>
                            <th></th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody style={{margin:0}}>
                          <tr>
                            <th scope="row">18</th>
                            <td>Double</td>
                            <td><span style={{ color: 'blue' }}><button onClick={Popup1} >available</button></span></td>
                            <td><span style={{ color: 'blue' }}>available</span></td>
                            <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                            <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                          </tr>
                          <tr>
                            <th scope="row">19</th>
                            <td>Double</td>
                            <td><span style={{ color: 'blue' }}>available</span></td>
                            <td><span style={{ color: 'blue' }}>available</span></td>
                            <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                            <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                          </tr>
                          <tr>
                            <th scope="row">20</th>
                            <td>Double</td>
                            <td><span style={{ color: 'blue' }}>available</span></td>
                            <td><span style={{ color: 'blue' }}>available</span></td>
                            <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                            <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                          </tr>
                          <tr>
                            <th scope="row">21</th>
                            <td>Double</td>
                            <td><span style={{ color: 'blue' }}>available</span></td>
                            <td><span style={{ color: 'blue' }}>available</span></td>
                            <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                            <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                          </tr>
                          <tr>
                            <th scope="row">22</th>
                            <td>Double</td>
                            <td><span style={{ color: 'blue' }}>available</span></td>
                            <td><span style={{ color: 'blue' }}>available</span></td>
                            <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                            <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                          </tr>
        
        
                        </tbody>
                      </table>
                    </div>
                    
                    <div id='bookedroom' style={{ display: 'none',marginRight:-33 }}>
                      <h3>Booked Room</h3>
                      <hr></hr>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="vikastr">
                            <div className="innertddiv" >
                              <div className="room_card" id='room_card'>
                                <h5>Room no. 23</h5>
                                <div id='bookedroom1' style={{ display: 'none' }}>
                                 <p>Vikas Kumar Yadav</p>
                                  <p>Prabhat Chandra</p>
                                  <button className='hbtn' onClick={hideRoom1}>hide</button>
                                </div>
                                <button className='button' onClick={bookedRoom1} >show details</button>
                              </div>
                            </div>
        
                            {/* <td><div className="room_card" id='room_card'>
                              <h5>Room no. 24</h5>
                              <div id='bookedroom2' style={{ display: 'none' }}>
                                <p>Manish Kumar</p>
                                <p>Wishvesh Thorat</p>
                                <button className='hbtn' onClick={hideRoom2}>hide</button>
                              </div>
                              <button className='button' onClick={bookedRoom2} >show details</button>
                            </div></td>
        
                            <td><div className="room_card" id='room_card'>
                              <h5>Room no. 25</h5>
                              <div id='bookedroom3' style={{ display: 'none' }}>
                               <p>Vishal Kukde</p>
                                <p>Chandan Prabhakar</p>
                                <button className='hbtn' onClick={hideRoom3}>hide</button>
                              </div>
                              <button className='button' onClick={bookedRoom3} >show details</button>
                            </div></td>
        
                            <td><div className="room_card" id='room_card'>
                              <h5>Room no. 26</h5>
                              <div id='bookedroom4' style={{ display: 'none' }}>
                                <p>Dileep Kumar</p>
                                <p>Pradeep Dinkar</p>
                                <button className='hbtn' onClick={hideRoom4}>hide</button>
                              </div>
                              <button className='button' onClick={bookedRoom4} >show details</button>
                            </div></td> */}
                          </tr>
                          <tr className="vikastr">
                            <div className="innertddiv"><div className="room_card" id='room_card'>
                              <h5>Room no. 27</h5>
                              <div id='bookedroom5' style={{ display: 'none' }}>
                                <p>Vinay Kashyap</p>
                                <p>Anmol Chauhan</p>
                                <button className='hbtn' onClick={hideRoom5}>hide</button>
                              </div>
                              <button className='button' onClick={bookedRoom5} >show details</button>
                            </div></div>
        
                            {/* <td><div className="room_card" id='room_card'>
                              <h5>Room no. 28</h5>
                              <div id='bookedroom6' style={{ display: 'none' }}>
                                <p>Manish Kumar</p>
                                <p>Naveen Chandra</p>
                                <button className='hbtn' onClick={hideRoom6}>hide</button>
                                
                              </div>
                              <button className='button' onClick={bookedRoom6} >show details</button>
                            </div></td>
        
                            <td><div className="room_card" id='room_card'>
                              <h5>Room no. 29</h5>
                              <div id='bookedroom7' style={{ display: 'none' }}>
                                <p>Ankit Patel</p>
                                <p>Mohan Kumar</p>
                                <button className='hbtn' onClick={hideRoom7}>hide</button>
                              </div>
                              <button className='button' onClick={bookedRoom7} >show details</button>
                            </div></td>
        
                            <td><div className="room_card" id='room_card'>
                              <h5>Room no. 30</h5>
                              <div id='bookedroom8' style={{ display: 'none' }}>
                                <p>Kamal Yadav</p>
                                <p>Chandan Kumar</p>
                                <button className='hbtn' onClick={hideRoom8}>hide</button>
                              </div>
                              <button className='button' onClick={bookedRoom8} >show details</button>
                            </div></td> */}
        
                          </tr>
                          <tr className="vikastr" >
                            <div className="innertddiv"><div className="room_card" id='room_card'>
                              <h5>Room no. 31</h5>
                              <div id='bookedroom9' style={{ display: 'none' }}>
                                <p>Rohan Ahuja</p>
                                <p>Tarun Chauhan</p>
                                <button className='hbtn' onClick={hideRoom9}>hide</button>
                              </div>
                              <button className='button' onClick={bookedRoom9} >show details</button>
                            </div></div>
        
                            <div className="innertddiv"><div className="room_card" id='room_card'>
                              <h5>Room no. 32</h5>
                              <div id='bookedroom10' style={{ display: 'none' }}>
                                <p>Vimal Kumar</p>
                                <p>Mukesh Sharma</p>
                                <button className='hbtn' onClick={hideRoom10}>hide</button>
                              </div>
                              <button className='button' onClick={bookedRoom10} >show details</button>
                            </div></div>
        
                            <div className="innertddiv"><div className="room_card" id='room_card'>
                              <h5>Room no. 33</h5>
                              <div id='bookedroom11' style={{ display: 'none' }}>
                                <p>Kishore Kumar</p>
                                <p>Deepak Kalal</p>
                                <button className='hbtn' onClick={hideRoom11}>hide</button>
                              </div>
                              <button className='button' onClick={bookedRoom11} >show details</button>
                            </div></div>
        
                            <div className="innertddiv"><div className="room_card" id='room_card'>
                              <h5>Room no. 34</h5>
                              <div id='bookedroom12' style={{ display: 'none' }}>
                                <p>Danny Jangjongpa</p>
                                <p>Borish Jhonson</p>
                                <button className='hbtn' onClick={hideRoom12}>hide</button>
                              </div>
                              <button className='button' onClick={bookedRoom12} >show details</button>
                            </div></div>
                          </tr>
                        </tbody>
        
                      </table>
        
                    </div>
        
        
                        </div>
                        </div>
                        </div>
                    
                </div>
    )
}