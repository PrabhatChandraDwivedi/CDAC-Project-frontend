import './GuestRoom.css';
export default function GuestRoon(){
  const showAvailableRoom = () => {
    document.getElementById("avilroom").style.display = "block";
    document.getElementById("bookedroom").style.display = "none";
  }
  const showBookedRoom = () => {
    document.getElementById("avilroom").style.display = "none";
    document.getElementById("bookedroom").style.display = "block";
  };
  const bookedRoom1 = () => {
    document.getElementById("bookedroom1").style.display = 'block';
  }
  const bookedRoom2 = () => {
    document.getElementById("bookedroom2").style.display = 'block';
  }
  const bookedRoom3 = () => {
    document.getElementById("bookedroom3").style.display = 'block';
  }
  const bookedRoom4 = () => {
    document.getElementById("bookedroom4").style.display = 'block';
  }
  const bookedRoom5 = () => {
    document.getElementById("bookedroom5").style.display = 'block';
  }
  const bookedRoom6 = () => {
    document.getElementById("bookedroom6").style.display = 'block';
  }
  const bookedRoom7 = () => {
    document.getElementById("bookedroom7").style.display = 'block';
  }
  const bookedRoom8 = () => {
    document.getElementById("bookedroom8").style.display = 'block';
  }
  const bookedRoom9 = () => {
    document.getElementById("bookedroom9").style.display = 'block';
  }
  const bookedRoom10 = () => {
    document.getElementById("bookedroom10").style.display = 'block';
  }
  const bookedRoom11 = () => {
    document.getElementById("bookedroom11").style.display = 'block';
  }
  const bookedRoom12 = () => {
    document.getElementById("bookedroom12").style.display = 'block';
  }
  const hideRoom1=()=>{
    document.getElementById("bookedroom1").style.display='none'
  }
  const hideRoom2=()=>{
    document.getElementById("bookedroom2").style.display='none'
  }
  const hideRoom3=()=>{
    document.getElementById("bookedroom3").style.display='none'
  }
  const hideRoom4=()=>{
    document.getElementById("bookedroom4").style.display='none'
  }
  const hideRoom5=()=>{
    document.getElementById("bookedroom5").style.display='none'
  }
  const hideRoom6=()=>{
    document.getElementById("bookedroom6").style.display='none'
  }
  const hideRoom7=()=>{
    document.getElementById("bookedroom7").style.display='none'
  }
  const hideRoom8=()=>{
    document.getElementById("bookedroom8").style.display='none'
  }
  const hideRoom9=()=>{
    document.getElementById("bookedroom9").style.display='none'
  }
  const hideRoom10=()=>{
    document.getElementById("bookedroom10").style.display='none'
  }
  const hideRoom11=()=>{
    document.getElementById("bookedroom11").style.display='none'
  }
  const hideRoom12=()=>{
    document.getElementById("bookedroom12").style.display='none'
  }

    return(
        <div>
            <div id="wrapper">
        <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
          <div class="container-fluid d-flex flex-column p-0">
            <a
              class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
              href="#0"
            >
              <div class="sidebar-brand-icon rotate-n-15">
                <i class="fa-solid fa-building-columns"></i>
              </div>
              <div class="sidebar-brand-text mx-3">
                <span>College name</span>
              </div>
            </a>
            <hr class="sidebar-divider my-0" />
            <ul class="navbar-nav text-light" id="accordionSidebar">
              <li class="nav-item">
                <a class="nav-link pcdptr" onClick={''}href="#0">
                  <i class="fas fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pcdptr" onClick={''}href="#0">
                  <i class="fas fa-user"></i>
                  <span>Room</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active pcdptr"href="#0" >
                  <i class="fas fa-table"></i>
                  <span>Student</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pcdptr" onClick={''}href="#0" >
                  <i class="far fa-user-circle"></i>
                  <span>Guest</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pcdptr" onClick={''}href="#0">
                  <i class="far fa-user-circle"></i>
                  <span>Back</span>
                </a>
              </li>
            </ul>
            <div class="text-center d-none d-md-inline"></div>
          </div>
        </nav>
        <div class="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
              <div class="container-fluid">
                <h2>Guest Room</h2>
                </div>
                </nav>


                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous" />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>

            <div><button className='button1' onClick={showAvailableRoom}>show available rooms</button>
            <button className='button2' onClick={showBookedRoom}>show booked rooms</button>
            </div>
             
             
            <div id='avilroom' style={{ display: 'none' }}>
               <h3>Available Rooms</h3>
               <hr></hr>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Room no.</th>
                    <th scope="col">Room type</th>
                    <th scope="col">Bed</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>single</td>
                    <td><span style={{ color: 'blue' }}>available</span></td>
                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                    <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>single</td>
                    <td><span style={{ color: 'blue' }}>available</span></td>

                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                    <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>single</td>
                    <td><span style={{ color: 'blue' }}>available</span></td>
                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                    <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>single</td>
                    <td><span style={{ color: 'blue' }}>available</span></td>
                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                    <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>single</td>
                    <td><span style={{ color: 'blue' }}>available</span></td>
                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                    <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                  </tr>


                </tbody>
              </table>
            </div>
            
            <div id='bookedroom' style={{ display: 'none' }}>
              <h3>Booked Room</h3>
              <hr></hr>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="room_card" id='room_card'>
                        <h5>Room no. 6</h5>
                        <div id='bookedroom1' style={{ display: 'none' }}>

                          <p>Amol</p>
                          <button className='hbtn' onClick={hideRoom1}>hide</button>
                        </div>
                        <button className='button' onClick={bookedRoom1} >show details</button>
                      </div>
                    </td>

                    <td><div className="room_card" id='room_card'>
                      <h5>Room no. 7</h5>
                      <div id='bookedroom2' style={{ display: 'none' }}>
                        <p>Manish Kashyap</p>
                        <button className='hbtn' onClick={hideRoom2}>hide</button>
                      </div>
                      <button className='button' onClick={bookedRoom2} >show details</button>
                    </div></td>

                    <td><div className="room_card" id='room_card'>
                      <h5>Room no. 8</h5>
                      <div id='bookedroom3' style={{ display: 'none' }}>
                        <p>Sam Wilson</p>
                        <button className='hbtn' onClick={hideRoom3}>hide</button>
                      </div>
                      <button className='button' onClick={bookedRoom3} >show details</button>
                    </div></td>

                    <td><div className="room_card" id='room_card'>
                      <h5>Room no. 9</h5>
                      <div id='bookedroom4' style={{ display: 'none' }}>
                        <p>William Hanna</p>
                        <button className='hbtn' onClick={hideRoom4}>hide</button>
                      </div>
                      <button className='button' onClick={bookedRoom4} >show details</button>
                    </div></td>
                  </tr>
                  <tr>
                    <td><div className="room_card" id='room_card'>
                      <h5>Room no. 10</h5>
                      <div id='bookedroom5' style={{ display: 'none' }}>
                        <p>Bob Marlie</p>
                        <button className='hbtn' onClick={hideRoom5}>hide</button>
                      </div>
                      <button className='button' onClick={bookedRoom5} >show details</button>
                    </div></td>

                    <td><div className="room_card" id='room_card'>
                      <h5>Room no. 11</h5>
                      <div id='bookedroom6' style={{ display: 'none' }}>
                        <p>Subramanyam Swami</p>
                        <button className='hbtn' onClick={hideRoom6}>hide</button>
                      </div>
                      <button className='button' onClick={bookedRoom6} >show details</button>
                    </div></td>

                    <td><div className="room_card" id='room_card'>
                      <h5>Room no. 12</h5>
                      <div id='bookedroom7' style={{ display: 'none' }}>
                        <p>Venkat</p>
                        <button className='hbtn' onClick={hideRoom7}>hide</button>
                      </div>
                      <button className='button' onClick={bookedRoom7} >show details</button>
                    </div></td>

                    <td><div className="room_card" id='room_card'>
                      <h5>Room no. 13</h5>
                      <div id='bookedroom8' style={{ display: 'none' }}>
                        <p>Ajith Kumar</p>
                        <button className='hbtn' onClick={hideRoom8}>hide</button>
                      </div>
                      <button className='button' onClick={bookedRoom8} >show details</button>
                    </div></td>

                  </tr>
                  <tr>
                    <td><div className="room_card" id='room_card'>
                      <h5>Room no. 14</h5>
                      <div id='bookedroom9' style={{ display: 'none' }}>
                        <p>Rajkumar</p>
                        <button className='hbtn' onClick={hideRoom9}>hide</button>
                      </div>
                      <button className='button' onClick={bookedRoom9} >show details</button>
                    </div></td>

                    <td><div className="room_card" id='room_card'>
                      <h5>Room no. 15</h5>
                      <div id='bookedroom10' style={{ display: 'none' }}>
                        <p>Kanna Babu</p>
                        <button className='hbtn' onClick={hideRoom10}>hide</button>
                      </div>
                      <button className='button' onClick={bookedRoom10} >show details</button>
                    </div></td>

                    <td><div className="room_card" id='room_card'>
                      <h5>Room no. 16</h5>
                      <div id='bookedroom11' style={{ display: 'none' }}>

                        <p>Stephen </p>
                        <button className='hbtn' onClick={hideRoom11}>hide</button>
                      </div>
                      <button className='button' onClick={bookedRoom11} >show details</button>
                    </div></td>

                    <td><div className="room_card" id='room_card'>
                      <h5>Room no. 17</h5>
                      <div id='bookedroom12' style={{ display: 'none' }}>
                        <p>Robin</p>
                        <button className='hbtn' onClick={hideRoom12}>hide</button>

                      </div>
                      <button className='button' onClick={bookedRoom12} >show details</button>
                    </div></td>
                  </tr>
                </tbody>

              </table>

            </div>


                </div>
                </div>
                </div>
            
        </div>
    )
}