import "./Project.css"
import React, { useEffect, useState } from 'react';
 import e from 'cors';
import axios from 'axios';
import  {Carousel} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function Registration(){
   
    const  register = useForm;
    const navigate = useNavigate();
    const [image, setimage] = useState("");
    const [state, setstate] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [cityerror, setcityerror] = useState(false);
    const [email_id, setemail_id] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [parrent_mo_no, setparrent_mo_no] = useState("");
    const [parentmobileerror, setparentmobileerror] = useState(false);
    const [dob, setdob] = useState("");
    const [doberror, setdoberror] = useState(false);
    const [qualification, setqualification] = useState("");
    const [course_Applied, setcourse_Applied] = useState("");
    const [student_mo_no, setstudent_mo_no] = useState("");
    const [Mobileerror, setMobileerror] = useState(false);
    const [gender, setgender] = useState("");
    const [Pincode, setPincode] = useState("");
    const [PincodeError, setPincodeError] = useState(false);
    const [student_full_name, setstudent_full_name] = useState("");
    const [parrent_full_name, setparrent_full_name] = useState("");
    const [collage_name, setcollage_name] = useState("");
    const [admission_date, setadmission_date] = useState("");
    const [admission_dateerror, setadmission_dateerror] = useState(false);
    const [branch, setbranch] = useState("");
    const [data, setData] = useState([]);
    


    
    

    


    const handleChange = (e) => {

        let value = e.target.value;
        if (e.target.name === "state") {
            setstate(value);
        }
        else if (e.target.name === "address") {
            setaddress(value);
        }
        else if (e.target.name === "city") {
            setcity(value);
        }
       
       
        else if (e.target.name === "qualification") {
            setqualification(value);
        }
        
        else if (e.target.value === "Male") {
            setgender(value);
        } else if (e.target.value === "Female") {
            setgender(value);
        }
        else if (e.target.value === "Other") {
            setgender(value);
        }
       
        else if (e.target.name === "student_full_name") {
            setstudent_full_name(value);
        }
        else if (e.target.name === "parrent_full_name") {
            setparrent_full_name(value);
        }
       
        else if (e.target.name === "collage_name") {
            setcollage_name(value);
        } else if (e.target.name === "admission_date") {
            setadmission_date(value);
        }else if (e.target.name === "branch")
         {
            setbranch(value);}
            else if (e.target.value === "B.Tech") {
                setcourse_Applied(value);
             }else if (e.target.value === "U.G.Diploma") {
                setcourse_Applied(value);
             }

    }
    const handleEmail = (e) => {
        var value = e.target.value;
        if(!/\S+@\S+\.\S+/.test(value)){
            setEmailError(true)
        }else{
            setEmailError(false)
        }
        setemail_id(value);
    }
    // Studentmobileno
    const handleMobileno = (e) => {
        var value = e.target.value;
        if(!/^\d{10}$/.test(value)){
            setMobileerror(true)
        }else{
            setMobileerror(false)
        }
        setstudent_mo_no(value);
    }
     //Parentmobileno
     const handleparentmobileno = (e) => {
        var value = e.target.value;
        if(!/^\d{10}$/.test(value)){
            setparentmobileerror(true)
        }else{
            setparentmobileerror(false)
        }
        setparrent_mo_no(value);
    }
    //date of birth
    const validateDOB = (e) => {
        var value = e.target.value;
        if(!/^([0-3][0-9])-([0-1][0-2])-([0-9]{4})$/.test(value)){
            setdoberror(true)
        }else{
            setdoberror(false)
        }
        setdob(value);
    }
    //handleCity
    const handleCity=(e)=>{
        var value = e.target.value;
        if(!/^[A-Za-z]+$/.test(value)){
            setcityerror(true)
        }else{
            setcityerror(false)
        }
        setcity(value);

        }

        //pincode
        const handlePincode=(e)=>{
            var value = e.target.value;
            if(!/^\d{6}$/.test(value)){
                setPincodeError(true)
            }else{
                setPincodeError(false)
            }
            setPincode(value);
    
            }
         //admissiondate
         const handleAdmissiondate = (e) => {
            var value = e.target.value;
            if(!/^([0-3][0-9])-([0-1][0-2])-([0-9]{4})$/.test(value)){
                setadmission_dateerror(true)
            }else{
                setadmission_dateerror(false)
            }
            setadmission_date(value);
        }

        /////////////////////////////////ac logic goes inside////////////////////////////////


        const callTheDb =async(room_no,bed_no,wing)=>{

            console.log(room_no+bed_no+wing);

      return  await  axios.get("http://localhost:8080/checkoneroom/"+room_no+"/"+bed_no+"/"+wing,{ mode: 'no-cors' }).then((res)=>{
            console.log(res.data);
            return res.data
        }).catch((err)=>{
            console.log(err);
        })
    }

    const callTheDbFemale = async (room_no,bed_no,wing)=>{
        console.log(room_no+bed_no+wing);
      await  axios.get("http://localhost:8080/checkoneroom"+room_no+"/"+bed_no+"/"+wing,{ mode: 'no-cors' }).then((res)=>{
            var x=1;
            return x
        }).catch((err)=>{
            console.log(err);
        })
    }

        const allocateRoom = async (wingname,formvalue)=>{


            // || (index>300&&index<=310)
         //var Roomnumber = new Array();
         
         
         for (let index = 101; index <=510 ; index++) {
         
         if (index<=110 || (index>200 && index<=210) || (index>300&&index<=310) || (index>400&&index<=410) || (index>500&&index<=510)) {
         
           
             //   Roomnumber.push("S"+index+" "+"A")
                
                   let room_no= "S"+index
                   let  bed_no= "A"
                   let wing=wingname
                
           //     Roomnumber.push("S"+index+" "+"B")
                
                 let   room_no1= "S"+index
                 let   bed_no1= "B"
                 let   wing1=wingname
                
                if (gender==="Male") {
                 
                    if (await callTheDb(room_no,bed_no,wing)===false) {
                        //do allocation and then break
                       // aclogic()
                       console.log(formvalue);
                        console.log("hey do the logic dont add delete button");
                        break;
                    }
                    
                    if (await callTheDb(room_no1,bed_no1,wing1)===true) {
                        //do allocation and then break
                    }
                }
         
                if(gender==="Female"){
                 if (await callTheDbFemale(room_no,bed_no,wing)===true) {
                     //do allocation and then break
                 }
                 
                 if (await callTheDbFemale(room_no1,bed_no1,wing1)===true) {
                     //do allocation and then break
                 }
                }
         }
         
         else 
         {
            continue;
         }
         }
         //console.log(Roomnumber)
         }

        const checkForTheMaleWinginit =async (count,formvalue)=>{
            if(count<=100){
                let wing ="Alpha"
                
                console.log("in win"+wing);
                console.log(wing);
               await allocateRoom(wing,formvalue) 
            }

            else if (count>100&&count<=200) {
                let wing ="Delta"
               await allocateRoom(wing,formvalue) 
            }

            else if(count>200&&count<=300){
                let wing ="Sigma"
              await  allocateRoom(wing,formvalue) 
            }
            else if (count>300 && count<=400) {
                let wing ="Omega"
              await  allocateRoom(wing,formvalue) 
            }
        }

        const checkForTheFemaleWinginit =async (count,formvalue)=>{
            if(count<=100){
                let wing ="Infinity"
                await  allocateRoom(wing,formvalue) 
            }

            else if(count>100&&count<=200) {
                let wing ="Nebula"
                await  allocateRoom(wing,formvalue) 
            }

            else if(count>200&&count<=300){
                let wing ="Candella"
                await  allocateRoom(wing,formvalue) 
            }
            else if(count>300 && count<=400) {
                let wing ="Gamma"
                await   allocateRoom(wing,formvalue) 
            }
        }






        const callTheMaleDbForWing = async ()=>{

        return    await  axios.get("http://localhost:8080/countroom",{ mode: 'no-cors' }).then((res)=>{
                
                
                 console.log(res.data)
                 return res.data
               
             }).catch((err)=>{
                 console.log(err);
             })
 
         }
 
         const callTheFemaleDbForWing =async () =>{
           await  axios.get("http://localhost:8080/getrooms",{ mode: 'no-cors' }).then((res)=>{
                 var x=1;
                 return x
             }).catch((err)=>{
                 console.log(err);
             })
         }
        
        
        const checkTheGender = async(formvalue)=>{
            if (gender==="Male") {
                console.log("hi2")
                var countmale =   await   callTheMaleDbForWing()
                console.log("hey"+countmale);
                await checkForTheMaleWinginit(countmale,formvalue)
     //   console.log(countmale)
             
            }
         if (gender==="Female") {
                var countfemale= await callTheFemaleDbForWing()
                await  checkForTheFemaleWinginit(countfemale,formvalue)
            }
        }
         
    const Submithandle = async (e) => {
         e.preventDefault();
         
         if(student_full_name.length===0||parrent_full_name.length===0||gender.length===0||email_id.length===0||student_mo_no.length===0
            ||parrent_mo_no.length===0||dob.length===0||address.length===0||city.length===0||Pincode.length===0||state.length===0||
            collage_name.length===0||admission_date.length===0||branch.length===0||course_Applied.length===0){
             window.alert("Don't leave any field empty all fields are mandatory");
         }
         else{
        var formvalue = {
            state, 
            address,
            gender, 
            city,
            pincode:Pincode,
            branch,
            dob,
            course_Applied, 
            email_id,
            parrent_mo_no,
            collage_name,
            admission_date,
            student_mo_no,
            student_full_name,
            parrent_full_name,
        }
        
       
       // console.log(formvalue)
        
        
       
        var response = window.confirm("Submit your registration form, please Confirm!");
        if (response) {
            e.preventDefault();

            await checkTheGender(formvalue)
            console.log(formvalue);

            axios.post("http://localhost:8080/test", formvalue)
                .then((res) => {
                    console.log(res);
                }).catch((err)=>{
                    console.log(err);
                })
                
           
            setstate("");
            setaddress("");
            setcity("");
            setemail_id("");
            setparrent_mo_no("");
            setdob("");
            setqualification("");
            setcourse_Applied("");
            setstudent_mo_no("");
            setgender("");
           setPincode("");
            setstudent_full_name("");
            setparrent_full_name("");
            setcollage_name("");
            setadmission_date("");
            setbranch("");
            setEmailError(false);
            setMobileerror(false);
            setparentmobileerror(false);
            setdoberror(false);
            setcityerror(false);
            setPincodeError(false);
            setadmission_dateerror(false);
            

        }
        else {
            // e.preventDefault();
            // console.log(formvalue);
            console.log("Form Submission Cancelled")
        }
      navigate("/student");}
    };



    useEffect(() => {
        displaydata();
    }, [])

     

    function displaydata() {
        fetch("http://localhost:3000/student").then((resp) => {
            resp.json().then((response) => {
                // console.log("res", response);
                setData(response)
            })
        })
    }

    return(
   <form> <div class="mydiv" >
   
<h2 class="vish">Student Registration Form </h2>
<table class="mytable">
<br></br>
<tr>
    
<td>Student Full Name<span class="red-star">*</span></td>
<td><input class="vishinput" type="text" name="student_full_name" maxlength="50" placeholder="Student Full Name"value={student_full_name} onChange={handleChange}  required/>
</td>
</tr>
<br></br>
<tr>
<td>Parent Full Name<span class="red-star">*</span></td>
<td><input class="vishinput" type="text" name="parrent_full_name" maxlength="50" placeholder="Parrent Full Name" value={parrent_full_name} onChange={handleChange} required />
</td>
</tr>
<br></br>
<tr>
<td>Email ID<span class="red-star">*</span></td>
<td><input class="vishinput" type="email" name="email_id" maxlength="100" placeholder="Enter your email" value={email_id} onChange={handleEmail} required/>
{emailError?<p className="error">Enter your Emailid properly</p>:null}</td>

</tr>
<br></br>
   <tr>
    <td>Student Mobile Number<span class="red-star">*</span></td>
    <td>
    <input type="text" class="vishinput" name="student_mo_no" maxlength="10" placeholder="10 digit mo. number Student " value={student_mo_no} onChange={handleMobileno}required/>
    (10 Digits Allowed)
    {Mobileerror?<p className="error">Enter 10 digit mo.no. only </p>:null}
    </td>
    </tr>
    <br></br>
   

  <tr>
    <td>Parent Mobile Number<span class="red-star">*</span></td>
    <td>
    <input type="text" class="vishinput" name="parrent_mo_no" maxlength="10" placeholder="10 digit mo. number parent " value={parrent_mo_no} onChange={handleparentmobileno}/>
    (10 Digits Allowed)
    {parentmobileerror?<p className="error">Enter 10 digit mo.no. only</p>:null}
    </td>
    </tr>
    <br></br>

    <tr>
<td name="gender" value={gender} onChange={handleChange} >Gender<span class="red-star">*</span></td>
<td>
<input type="radio" name="gender" value="Male" onChange={handleChange}/>&emsp; Male<br />
<input type="radio" name="gender" value="Female"onChange={handleChange} />&emsp; Female <br />
<input type="radio" name="gender" value="Other"onChange={handleChange} />&emsp; Other
</td>
</tr>
<br></br>
<tr>
 <td>Date of Birth(DOB)<span class="red-star">*</span></td>
 <td><input type="date" class="vishinput" name="dob" maxlength="50" placeholder="DD-MM-YYYY" value={dob} onChange={validateDOB}/>
</td>
 </tr>
<br></br>
<tr>
<td>Address<span class="red-star">*</span><br /><br /><br /></td>
<td><textarea name="address" rows="5" cols="40"placeholder="Enter your address here" style={{borderRadius: "5px"}}  value={address} onChange={handleChange}/></td>
</tr>
<tr>
<td>City<span class="red-star">*</span></td>
<td><input type="text" class="vishinput" name="city" maxlength="50" placeholder="Enter City" value={city} onChange={handleCity}/>
{cityerror?<p className="error">please insert characters only</p>:null}
</td>
</tr>
<tr>
<td>Pin Code<span class="red-star">*</span></td>
<td><input type="text" class="vishinput" name="Pincode" maxlength="6" placeholder="Pin code" value={Pincode} onChange={handlePincode}/>
{PincodeError?<p className="error">please insert Pincode properly</p>:null}
</td>
</tr>
<tr>
<td>State<span class="red-star">*</span></td>
<td><select class="vishinput" name="state"  onChange={handleChange}>
<option autoComplete="off"  name="state" value="Aadhar Card" onChange={handleChange}>Select State</option>
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
</td>
</tr>

<tr>
    
<td>Collage name <span class="red-star">*</span> </td>
<td><input class="vishinput" type="text" name="collage_name" maxlength="100" placeholder="Enter collage name"value={collage_name} onChange={handleChange} />
</td>
</tr>
<br></br>
<tr></tr>
<tr>
    
<td>Admission date<span class="red-star">*</span> </td>
<td><input class="vishinput" type="date" name="admission_date" maxlength="50" placeholder="DD-MM-YYYY"value={admission_date} onChange={handleAdmissiondate} />

</td>
</tr>
<br></br>
<tr></tr>

<tr>
    
<td>Branch<span class="red-star">*</span> </td>
<td><select class="vishinput" name="branch"   placeholder="Select Branch" onChange={handleChange}>
<option autoComplete="off"  name="branch" value="" onChange={handleChange}>Select Branch</option>
<option autoComplete="off"  name="branch" value="Mechanical Engineering" onChange={handleChange}>Mechanical Engineering</option>
<option autoComplete="off"  name="branch" value="Computer Science Engineering" onChange={handleChange}>Computer Science Engineering</option>
<option autoComplete="off"  name="branch" value="Civil Engineering" onChange={handleChange}>Civil Engineering</option>
<option autoComplete="off"  name="branch" value="Electrical Engineering" onChange={handleChange}>Electrical Engineering</option>
<option autoComplete="off"  name="branch" value="Electronics & Telecommunication Engineering" onChange={handleChange}>Electronics & Telecommunication Engineering</option>
    </select>
</td>
</tr>
<br></br>
<tr></tr>



<tr>
<td name="course_Applied" value={course_Applied} onChange={handleChange}>Courses<br />Applied For<span class="red-star">*</span></td>
<td>
    <input type="radio" name="course_Applied" value="B.Tech" onChange={handleChange} />
B.Tech(Bachelor of Technology)<br></br>
<input type="radio" name="course_Applied" value="U.G.Diploma" onChange={handleChange} />
Diploma(U.G. Diploma)<br></br>

</td>
</tr>
<br></br>
<tr><td></td><td> <b class="notestudent"> <span class="red-star">*</span>(note that all fields are required)</b></td></tr>

<tr>
<td colspan="1" align="center">
<input class="vishsub" type="submit" value="Submit" onClick={Submithandle}ref={register({ required: true })} ></input>
<input class="vishres" type="reset" value="Reset"></input>
</td>
</tr>

</table></div>
<script src="/public/assets/js/jquery.js"></script>
</form>

)}