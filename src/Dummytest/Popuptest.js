// import { useEffect } from 'react';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';

// export default function Popup({bool}){


//     const [shows, setShows] = useState(false);

//     const handleClose = () =>{
//         setmobile("");
//         setpmobile("");
//         setaddress("");
//         setcity("");
//         setstate("");
//         setpin("");
//         setShows(false);

//     } 
//     useEffect(() => {
//         console.log(bool)
//         setShows(bool);
//       }, [])

     
   
//     //Update 
//     const handleUpdate = () =>{
//         console.log(this.props.bool);
//         setShows(this.props.bool);
//     }



//     const [mobile, setmobile] = useState("");
//     const [pmobile, setpmobile] = useState("");
//     const [address, setaddress] = useState("");
//     const [city, setcity] = useState("");
//     const [state, setstate] = useState("");
//     const [pin, setpin] = useState("");
//     const [mobileerror, setmobileerror] = useState(false);
//     // const [emailerror, setemailerror] = useState(false);
//     const [pmobileerror, setpmobileerror] = useState(false);
//     const [pinerror, setpinerror] = useState(false);
   

//     const handleMobile = (e)=>{
//         var value = e.target.value
//         if(isNaN(value)){
//             setmobileerror(true)
//         }else{
//             setmobileerror(false)
//         }
//         if(value.length!==10){
//             setmobileerror(true)
//         }else{
//             setmobileerror(false)
//         }
//         setmobile(value)
//     }
//     // const handleEmail = (e)=>{
//     //     var value = e.target.value
//     //     if(!/\S+@\S+\.\S+/.test(value)){
//     //         setemailerror(true)
//     //     }else{
//     //         setemailerror(false)
//     //     }
//     //     setemail(value);
//     // }
//     const handlePmobile = (e)=>{
//         var value = e.target.value
//         if(isNaN(value)){
//             setpmobileerror(true)
//         }else{
//             setpmobileerror(false)
//         }
//         if(value.length!==10){
//             setpmobileerror(true)
//         }else{
//             setpmobileerror(false)
//         }
//         setpmobile(value);
//     }
//     const handleAddress = (e)=>{
//         var value = e.target.value
//         setaddress(value);
//     }
//     const handleCity = (e)=>{
//         var value = e.target.value
//         setcity(value);
//     }
//     const handleState = (e)=>{
//         var value = e.target.value
//         setstate(value);
//     }
   

//     const handlePincode=(e)=>{
//         var value = e.target.value
//         if(isNaN(value)){
//             setpinerror(true)
//         }else{
//             setpinerror(false)
//         }
//         if(value.length !== 6){
//             setpinerror(true);
//         }else{
//             setpinerror(false);
//         }
//         setpin(value);
//     }


//     let formValue = {mobile,pmobile,address,city,state,pin}
//     console.log(formValue)


//     return(<div>
       
                           

//                             <Modal show={shows} onHide={handleClose}>
//                                 <Modal.Header closeButton>
//                                     <Modal.Title>Edit Details</Modal.Title>
//                                 </Modal.Header>
//                                 <Modal.Body>
//                                     <Form>
//                                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                                             <Form.Label>Mobile NO.</Form.Label>
//                                             <Form.Control
//                                                 type="number"
//                                                 placeholder="Mobile No."
//                                                 autoFocus
//                                                 onChange={handleMobile}
//                                                 value={mobile}
//                                                 required={true}
//                                             /></Form.Group>
//                                              {mobileerror?<p style={{color:"red", fontSize:"small"}}>Only 10 numbers are allowed</p>:null}

//                                         {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
//                                             <Form.Label>E-mail</Form.Label>
//                                             <Form.Control
//                                                 type="email"
//                                                 placeholder="name@example.com"
//                                                 autoFocus
//                                                 onChange={handleEmail}
//                                                 value={email}
//                                                 required={true}
//                                             /></Form.Group>
//                                             {emailerror?<p style={{color:"red", fontSize:"small"}}>Invalid format</p>:null} */}

//                                             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
//                                             <Form.Label>Parent Mobile No.</Form.Label>
//                                             <Form.Control
//                                                 type="number"
//                                                 placeholder="Parent Mobile No."
//                                                 autoFocus
//                                                 onChange={handlePmobile}
//                                                 value={pmobile}
//                                                 required={true}
//                                             /></Form.Group>
//                                             {pmobileerror?<p style={{color:"red", fontSize:"small"}}>Only 10 numbers are allowed</p>:null}

//                                             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
//                                             <Form.Label>Address</Form.Label>
//                                             <Form.Control
//                                                as="textarea"
//                                                 placeholder="Address"
//                                                 autoFocus
//                                                 onChange={handleAddress}
//                                                 value={address}
//                                                 required={true}
//                                             />
//                                         </Form.Group>
//                                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
//                                             <Form.Label>City</Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 placeholder="City"
//                                                 autoFocus
//                                                 onChange={handleCity}
//                                                 value={city}
//                                                 required={true}
//                                             />
//                                         </Form.Group>
//                                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
//                                             <Form.Label>State</Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 placeholder="State"
//                                                 autoFocus
//                                                 onChange={handleState}
//                                                 value={state}
//                                                 required={true}
//                                             />
//                                         </Form.Group>
//                                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
//                                             <Form.Label>Pin Code</Form.Label>
//                                             <Form.Control
//                                                 type="number"
//                                                 placeholder="Pin Code"
//                                                 autoFocus
//                                                 onChange={handlePincode}
//                                                 value={pin}
//                                                 required={true}
//                                             />
//                                         </Form.Group>
//                                         {pinerror?<p style={{color:"red", fontSize:"small"}}>Enter 6 number pin</p>:null}
//                                         {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                                             <Form.Label>Example textarea</Form.Label>
//                                             <Form.Control as="textarea" rows={3} />
//                                         </Form.Group> */}
//                                     </Form>
//                                 </Modal.Body>
//                                 <Modal.Footer>
//                                     <Button type="submit" variant="secondary" onClick={handleClose}>
//                                         Close
//                                     </Button>
//                                     <Button type="submit" variant="primary" onClick={handleUpdate} >
//                                         Save Changes
//                                     </Button>
//                                 </Modal.Footer>
//                             </Modal>
//                             </div>
//     )
// }