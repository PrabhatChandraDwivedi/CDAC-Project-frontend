import "./Guestregister.css"
import React, { useEffect, useState } from 'react';
// import e from 'cors';
import axios from 'axios';
import  {Carousel} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';




export default function Guestregister (){

  const [image, setimage] = useState("");
  const [state, setstate] = useState("");
  const [address, setaddress] = useState("");
  const [city, setguestcity] = useState("");
  const [Cityerror, setCityerror] = useState(false);
  const [mobile_no, setguest_mo_no] = useState("");
  const [Mobileerror, setMobileerror] = useState(false);
  const [date_Of_Birth, setguestdob] = useState("");
  const [gender, setgender] = useState("");
  const [pincode, setpincode] = useState("");
  const [pincodeerror, setpincodeerror] = useState(false);
  const [guestName, setguest_full_name] = useState("");
  const [check_in, setchake_in_date] = useState("");
  const [check_out, setchake_out_date] = useState("");
  const [room_Type, setroom_type] = useState("");
  const [id_Proof, setid_type] = useState("");
  const [aadhar_no, setaadhar_no] = useState("");
  const [aadhar_noerror, setaadhar_noerror] = useState(false);

  const header = {
    auth: "cdac-student"
}
 //date splitter function
 const dateSplitter =async(value)=>{
        
  const myArray = value.split("-");
  const mydate = myArray[2]+"-"+myArray[1]+"-"+myArray[0]
  return await mydate
      }
  

  const handleChange = (e) => {

    let value = e.target.value;
    if (e.target.name === "state") {
      setstate(value);
  }
  else if (e.target.name === "address") {
    setaddress(value);
  } else if (e.target.name === "date_Of_Birth") {
  setguestdob(value);
}  else if (e.target.value === "Male") {
  setgender(value);
}  else if (e.target.value === "Female") {
  setgender(value);
} else if (e.target.value === "Other") {
  setgender(value);
}else if (e.target.name === "guestName") {
  setguest_full_name(value);
}  else if (e.target.name === "check_in") {
  setchake_in_date(value);
}  else if (e.target.name === "check_out") {
  setchake_out_date(value);
}  else if (e.target.name === "room_Type") {
  setroom_type(value);
}  else if (e.target.name === "id_Proof") {
  setid_type(value);
} 
  }

  //mo no
  const handleMobileno = (e) => {
    var value = e.target.value;
    if(!/^\d{10}$/.test(value)){
        setMobileerror(true)
    }else{
        setMobileerror(false)
    }
    setguest_mo_no(value);
}
//aadharno

const handleaadhar_no = (e) => {
  var value = e.target.value;
  if(!/^\d{12}$/.test(value)){
    setaadhar_noerror(true)
  }else{
    setaadhar_noerror(false)
  }
  setaadhar_no(value);
}  

 //handleCity
 const handleCity=(e)=>{
  var value = e.target.value;
  if(!/^[A-Za-z]+$/.test(value)){
    setCityerror(true)
  }else{
    setCityerror(false)
  }
  setguestcity(value);

  }
 //pincode
  const handlePincode=(e)=>{
    var value = e.target.value;
    if(!/^\d{6}$/.test(value)){
      setpincodeerror(true)
    }else{
      setpincodeerror(false)
    }
    setpincode(value);

    }


 const Submithandle = async(e) => {
   e.preventDefault();
   if(guestName.length===0||gender.length===0||mobile_no.length===0||date_Of_Birth.length===0||check_in.length===0||
  check_out.length===0||room_Type.length===0||id_Proof.length===0||aadhar_no.length===0||address.length===0||city.length===0||
   state.length===0||pincode.length===0){
    window.alert("Don't leave any field empty all fields are mandatory");
   }else{
  let formvalue = {
    aadhar_no,
   gender: gender,
   guest_name:guestName,
    check_in_date:check_in,
    check_out_date:check_out,
    mobile_no:mobile_no,
    dob:date_Of_Birth,
    room_type:room_Type,
    id_proof:id_Proof,
    address,
    city,
    state,
    pincode,
  }
 
  
 
  var response = window.confirm("Submit your registration form, please Confirm!");
  if (response) {
  e.preventDefault();
  //first checking the gender
  
  await checkTheGender(formvalue)
  console.log("nooo nooo nooo nooo")
  
  console.log(formvalue);
 
    
     setguest_full_name("");
     setgender("");
     setguest_mo_no("");
     setguestdob("");
     setchake_in_date("");
     setchake_out_date("");
     setroom_type("");
     setid_type("");
     setaadhar_no("");
     setaddress("");
     setguestcity("");
     setstate("");
     setpincode("");  
     setCityerror(false);
     setMobileerror(false);   
     setaadhar_noerror(false);
     setpincodeerror(false);
      
     window.location.reload();
  }
  else {
      // e.preventDefault();
      // console.log(formvalue);
      console.log("Form Submission Cancelled")
  } }

 };

///////////////////////////////////ac logic starts here////////////////////////////////

const aclogicGuest = async(acformvalue)=>{
  return await axios.post("http://localhost:8080/api/roomalloc/insertguest",acformvalue,{ mode: 'no-cors' }).then((res)=>{
console.log(res.data)
return res.data
  }).catch((err)=>{
console.log(err);
  })
}

const aclogicGuestFemale = async(acformvalue)=>{
  return await axios.post("http://localhost:8080/api/roomalloc/finsertguest",acformvalue,{ mode: 'no-cors' }).then((res)=>{
console.log(res.data)
return res.data
  }).catch((err)=>{
console.log(err);
  })
}



const allocateRoom = async (wingname,formvalue)=>{
  // || (index>300&&index<=310)
//var Roomnumber = new Array();
for (let index = 101; index <=410 ; index++) {

if (index<=110 || (index>200 && index<=210) || (index>300&&index<=310) || (index>400&&index<=410)) {

 
         let room_no= index
         let wing=wingname 
     
      if (gender==="Male") {
       
          if (await callTheDb(room_no)===false) {
              let acformvalue ={
                room_no:room_no,
                wing,
                guest_name:guestName,
                guest:formvalue,
                from_date:check_in,
                till_date:check_out,
                fees:1500,
                dues:0,
                feepaid:0,
                feestatus:true
              }
             await aclogicGuest(acformvalue)
              console.log(room_no);
              break;
              
          }
          
          
      }

      if(gender==="Female"){
       if (await callTheDbFemale(room_no)===false) {
           //do allocation and then break
           let acformvalue ={
            room_no:room_no,
            wing,
            guest_name:guestName,
            guest:formvalue,
            from_date:check_in,
            till_date:check_out,
            fees:1500,
            dues:0,
            feepaid:0,
            feestatus:true
          }
        await  aclogicGuestFemale(acformvalue)
              console.log(room_no);
              break;



       }
       
      
      }
}

else 
{
  continue;
}
}

}




           const callTheDb = async (room_no)=>{
              return await axios.get("http://localhost:8080/api/roomalloc/getguestrooms/"+room_no,{ mode: 'no-cors' }).then((res)=>{
                console.log(res.data)     
              return res.data
                   
               }).catch((err)=>{
                   console.log(err);
               })
           }

          const callTheDbFemale = async (room_no)=>{
            return await axios.get("http://localhost:8080/api/roomalloc/fgetguestrooms/"+room_no,{ mode: 'no-cors' }).then((res)=>{
                   return res.data
                   
               }).catch((err)=>{
                   console.log(err);
               })
           }

           const checkTheGender = async(formvalue)=>{
               if (gender==="Male") {
                  let wing = "Lush"
                 await  allocateRoom(wing,formvalue)
               }
         else if (gender==="Female") {
                   let wing = "Crimson"
                  await allocateRoom(wing,formvalue)
               }
           }



           
           
          
          
           
 return(
 <div>


<form action="">
<html lang="en">

<head>
 
 
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"/>

</head>

<body>
<table class="guesttable">
<div class="container">

    
  <header>
        <h1 class="GuestTitle">Guest registration</h1>
  
  </header>
  
    <div class="row">
    <div class="col" > Guest name <span class="red-star">*</span>
    <input  class="guestinput" type="text" autoComplete="off" name="guestName" maxlength="50" placeholder=" Full Name" value={guestName} onChange={handleChange}  required="true"/>
    </div></div><br />

    <div class="row">
    <div class="col">  <tr>
<td name="gender" class="gender" >Gender <span class="red-star">*</span></td>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<td>
<input type="radio" name="gender" value="Male" onChange={handleChange}/>&emsp; Male<br />
<input type="radio" name="gender" value="Female"onChange={handleChange} />&emsp; Female <br />
<input type="radio" name="gender" value="Other"onChange={handleChange} />&emsp; Other
</td>
</tr>
<br></br><br />
<tr></tr></div></div>


 <div class="row " >
    <div class="col" > 
  Guest Mobile Number  <span class="red-star">*</span>
    <input type="text" class="guestinput"autoComplete="off" name="mobile_no" maxlength="10" placeholder="10 digit mo. number  "value={mobile_no} onChange={handleMobileno} />
    {Mobileerror?<p className="erroringuest">Enter your 10 digit mo.no properly</p>:null}
    </div></div><br />
    <div class="row">   
    <div class="col">
 Date of Birth  <span class="red-star">*</span>
<input type="date" class="guestinput" autoComplete="off" name="date_Of_Birth" maxlength="50" placeholder="DD-MM-YYYY" value={date_Of_Birth} onChange={handleChange}/>
<br></br></div>
</div><br />

<div class="row">   
    <div class="col">
 Check in date  <span class="red-star">*</span>
<input type="date" class="guestinput"autoComplete="off"  name="check_in" maxlength="50" placeholder="DD-MM-YYYY"value={check_in} onChange={handleChange}/>
<br></br></div>
</div><br />

<div class="row">   
    <div class="col">
    Check Out date  <span class="red-star">*</span>
<input type="date" class="guestinput"autoComplete="off"  name="check_out" maxlength="50" placeholder="DD-MM-YYYY" value={check_out} onChange={handleChange}/>
<br></br></div>
</div><br />


<div class="row " >
    <div class="col" > 
   Room type  <span class="red-star">*</span>
   <select class="guestinput" autoComplete="off" name="room_Type" onChange={handleChange}>
<option value="">Select Room Type</option>
<option autoComplete="off"  name="room_Type"value="Classic Room"  onChange={handleChange}>Classic Room</option>
</select>

    </div></div><br />


 <div class="row " >
    <div class="col" > 
   ID proof  <span class="red-star">*</span>
   <select class="guestinput" name="id_Proof"  onChange={handleChange}>
<option autoComplete="off"  name="id_Proof" value="Aadhar Card" onChange={handleChange}>Select ID</option>
<option autoComplete="off"  name="id_Proof" value="Aadhar Card" onChange={handleChange}>Aadhar Card</option>
<option  autoComplete="off" name="id_Proof" value="pan card" onChange={handleChange}>pan card</option>
</select>

    </div></div><br />
    <div class="row">   
    <div class="col">
 Aadhar Card No. <span class="red-star">*</span>
<input type="text" class="guestinput" autoComplete="off"  name="aadhar_no" maxlength="50" placeholder="Aadhar no" value={aadhar_no} onChange={handleaadhar_no}/>
{aadhar_noerror?<p className="erroringuest">Please enter your 12 digit aadhar no.only</p>:null}
<br></br></div>
</div><br />


 <div class="row " >
  
    <div class="col" > 
   
      <tr><br /></tr>
      <tr><br /></tr>
    Address  <span class="red-star">*</span>
    <textarea  class="guestinput" autoComplete="off" name="address" rows="5" cols="10"placeholder="Enter your address here" value={address} onChange={handleChange}/>
   
    <tr><br /></tr>  </div></div><br />
    <div class="row"> 
 <div class="col">
      
      City  <span class="red-star">*</span>

 
<input type="text" class="guestinput" autoComplete="off"  name="city" maxlength="50" placeholder="Enter City" value={city} onChange={handleCity}/>
{Cityerror?<p className="erroringuest">please enter your city name properly</p>:null}
<br></br></div>
</div><br />


 <div class="row " >
  <tr></tr>
    <div class="col" > State  <span class="red-star">*</span>
    <select class="guestinput" name="state"  onChange={handleChange}>
<option autoComplete="off"  name="state" value="" onChange={handleChange}>Select State</option>
<option autoComplete="off"  name="state" value="Andhra Pradesh" onChange={handleChange}>Andhra Pradesh</option>
<option autoComplete="off"  name="state" value="Andaman and Nicobar" onChange={handleChange}>Andaman and Nicobar</option>
<option autoComplete="off"  name="state" value="Arunachal Pradesh" onChange={handleChange}>Arunachal Pradesh</option>
<option autoComplete="off"  name="state" value="Assam" onChange={handleChange}>Assam</option>
<option autoComplete="off"  name="state" value="Bihar" onChange={handleChange}>Bihar</option>
<option autoComplete="off"  name="state" value="Chandigarh" onChange={handleChange}>Chandigarh</option>
<option autoComplete="off"  name="state" value="Chhattisgarh" onChange={handleChange}>Chhattisgarh</option>
<option autoComplete="off"  name="state" value="Dadra and Nagar Havel" onChange={handleChange}>Dadra and Nagar Havel</option>
<option autoComplete="off"  name="state" value="Daman and Diu" onChange={handleChange}>	Daman and Diu</option>
<option autoComplete="off"  name="state" value="	Delhi" onChange={handleChange}>	Delhi</option>
<option autoComplete="off"  name="state" value="Goa" onChange={handleChange}>Goa</option>
<option autoComplete="off"  name="state" value="Gujarat" onChange={handleChange}>Gujarat</option>
<option autoComplete="off"  name="state" value="Haryana" onChange={handleChange}>Haryana</option>
<option autoComplete="off"  name="state" value="Himachal Pradesh" onChange={handleChange}>	Himachal Pradesh</option>
<option autoComplete="off"  name="state" value="Jammu and Kashmir" onChange={handleChange}>	Jammu and Kashmir</option>
<option autoComplete="off"  name="state" value="Jharkhand" onChange={handleChange}>	Jharkhand</option>
<option autoComplete="off"  name="state" value="Karnataka" onChange={handleChange}>	Karnataka</option>
<option autoComplete="off"  name="state" value="Kerala" onChange={handleChange}>Kerala</option>
<option autoComplete="off"  name="state" value="Lakshadweep" onChange={handleChange}>Lakshadweep</option>
<option autoComplete="off"  name="state" value="Madhya Pradesh" onChange={handleChange}>Madhya Pradesh</option>
<option autoComplete="off"  name="state" value="Maharashtra" onChange={handleChange}>Maharashtra</option>
<option autoComplete="off"  name="state" value="Manipur" onChange={handleChange}>Manipur</option>
<option autoComplete="off"  name="state" value="Meghalaya" onChange={handleChange}>Meghalaya</option>
<option autoComplete="off"  name="state" value="Mizoram" onChange={handleChange}>Mizoram</option>
<option autoComplete="off"  name="state" value="Nagaland" onChange={handleChange}>Nagaland</option>
<option autoComplete="off"  name="state" value="Odisha" onChange={handleChange}>Odisha</option>
<option autoComplete="off"  name="state" value="Punjab" onChange={handleChange}>Punjab</option>
<option autoComplete="off"  name="state" value="Pondicherry" onChange={handleChange}>Pondicherry</option>
<option autoComplete="off"  name="state" value="Rajasthan" onChange={handleChange}>Rajasthan</option>
<option autoComplete="off"  name="state" value="Sikkim" onChange={handleChange}>Sikkim</option>
<option autoComplete="off"  name="state" value="Tamil Nadu" onChange={handleChange}>Tamil Nadu</option>
<option autoComplete="off"  name="state" value="Telangana" onChange={handleChange}>Telangana</option>
<option autoComplete="off"  name="state" value="Tripura" onChange={handleChange}>Tripura</option>
<option autoComplete="off"  name="state" value="Uttar Pradesh" onChange={handleChange}>Uttar Pradesh</option>
<option autoComplete="off"  name="state" value="Uttarakhand" onChange={handleChange}>Uttarakhand</option>
<option autoComplete="off"  name="state" value="West Benga" onChange={handleChange}>West Bengal</option>
</select>
    </div></div> <br />
    <div class="row">
    <div class="col">  
    <tr></tr> 
 Pincode  <span class="red-star">*</span>
<input type="text" class="guestinput" autoComplete="off"  name="pincode" maxlength="50" placeholder="Enter Pincode" value={pincode} onChange={handlePincode}/>
{pincodeerror?<p className="erroringuest">Enter 6 digit pincode only</p>:null}
<br></br>
</div></div><br />
<br />
  <b class="noteguest"> <span class="red-star">*</span>(note that all fields are required)</b>
  

 



 
  
  
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
    integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"
    integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous">
  </script>

  

  




  <tr>
<td colspan="2" align="center">
&emsp;&emsp;&emsp;
<input class="guestsub" type="submit" value="Submit" onClick={Submithandle} ></input>
<input class="guestres" type="reset" value="Reset"></input>
</td>
</tr>
  
</div>
</table>
</body>
</html>
</form>

</div>





)}