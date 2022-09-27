import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Update.css';

export default function UpdateStudent() {
    const navigate = useNavigate();

    const [room_no, setRoom_no] = useState("");
    const [wing, setWing] = useState("");
    const [student_name, setstudent_name] = useState("");
    const [from, setFrom] = useState("");
    const [till, setTill] = useState("");
    const [fees, setFees] = useState("");
    const [fee_paid, setFee_paid] = useState("");
    const [dues, setDues] = useState("");
    const[student_id,setstudent_id]=useState("");
    const [bed_no, setbed_no] = useState("");
 
    //handle change
    const handleChange = (e) => {
        //dynamic
        var value = e.target.value;
        if (e.target.name === "room_no") {
            setRoom_no(value); 
        } else if (e.target.name === "bed_no") {
            setbed_no(value);
        }
        else if (e.target.name === "wing") {
            setWing(value);
        }
        else if (e.target.name === "student_name") {
            setstudent_name(value);
        }
        else if (e.target.name === "student_id") {
            setstudent_id(value);
        }
        else if (e.target.name === "from") {
            setFrom(value);
        }
        else if (e.target.name === "till") {
            setTill(value);
        }
        else if (e.target.name === "fees") {
            setFees(value);
        }
        else if (e.target.name === "fees") {
            setFees(value);
        }
        else if (e.target.name === "fee_paid") {
            setFee_paid(value);
        }
        else if (e.target.name === "dues") {
            setDues(value);
        }
       
      
    }

    const goback =()=>{
        navigate("/student")
    }

    const Submithandle = (e) => {
        if (room_no.length === 0 ||wing.length===0 || student_name.length === 0||bed_no.length===0||student_id.length===0) {
            e.preventDefault();
            window.alert("Don't leave any field empty");
        }
        else {
            var formvalue = {
                bed_no,
                wing,
                room_no,
                student_name,
                from,
                till,
                fees,
                fee_paid,
                dues,
                student_id,
            }

            console.log(formvalue);

            e.preventDefault();

            axios.post("http://localhost:8080/complaints", formvalue, { mode: 'no-cors' })
                .then((res) => {
                })
            resetData();
            navigate("/UpdateStudent")

        }
    };

    //reseting the form
    const resetData = () => {
        setRoom_no("");
        setWing("");
        setstudent_name("");
        setFrom("");
        setTill("");
        setFees("");
        setFee_paid("");
        setDues("");
        setstudent_id("");
        setbed_no("");
    }

    return (
        <div id="bidDiv">
            <div class="d-flex flex-column CBody" id="content-wrapper ">
                <div id="content">
                    <div className="form-por">
                        <form className="formdetail">
                            <div className="form-group">
                                <strong>Room no:</strong><br />
                                <input type="text" className="form-control" onChange={handleChange} name="room_no" value={room_no} />
                            </div>
                            <div className="form-group">
                                <strong>Bed No. </strong><br />
                                <input type="text" className='form-control' onChange={handleChange} name='bed_no' value={bed_no} />
                            </div>
                            <div className="form-group">
                                <strong >Wing: </strong><br />
                                <input type="text" className='form-control' onChange={handleChange} name='wing' value={wing} />
                            </div>
                            <div className="form-group">
                                <strong>Student Name</strong><br />
                                <input type="text" className='form-control' onChange={handleChange} name='student_name' value={student_name} />
                            </div> <div className="form-group">
                                <strong>Student Id</strong><br />
                                <input type="number" className='form-control' onChange={handleChange} name='student_id' value={student_id} />
                            </div>
                            <div className="form-group">
                                <strong >From : </strong><br />
                                <input type="date" className='form-control' onChange={handleChange} name='from' value={from} />
                            </div>
                            <div className="form-group">
                                <strong >Till : </strong><br />
                                <input type="date" className='form-control' onChange={handleChange} name='till' value={till} />
                            </div>
                            <div className="form-group" >
                                <strong >Fees : </strong><br />
                                <input type="text" className='form-control' onChange={handleChange} name='fees' value={fees} />
                            </div>
                            <div className="form-group">
                                <strong >Fee paid : </strong><br />
                                <input type="text" className='form-control' onChange={handleChange} name='fee_paid' value={fee_paid} />
                            </div>
                            <div className="form-group">
                                <strong >Dues : </strong><br />
                                <input type="text" className='form-control' onChange={handleChange} name='dues' value={dues} />
                            </div>
                            <div>
                                <button type="Submit" onClick={Submithandle} className="btn submit" >Submit</button>
                                <button type="reset" onClick={resetData} className='btn reset'>Reset</button>
                                <button  onClick={goback} className='btn back'>Back</button>
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
