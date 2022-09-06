import "./Project.css"
import React from "react";

export default function Registration(){return(
   <form> <div class="mydiv" >
   
<h2 class="vish">Student Registration Form </h2>
<table class="mytable">
<br></br>
<tr>
    
<td>Student Full Name</td>
<td><input class="vishinput" type="text" name="FirstName" maxlength="50" placeholder="Student Full Name" />
</td>
</tr>
<br></br>
<tr>
<td>Parrent Full Name</td>
<td><input class="vishinput" type="text" name="LastName" maxlength="50" placeholder="Parrent Full Name"/>
</td>
</tr>
<br></br>
<tr>
<td>Email ID</td>
<td><input class="vishinput" type="email" name="EmailID" maxlength="100" placeholder="Enter your email"/></td>
</tr>
<br></br>
<tr>
<td>Student Mobile Number</td>
<td>
<input type="text"  class="vishinput" name="MobileNumber" maxlength="10" placeholder="10 digit mo. number student "/>
(10 Digits Allowed)
</td>
</tr>
<br></br>
<tr>
    <td>Parrent Mobile Number</td>
    <td>
    <input type="text" class="vishinput" name="MobileNumber" maxlength="10" placeholder="10 digit mo. number parrent "/>
    (10 Digits Allowed)
    </td>
    </tr>
    <br></br>
    <tr>
<td>Gender</td>
<td>
<input type="radio" name="Gender" value="Male" />
Male
<input type="radio" name="Gender" value="Female" />
Female
</td>
</tr>
<br></br>
<tr>
<td>Date of Birth(DOB)</td>
<td>
<select name="BirthDay" id="Birthday_Day" style={{borderRadius: "5px"}}>
<option value="-1">Day:</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
</select>
<select name="BirthdayMonth" id="Birthday_Month" style={{borderRadius: "5px"}}>
<option value="-1">Month:</option>
<option value="January">Jan(1)</option>
<option value="February">Feb(2)</option>
<option value="March">Mar(3)</option>
<option value="April">Apr(4)</option>
<option value="May">May(5)</option>
<option value="June">Jun(6)</option>
<option value="July">Jul(7)</option>
<option value="August">Aug(8)</option>
<option value="September">Sep(9)</option>
<option value="October">Oct(10)</option>
<option value="November">Nov(11)</option>
<option value="December">Dec(12)</option>
</select>
<select name="BirthdayYear" id="Birthday_Year" style={{borderRadius: "5px"}}>
<option value="-1">Year:</option>
<option value="2019">2019</option>
<option value="2018">2018</option>
<option value="2017">2017</option>
<option value="2016">2016</option>
<option value="2015">2015</option>
<option value="2014">2014</option>
<option value="2013">2013</option>
<option value="2012">2012</option>
<option value="2011">2011</option>
<option value="2010">2010</option>
<option value="2009">2009</option>
<option value="2008">2008</option>
<option value="2007">2007</option>
<option value="2006">2006</option>
<option value="2005">2005</option>
<option value="2004">2004</option>
<option value="2003">2003</option>
<option value="2002">2002</option>
<option value="2001">2001</option>
<option value="2000">2000</option>
<option value="1999">1999</option>
<option value="1998">1998</option>
<option value="1997">1997</option>
<option value="1996">1996</option>
<option value="1995">1995</option>
<option value="1994">1994</option>
<option value="1993">1993</option>
<option value="1992">1992</option>
<option value="1991">1991</option>
<option value="1990">1990</option>
<option value="1989">1989</option>
<option value="1988">1988</option>
<option value="1987">1987</option>
<option value="1986">1986</option>
<option value="1985">1985</option>
<option value="1984">1984</option>
<option value="1983">1983</option>
<option value="1982">1982</option>
<option value="1981">1981</option>
<option value="1980">1980</option>
</select>
</td>
</tr>
<br></br>
<tr>
<td>Address<br /><br /><br /></td>
<td><textarea name="Address" rows="10" cols="50"placeholder="Enter your address here" style={{borderRadius: "5px"}}></textarea></td>
</tr>
<tr>
<td>City</td>
<td><input type="text" class="vishinput" name="City" maxlength="50" placeholder="Enter City"/>

</td>
</tr>
<tr>
<td>Pin Code</td>
<td><input type="Number" class="vishinput" name="PinCode" maxlength="6" placeholder="Pin code"/>

</td>
</tr>
<tr>
<td>State</td>
<td><input type="text" class="vishinput" name="State" maxlength="50" placeholder="Enter State"/>

</td>
</tr>
<tr>
<td>Qualification <br></br></td>
<td>
<br></br>
<input type="checkbox" name="HighSchool" value="High School" ></input>
High School(10th)<br></br>
<input type="checkbox" name="HigherSchool" value="Higher School" ></input>
Higher School(12th)<br/>
<input type="checkbox" name="Graduation" value="Graduation" ></input>
Graduation(Bachelors)<br/>
<input type="checkbox" name="PostGraduation" value="Post Graduation" ></input>
Post Graduation(Masters)<br/>
<input type="checkbox" name="Phd" value="Phd"></input>
Phd
<br></br>
<br></br>
</td>
</tr>
<tr>
<td>Courses<br />Applied For</td>
<td>
    <input type="radio" name="CourseBTech" value="B.Tech"></input>
B.Tech(Bachelor of Technology)<br></br>
<input type="radio" name="CourseBCA" value="BCA"></input>
BCA(Bachelor of Computer Applications)<br></br>
<input type="radio" name="CourseBCom" value="B.Com"></input>
B.Com(Bachelor of Commerce)<br></br>
<input type="radio" name="CourseBSc" value="B.Sc"></input>
B.Sc(Bachelor of Science)<br></br>
<input type="radio" name="CourseBA" value="B.A"></input>
BA(Bachelor of Arts)<br></br>
<input type="radio" name="CourseMCA" value="BCA"></input>
MCA(Master of Computer Applications)<br></br>
<input type="radio" name="CourseMCom" value="B.Com"></input>
M.Com(Master of Commerce)<br></br>
<input type="radio" name="CourseMSc" value="B.Sc"></input>
M.Sc(Master of Science)<br></br>
<input type="radio" name="CourseMA" value="B.A"></input>
MA(Master of Arts)<br></br>
</td>
</tr>
<br></br>
<tr>
<td colspan="2" align="center">
<input class="vishsub" type="submit" value="Submit"></input>
<input class="vishsub" type="reset" value="Reset"></input>
</td>
</tr>

</table></div>
</form>
)}