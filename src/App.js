import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainPage from "./Landing Page/Mainpage";
import Registration from "../src/Registration/Registration"
import Student from "./Admin/Student/Student"
import Guest from "./Admin/Guest/Guest"
import Dashboard from "./Admin/Dashboard"
import Room from "./Admin/Room/Room"
import StudentLogin from "./Login/StudentLogin"
import GuestLogin from "./Login/GuestLogin"
import AdminLogin from "./Login/AdminLogin"
import SignupGuest from "./Signup/SignupGuest"
import SignupStudent from "./Signup/SignupStudent"
import StudentHome from "./Student Home Page/StudentHome"
import ComplaintBox from "./Student Home Page/ComplaintBox"
import Review from "./Guest Home page/Review"
import GuestHome from "./Guest Home page/GuestHome"
import StudentRoom from "./Admin/Room/RoomManagement/StudentRoom"
import GuestRoom from "./Admin/Room/RoomManagement/GuestRoom"
import ForgotPassword from "./ForgotPassword/ForgotPassword"
import ForgotPassNext from "./ForgotPassword/ForgotPassNext"
import Randomtests from "./Dummytest/Randomtests"
import TermsAndConditions from "./Signup/TermsAndConditions";
import Guestregister from "./Registration/Guestregister";
import UpdateStudent from "./Admin/Room/RoomManagement/UpdateStudent";
 
export default function App(){
    return(
        
        <BrowserRouter>
        <Routes>
            <Route path='/' exact={true} element={< MainPage/>} /> 
            
            <Route path='/register' exact={true} element={<Registration/>} />
            <Route path='/adminstudent' exact={true} element={<Student />} />
            <Route path='/adminguest' exact={true} element={<Guest />} /> 
            <Route path='/login' exact={true} element={<StudentLogin />} />
            <Route path='/dashboard' exact={true} element={<Dashboard />} />
            <Route path='/adminroom' exact={true} element={<Room />} /> 
            <Route path='/guestlogin' exact={true} element={<GuestLogin />} />
            < Route path='/adminlogin' exact={true} element={<AdminLogin />} />
            < Route path='/signupguest' exact={true} element={<SignupGuest />} /> 
            < Route path='/signupstudent' exact={true} element={<SignupStudent />} /> 
            < Route path='/studenthome' exact={true} element={<StudentHome/>} />
            < Route path='/complaintBox' exact={true} element={<ComplaintBox/>} />
            < Route path='/guesthome' exact={true} element={<GuestHome/>} />
            < Route path='/review' exact={true} element={<Review/>} />
            < Route path='/sturoommng' exact={true} element={<StudentRoom/>} />
            < Route path='/guestroommng' exact={true} element={<GuestRoom/>} />
            < Route path='/forgot' exact={true} element={<ForgotPassword/>} />     
            < Route path='/forgotnext' exact={true} element={<ForgotPassNext/>} />
            < Route path='/test' exact={true} element={<Randomtests/>} />
            < Route path='/terms' exact={true} element={<TermsAndConditions/>} />
            < Route path='/guestregister' exact={true} element={<Guestregister/>} />
            < Route path='/adminsturoomupdate' exact={true} element={<UpdateStudent/>} />
        </Routes>
        </BrowserRouter>
       
    );

}