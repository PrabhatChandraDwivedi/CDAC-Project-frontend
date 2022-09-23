import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export default function Randomtests(){

   
    const[gender1,setGender] = useState("")
    const gender = "Male"
    const[countmale,setCount]=useState("")
    const[countfemale,setFCount]=useState("")

    const allocateRoom = async (wingname)=>{


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


        //checking the number of rooms for wings in the table


        const callTheMaleDbForWing = async ()=>{

           await  axios.get("http://localhost:8080/countroom",{ mode: 'no-cors' }).then((res)=>{
               setCount(res.data)
               checkForTheMaleWinginit(res.data)
                console.log(res.data)
              
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
            
             const checkForTheMaleWinginit =async (count)=>{
                if(count<=100){
                    let wing ="Alpha"
                    
                    console.log("in win"+wing);
                    console.log(wing);
                   await allocateRoom(wing) 
                }

                else if (count>100&&count<=200) {
                    let wing ="Delta"
                   await allocateRoom(wing) 
                }

                else if(count>200&&count<=300){
                    let wing ="Sigma"
                  await  allocateRoom(wing) 
                }
                else if (count>300 && count<=400) {
                    let wing ="Omega"
                  await  allocateRoom(wing) 
                }
            }

            const checkForTheFemaleWinginit =async (count)=>{
                if(count<=100){
                    let wing ="Infinity"
                    await  allocateRoom(wing) 
                }

                else if(count>100&&count<=200) {
                    let wing ="Nebula"
                    await  allocateRoom(wing) 
                }

                else if(count>200&&count<=300){
                    let wing ="Candella"
                    await  allocateRoom(wing) 
                }
                else if(count>300 && count<=400) {
                    let wing ="Gamma"
                    await   allocateRoom(wing) 
                }
            }


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

            const checkTheGender = async()=>{
                if (gender==="Male") {
                    console.log("hi2")
            await   callTheMaleDbForWing()
         //   console.log(countmale)
                 
                }
             if (gender==="Female") {
                    var countfemale= await callTheFemaleDbForWing()
                    await  checkForTheFemaleWinginit(countfemale)
                }
            }



            
            //first checking the gender

             
           
             useEffect(() => {
                console.log("hi1")
                checkTheGender()
              }, [])


   
}