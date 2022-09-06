import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from '../src/landingimg/hostel.png';
import image2 from '../src/landingimg/room.png';
import image3 from '../src/landingimg/mess.png';
import '../src/landingcss/Navigation-with-Button.css';
import '../src/landingcss/Reviews.css';
import '../src/landingcss/Contact-Form-v2-Modal--Full-with-Google-Map.css';
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
                            <button class="btn btn-light action-button dropbtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Log In</button>
                            <div class="dropdown-content">
                            <a class="dropdown-item" onClick={gotostuLogin} href="#0">Student</a>
                            <a class="dropdown-item" onClick={gotoGuestLogin} href="#0">Guest</a>
                            <a class="dropdown-item" onClick={gotoAdminLogin} href="#0">Admin</a>
                        </div> </div>
                                <span style={{paddingLeft:"5px"}}></span>
                                <a class="btn btn-light action-button" role="button" href="Signup.js">Sign Up</a>
                           
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
                    <div class="col col-12 col-md-6" style={{marginBottom:"15px"}}>
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
                    <div class="col col-12 col-md-6" style={{marginBottom:"15px"}}>
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
                    <div class="col col-12 col-md-6" style={{marginBottom:"15px"}}>
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
                <div class="col col-12 col-md-6" style={{marginBottom:"15px"}}>
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
                <p class="text-center mb-5">
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
                                <a href="https://www.google.com/maps/place/Daytona+International+Speedway/@29.1815062,-81.0744275,15z/data=!4m13!1m7!3m6!1s0x88e6d935da1cced3:0xa6b3e1bc0f2fc83a!2s1801+W+International+Speedway+Blvd,+Daytona+Beach,+FL+32114!3b1!8m2!3d29.187028!4d-81.0703076!3m4!1s0x88e6d949a4cb8593:0x1387c6c0b5c8cc97!8m2!3d29.1851681!4d-81.0705292"
                                target=""> <img class="img-fluid"
                                src="http://maps.googleapis.com/maps/api/staticmap?autoscale=2&amp;size=600x210&amp;maptype=roadmap&amp;format=png&amp;visual_refresh=true&amp;markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C582+1801+W+International+Speedway+Blvd+Daytona+Beach+FL+32114&amp;zoom=12"
                                    alt="Google Map of Daytona International Speedway"/></a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6 clocateus">
                            <h2 class="h4 "><i class="fa fa-user"></i> Our Info</h2>
                            <div><span><strong>Name</strong></span></div>
                            <div><span>email@awebsite.com</span></div>
                            <div><span>www.awebsite.com</span></div>
                            <hr class="d-sm-none d-md-block d-lg-none"/>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6 clocateus">
                            <h2 class="h4 "><i class="fa fa-location-arrow"></i> Our Address</h2>
                            <div><span><strong>Office Name</strong></span></div>
                            <div><span>55 Icannot Dr</span></div>
                            <div><span>Daytone Beach, FL 85150</span></div>
                            <div><abbr data-toggle="tooltip" data-placement="top"
                                title="Office Phone: 555-867-5309">O:</abbr> 555-867-5309</div>
                            <hr class="d-sm-none"/>
                        </div>
                    </div>
            </div>
        <div class="modal fade" role="dialog" tabindex="-1" id="modal1">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Contact Information</h4><button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="contactForm-2" action="" method="get">
                            <input class="form-control" type="hidden" name="Introduction" value="This email was sent from www.awebsite.com"/>
                            <input class="form-control" type="hidden" name="subject" value="Awebsite.com Contact Form"/>
                            <input class="form-control" type="hidden" name="to" value="email@awebsite.com"/>
                            <div class="row">
                                <div class="col-md-6">
                                    <div id="successfail-2"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-6" id="message-2">
                                    <h2 class="h4"><i class="fa fa-envelope"></i> Contact Us<small><small class="required-input">&nbsp;(*required)</small></small></h2>
                                    <div class="form-group mb-3"><label class="form-label" for="from-name">Name</label><span class="required-input">*</span>
                                        <div class="input-group"><span class="input-group-text"><i
                                                    class="fa fa-user-o"></i></span><input class="form-control"
                                                type="text" id="from-name-2" name="name" required=""
                                                placeholder="Full Name"/>
                                        </div>
                                    </div>
                                    <div class="form-group mb-3"><label class="form-label"
                                            for="from-email">Email</label><span class="required-input">*</span>
                                        <div class="input-group"><span class="input-group-text"><i
                                                    class="fa fa-envelope-o"></i></span><input class="form-control"
                                                type="text" id="from-email-2" name="email" required=""
                                                placeholder="Email Address"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                                            <div class="form-group mb-3"><label class="form-label"
                                                    for="from-phone">Phone</label><span class="required-input">*</span>
                                                <div class="input-group"><span class="input-group-text"><i
                                                            class="fa fa-phone"></i></span><input class="form-control"
                                                        type="text" id="from-phone-2" name="phone" required=""
                                                        placeholder="Primary Phone"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                                            <div class="form-group mb-3"><label class="form-label"
                                                    for="from-calltime">Best Time to Call</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend"><span class="input-group-text"><i
                                                                class="fa fa-clock-o"></i></span>
                                                    </div>
                                                    <select class="form-select" id="from-calltime-2" name="call time">
                                                        <optgroup label="Best Time to Call">
                                                            <option value="Morning" selected="">Morning</option>
                                                            <option value="Afternoon">Afternoon</option>
                                                            <option value="Evening">Evening</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mb-3"><label class="form-label" for="from-comments">Comments</label>
                                        <textarea class="form-control" id="from-comments-2" name="comments" placeholder="Enter Comments" rows="5">
                                        </textarea></div>
                                    <div class="form-group mb-3">
                                        <div class="row">
                                            <div class="col"><button class="btn btn-primary d-block w-100"
                                                    type="reset"><i class="fa fa-undo"></i> Reset</button>
                                            </div>
                                            <div class="col"><button class="btn btn-primary d-block w-100"
                                                    type="submit">Submit <i
                                                        class="fa fa-chevron-circle-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="d-flex d-md-none"/>
                                </div>
                                <div class="col-12 col-md-6">
                                    <h2 class="h4"><i class="fa fa-location-arrow"></i> Locate Us</h2>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="static-map">
                                                <a href="https://www.google.com/maps/place/Daytona+International+Speedway/@29.1815062,-81.0744275,15z/data=!4m13!1m7!3m6!1s0x88e6d935da1cced3:0xa6b3e1bc0f2fc83a!2s1801+W+International+Speedway+Blvd,+Daytona+Beach,+FL+32114!3b1!8m2!3d29.187028!4d-81.0703076!3m4!1s0x88e6d949a4cb8593:0x1387c6c0b5c8cc97!8m2!3d29.1851681!4d-81.0705292"
                                                    target=""> <img class="img-fluid"
                                                        src="http://maps.googleapis.com/maps/api/staticmap?autoscale=2&amp;size=600x210&amp;maptype=roadmap&amp;format=png&amp;visual_refresh=true&amp;markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C582+1801+W+International+Speedway+Blvd+Daytona+Beach+FL+32114&amp;zoom=12"
                                                        alt="Google Map of Daytona International Speedway"/></a>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-12 col-lg-6">
                                            <h2 class="h4"><i class="fa fa-user"></i> Our Info</h2>
                                            <div><span><strong>Name</strong></span></div>
                                            <div><span>email@awebsite.com</span></div>
                                            <div><span>www.awebsite.com</span></div>
                                            <hr class="d-sm-none d-md-block d-lg-none"/>
                                        </div>
                                        <div class="col-sm-6 col-md-12 col-lg-6">
                                            <h2 class="h4"><i class="fa fa-location-arrow"></i> Our Address</h2>
                                            <div><span><strong>Office Name</strong></span></div>
                                            <div><span>55 Icannot Dr</span></div>
                                            <div><span>Daytone Beach, FL 85150</span></div>
                                            <div><abbr data-toggle="tooltip" data-placement="top"
                                                    title="Office Phone: 555-867-5309">O:</abbr> 555-867-5309</div>
                                            <hr class="d-sm-none"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>  

        </div>);
}