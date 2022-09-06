import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
 import Student from "./Student";
 import Guest from "./Guest";
import StudentLogin from "./StudentLogin";
import Dashboard from "./Dashboard";
import Room from "./Room";
import AdminLogin from "./AdminLogin";
import MainPage from "./Mainpage";
import Landing from "./Landing";
import Registration from "./Registration";
import GuestLogin from "./GuestLogin";

export default function App(){
    return(
        
        <BrowserRouter>
        <Routes>
            <Route path='/' exact={true} element={< MainPage/>} /> 
            <Route path='/land' exact={true} element={< Landing/>} /> 
            <Route path='/register' exact={true} element={<Registration/>} />
            <Route path='/student' exact={true} element={<Student />} />
            <Route path='/guest' exact={true} element={<Guest />} /> 
            <Route path='/login' exact={true} element={<StudentLogin />} />
            <Route path='/dashboard' exact={true} element={<Dashboard />} />
            <Route path='/room' exact={true} element={<Room />} /> 
            <Route path='/guestlogin' exact={true} element={<GuestLogin />} />
             < Route path='/adminlogin' exact={true} element={<AdminLogin />} />
            
        </Routes>
        </BrowserRouter>
       
    );

}