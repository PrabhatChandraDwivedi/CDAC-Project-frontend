import React from "react";
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import Student from "./Student";
export default function Landing(){
    const navigate=useNavigate();
    const gotostuLogin=()=>{
        navigate("/login");
    }
    const gotoAdminLogin=()=>{
        navigate("/adminlogin");
    }
    const gotoGuestLogin=()=>{
        navigate("/guestlogin");
    }
    
   return(<div>Hello this is landing
    <button type="submit" onClick={gotostuLogin}>student login</button>
    <button type="submit" onClick={gotoAdminLogin}>admin login</button>
    <button type="submit" onClick={gotoGuestLogin}>guest</button>
   </div>);
}