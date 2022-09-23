import axios from "axios";
import React from "react";
import { useState } from "react";
export default function GuestRoomAllocation(){
    const[wing,setWing] =  useState("");
    const[gender,setGender] = useState("")
    const allocateRoom = (wingname)=>{


        // || (index>300&&index<=310)
     //var Roomnumber = new Array();
     
     
     for (let index = 101; index <=410 ; index++) {
     
     if (index<=110 || (index>200 && index<=210) || (index>300&&index<=310) || (index>400&&index<=410)) {
     
       
     
            let dbcheckform ={
                room_no: index,
                wing:wingname
            }
            const dbroomcheck = index;
       
           
            if (gender==="Male") {
             
                if (callTheDb(dbroomcheck)===true) {
                    //do allocation and then break
                }
                
                
            }
     
            if(gender==="Female"){
             if (callTheDbFemale(dbroomcheck)===true) {
                 //do allocation and then break
             }
             
            
            }
     }
     
     else 
     {
        continue;
     }
     }

     }
     
    
     
     
                 const callTheDb =(dbcheckform)=>{
     
     
     
                     axios.get("http://localhost:8080/getrooms/"+dbcheckform,{ mode: 'no-cors' }).then((res)=>{
                         var x=1;
                         return x
                     }).catch((err)=>{
                         console.log(err);
                     })
                 }
     
                 const callTheDbFemale = (dbcheckform)=>{
                     axios.get("http://localhost:8080/getrooms/"+dbcheckform,{ mode: 'no-cors' }).then((res)=>{
                         var x=1;
                         return x
                     }).catch((err)=>{
                         console.log(err);
                     })
                 }
     
                 const checkTheGender =()=>{
                     if (gender==="Male") {
                         setWing("Lush")
                         allocateRoom(wing)
                     }
               else if (gender==="Female") {
                         setWing("Crimson")
                         allocateRoom(wing)
                     }
                 }
     
     
     
                 
                 //first checking the gender
     
                 checkTheGender()
                
                 
}