import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from './landingimg/hostel.png';
import image2 from './landingimg/room.png';
import image3 from './landingimg/mess.png';
import './landingcss/Navigation-with-Button.css';
import './landingcss/Reviews.css';
import './landingcss/Contact-Form-v2-Modal--Full-with-Google-Map.css';
import { useNavigate } from "react-router-dom";




export default function MainPage() {
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

    const gotoSignupStud=()=>{
        navigate("/signupstudent");
    }

    const gotoSignupGuest=()=>{
        navigate("/signupguest");
    }

    const top = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div>
            {/* Navbar */}
            <nav class="navbar navbar-light navbar-expand-lg navigation-clean-button navbar-fixed-top">
                <div class="container"><a class="navbar-brand" href='#0'>
                    <i class="fa">&#xf19c;</i>&nbsp;College Name</a>
                    <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1">
                        <span
                            class="visually-hidden">Toggle navigation</span>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navcol-1">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item"><a class="nav-link" href="#Reviews">Reviews</a></li>
                            <li class="nav-item"><a class="nav-link" href="#Faq">FAQ</a></li>
                            <li class="nav-item"><a class="nav-link" href="#Locateus">Contact</a></li>
                        </ul>
                        
                        <span class="navbar-text actions">     
                        <div class="dropdown">
                            <button class="btn btn-light action-button dropbtn" type="button" id="dropdownMenuButton1" 
                            data-bs-toggle="dropdown" aria-expanded="false">Log In</button>
                            <div class="dropdown-content">
                            <a class="dropdown-item" onClick={gotostuLogin} href="#0">Student</a>
                            <a class="dropdown-item" onClick={gotoGuestLogin} href="#0">Guest</a>
                            <a class="dropdown-item" onClick={gotoAdminLogin} href="#0">Admin</a>
                        </div> </div>
                                <span style={{paddingLeft:"5px"}}></span>
                                </span>

                         <span class="navbar-text actions">          
                            <div class="dropdown">
                                <button class="btn btn-light action-button dropbtn" type="button" id="dropdownMenuButton1" 
                                data-bs-toggle="dropdown" aria-expanded="false">Sign Up</button>
                                <div class="dropdown-content">
                                  <a class="dropdown-item" onClick={gotoSignupStud} href="#0">Student</a>
                                  <a class="dropdown-item" onClick={gotoSignupGuest} href="#0">Guest</a>
                                </div> </div> 
                                    <span style={{paddingLeft:"5px"}}></span>
                                </span>     
                    </div>
                </div>
            </nav>

            {/* Carousel */}
            <Carousel className="slider">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"/>
                </Carousel.Item>
            </Carousel>

            {/* Review Session */}
            <div style={{background:"black"}}>
            <div class="container" style={{paddingRight:"30px",paddingLeft:"30px",paddingTop:"5px"}} >
                <h1 id="Reviews" style={{color:"white",marginBottom:"5px",fontSize:"48px",fontWeight:"bold", textAlign:"center", marginTop:"10px"}}>
                    Reviews </h1>
                <div class="row">
                    <div class="col col-12 col-md-6 myreview" style={{marginBottom:"15px"}}>
                        <div class="yelp_review">
                            <div class="yelp_basic">
                                <div class="yelp_first">
                                    <h3>Prabhat D </h3>
                                    <h4>Las Vegas, NV</h4>
                                </div>
                                <div class="yelp_first">
                                    <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                    <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                    <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                    <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                    <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                </div>
                            </div>
                            <div class="yelp_descript">
                                <p>As am being a member of the hostel,I'm feeling the best experience here,good system in
                            both room facilities and Mess facilities<br /></p>
                            </div>
                        </div>
                    </div>
                    <div class="col col-12 col-md-6 myreview" style={{marginBottom:"15px"}}>
                        <div class="yelp_review">
                            <div class="yelp_basic">
                                <div class="yelp_first">
                                    <h3>Vishal K</h3>
                                    <h4>San Jose, CA</h4>
                                </div>
                                <div class="yelp_first">
                                    <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                    <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                    <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                    <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                    <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                </div>
                            </div>
                                <div class="yelp_descript">
                                    <p>Very pleasant, we went here for lunch today, party of 3. We had an order of cheesy bread
                                    which was crisp pizza crust with cheese and a some marinara for dipping, It was just the
                                    right amount of appetizer. &nbsp;<br/><br/></p>
                                </div>
                        </div>
                    </div>
                    <div class="col col-12 col-md-6 myreview" style={{marginBottom:"15px"}}>
                        <div class="yelp_review">
                                <div class="yelp_basic">
                                        <div class="yelp_first">
                                            <h3>Vishwesh</h3>
                                            <h4>San Jose, CA</h4>
                                        </div>
                                        <div class="yelp_first">
                                            <img class="yelp_star" src="assets/img/star_empty-01.png" alt=''/>
                                            <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                            <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                            <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                            <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                        </div>
                                 </div>                             
                            <div class="yelp_descript">
                                <p>Spouse &amp; I were hungry on the way home from a shopping excursion and decided to stop
                                here for lunch on a whim. Glad we did! He had a chicken parm sandwich, I had a veggie
                                calzone, and we split a mista salad. Delicious all around!<br/></p>
                            </div>
                        </div>
                     </div>
                <div class="col col-12 col-md-6 myreview" style={{marginBottom:"15px"}}>
                        <div class="yelp_review">
                                <div class="yelp_basic">                                                  
                                    <div class="yelp_first">
                                        <h3>Vikas</h3>
                                        <h4>Los Gatos, CA</h4>
                                    </div>
                                   <div class="yelp_first">
                                        <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                        <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                        <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                        <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                        <img class="yelp_star" src="assets/img/star-01.png" alt=''/>
                                    </div>
                                </div>
                            <div class="yelp_descript">   
                              <p>We had a wonderful meal with our family. Everyone enjoyed their meals. We will definitely
                                 be back.<br/></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ session */}
            <div class="clocateus" style={{paddingLeft : "20px",paddingRight:"20px"}}>
                <h1 style={{color:"rgb(255,255,255)",
                marginBottom:"5px",fontSize:"48px",fontWeight:"bold",textAlign:"center"}}
                    id="Faq">
                    FAQ</h1>
                <p class="text-center mb-5" style={{color:"rgb(255,255,255)"}}>
                    Find the answers for the most frequently asked questions below
                </p>

                <div class="row">
                    <div class="col-md-6 col-lg-4 mb-4">
                        <h6 class="mb-3 text-primary"><i class="far fa-paper-plane text-primary pe-2"></i>What is the capacity of your hostels for boys and girls?</h6>
                        <p>
                             The capacity for girls is 277 and 440 for boys.
                        </p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                        <h6 class="mb-3 text-primary"><i class="fas fa-pen-alt text-primary pe-2"></i>Are there any regulations of timings for the hostellers?</h6>
                        <p>
                            Yes, hostellersare expected to finish off their day’s outdoor engagements by 1900 Hrs( 7 PM) during winters and 2000 Hrs (8PM) during summers.
                        </p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                        <h6 class="mb-3 text-primary"><i class="fas fa-user text-primary pe-2"></i> What is the quality of food ?</h6>
                        <p>The university engages mess facilities contract companies each year based on parameters and performance evaluation of Food Safety and Standards Authority of India. </p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                        <h6 class="mb-3 text-primary"><i class="fas fa-rocket text-primary pe-2"></i>  What is the process of allotment of seat?</h6>
                        <p>
                        Allotment is on the first cum first serve basis, usually, when the number of applicants are more than the number of hostel seats, 
                        a waiting list is drawn up and allocation is as per the list and availability arising.
                        </p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                        <h6 class="mb-3 text-primary"><i class="fas fa-home text-primary pe-2"></i> What types of facilities do you provide to the hostellers?</h6>
                        <p>Facilities include 24x7security, 24×7 power back up, 24×7 internet connectivity, newspapers to individual rooms, laundry, sports facilities, First Aid and medical facilities.</p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                        <h6 class="mb-3 text-primary"><i class="fas fa-book-open text-primary pe-2"></i> What type of basic infrastructure has been provided to the hostellers?</h6>
                        <p>
                        A basic bed with mattress, study table, chair and cupboard is assured to every boarder with air conditioning 
                        / Non A Calongside attached bath / Common facility as opted for.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Session */}
            <div class="col-12 col-md-6" id="Locateus" style={{paddingLeft : "20px",paddingRight : "20px",paddingBottom : "20px", paddingTop:"1px"}}>
                <h2 class="h4 clocateus"><i class="fa fa-location-arrow" id="Locateus"></i> Locate Us</h2>
                    <div class="row">
                        <div class="col-12">
                            <div class="static-map">
                                <a href="https://www.google.com/search?q=kpcdac+bangalore+location+&rlz=1C1GCEU_enIN925IN925&biw=1280&bih=577&sxsrf=ALiCzsYb0wHYqWsTjMgPQM71fE47t_60mw%3A1663414097569&ei=Ua8lY_avIujJz7sP7bGhgAk&ved=0ahUKEwi2nJmz3Jv6AhXo5HMBHe1YCJAQ4dUDCA4&uact=5&oq=kpcdac+bangalore+location+&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECc6CggAEEcQ1gQQsAM6DQgAEEcQ1gQQsAMQyQNKBAhBGABKBAhGGABQ-ANY9QdgwQxoAXABeACAAa8BiAGyBJIBAzAuNJgBAKABAcgBCMABAQ&sclient=gws-wiz"
                                target="_blank" rel="noopener noreferrer"> <img class="img-fluid"
                                src=""
                                    alt="Google Map of KP-DAC"/></a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6 clocateus">
                            <h2 class="h4 "><i class="fa fa-user"></i> Our Info</h2>
                            <div><span><strong>Sukanya Vardhan</strong></span></div>
                            <div><span>pcv3@hostel.com</span></div>
                            <div><span>www.pcv3hostel.com</span></div>
                            <hr class="d-sm-none d-md-block d-lg-none"/>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6 clocateus">
                            <h2 class="h4 "><i class="fa fa-location-arrow"></i> Our Address</h2>
                            <div><span><strong>GenZ</strong></span></div>
                            <div><span>55 Icannot Dr</span></div>
                            <div><span>Daytone Beach, FL 85150</span></div>
                            <div><abbr data-toggle="tooltip" data-placement="top"
                                title="Office Phone: 555-867-5309">O:</abbr> 555-867-5309</div>
                            <hr class="d-sm-none"/>
                        </div>
                    </div>
            </div>
    </div> 
    <div>
    <a class="border rounded d-inline scroll-to-top" onClick={top} href=""><i class="fas fa-angle-up"></i></a></div> 

        </div>);
}