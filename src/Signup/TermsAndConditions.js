import React from "react";
import { useNavigate } from "react-router-dom";

export default function TermsAndConditions(){

    const navigate=useNavigate();
    const gotoStudSign=()=>{
        
        navigate("/signupstudent");
    }

return(<div style={{marginLeft:"40px", marginRight:"100px", color:"black"}}>
<h2 style={{textAlign:"center",textDecoration:"underline"}}>Terms And Conditions</h2>
<p><i class="fa fa-calendar-check-o"></i> Smoking, Alcohol & Narcotic consumption is strictly prohibited in and around the Hostel premises. Strict action will be taken against offenders.</p>
<p><i class="fa fa-calendar-check-o"></i> Strict adherence to the prescribed dress code is required. Decency in dressing & demeanor is a must.</p>
<p><i class="fa fa-calendar-check-o"></i> Loitering in the Hostel campus during the class hours will not be appreciated.</p>
<p><i class="fa fa-calendar-check-o"></i> The Management & Staff will not be responsible for personal belongings.</p>
<p><i class="fa fa-calendar-check-o"></i> Late comers will be penalized.</p>
<p><i class="fa fa-calendar-check-o"></i> Students must keep the Campus & Rooms clean. Defacing walls, equipment, furniture etc., is strictly prohibited.</p>
<p><i class="fa fa-calendar-check-o"></i> Birthday/Other Celebrations are strictly prohibited in Hostel.</p>
<p><i class="fa fa-calendar-check-o"></i> Students must turn off all the electrical equipments & lights before leaving their rooms.</p>
<p><i class="fa fa-calendar-check-o"></i> Students are not allowed to use electric stoves, heaters etc in rooms except in designated places.</p>
<p><i class="fa fa-calendar-check-o"></i> Students are not allowed to organize any group activities in their room.</p>
<p><i class="fa fa-calendar-check-o"></i> Food will be served only in the designated Dining Hall(s) and only during the specified timings. Wasting food & water will not be encouraged.</p>
<p><i class="fa fa-calendar-check-o"></i> No music should be played after 10 PM.</p>
<p><i class="fa fa-calendar-check-o"></i> Tipping of Wardens, Security Guards, Cleaning staff etc., is not permitted.</p>
<p><i class="fa fa-calendar-check-o"></i> Visitors are allowed only in AV Room between: 4:30 p.m. and 6:30 p.m. Visitors are not allowed beyond the visiting area. </p>
<p><i class="fa fa-calendar-check-o"></i> Any complaints regarding electric equipment, plumbing etc., is required to be entered in the ‘Complaints Book’.</p>
<p><i class="fa fa-calendar-check-o"></i> Silence: Strict silence shall be observed in hostel from 11.00 pm to 5.30 am. Care should be taken at all times to ensure that music\loud talking is NOT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;audible outside the room.</p>
<p><i class="fa fa-calendar-check-o"></i> Any manner of festivities and noise making\celebrations will not be entertained, which may cause disturbance to other inmates in the hostel premises.</p>
<p><i class="fa fa-calendar-check-o"></i> Students during their stay in the hostel will be governed by the management rules.</p>
<button type="submit" class="btn btn-primary" style={{float:"right", marginBottom:"10px"}} onClick={gotoStudSign}>Back</button>

</div>)
}