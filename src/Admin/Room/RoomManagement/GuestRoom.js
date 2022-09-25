import './GuestRoom.css';
import $ from 'jquery'; 
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
export default function GuestRoon() {
  const showAvailableRoom = () => {
    document.getElementById("avilroom").style.display = "block";
    document.getElementById("bookedroom").style.display = "none";
  }
  const showBookedRoom = () => {
    document.getElementById("avilroom").style.display = "none";
    document.getElementById("bookedroom").style.display = "block";
  };

  
    $(document).ready(function () {
       $('#bookedtable').DataTable({
        "bDestroy": true,
        "lengthMenu": [[5, 10, 20, 50], [5, 10, 20, 50, "All"]]    
    });
    });
    $(document).ready(function () {
       $('#Availtable').DataTable({
        "bDestroy": true,
        "lengthMenu": [[5, 10, 20, 50], [5, 10, 20, 50, "All"]]    
    });
    });
   
  

  return (
    <div id="wrapper">
      <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 fixed-side sidediv">
        <div class="container-fluid d-flex flex-column p-0">
          <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href=" ">
            <div class="sidebar-brand-icon rotate-n-15"><i class="fa-solid fa-building-columns"></i></div>
            <div class="sidebar-brand-text mx-3"><span>College name</span></div>
          </a>
          <hr class="sidebar-divider my-0" />
          <ul class="navbar-nav text-light" id="accordionSidebar">
            <li class="nav-item"><a class="nav-link pcdptr" onClick={''} href=""><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
            <li class="nav-item"><a class="nav-link pcdptr" onClick={''} href=""><i class="fas fa-user"></i><span>Room</span></a></li>
            <li class="nav-item"><a class="nav-link active pcdptr" href=""><i class="fas fa-table"></i><span>Student</span></a>
            </li>
            <li class="nav-item"><a class="nav-link pcdptr" onClick={''} href=""><i class="far fa-user-circle"></i><span>Guest</span></a></li>
            <li class="nav-item"> <a class="nav-link pcdptr" onClick={''} href=""><i class="far fa-user-circle"></i><span>Back</span></a></li>
          </ul>
        </div>
      </nav>
      <div class="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 fixed-top1" style={{ position: "fixed", top: 0 }}>
            <div className="container-fluid">
              <h2> Guest Room</h2>
            </div>
          </nav>
          <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
          <script src="cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css"></script>
          <script src="cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

          <div className='Guestroombigdiv'>
            <div className='twobtn'>
              <button className='button1 ' onClick={showAvailableRoom}><h3 className='hover-underline-animationx' >Available Rooms</h3> </button>
              <button className='button2 ' onClick={showBookedRoom}><h3 className='hover-underline-animationx'>Booked Rooms</h3> </button>
            </div>

            <div id='avilroom' style={{ display: 'none' }}>
              <br/>
              <h3 style={{ fontSize:21,marginLeft: 10, marginTop:-14}}> Available Rooms</h3><hr/>
              <table id='Availtable' class="table table-hover table-striped table-bordered mynewAvailtable" cellSpacing={0} >
                <thead className='newtable'>
                  <tr>
                    <th>Room no.</th>
                    <th>Wing</th>
                    <th>Room Status</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody className='newtable1'>
                  <tr>
                    <th>101</th>
                    <td>ABCd</td>
                    <td>Available</td>
                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                  </tr>
                  <tr>
                    <th>102</th>
                    <td>BCDE</td>
                    <td>Unavailable</td>
                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                  </tr>
                  <tr>
                    <th>103</th>
                    <td>CDEFGH</td>
                    <td>Available</td>
                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                  </tr>
                  <tr>
                    <th>104</th>
                    <td>DEFGHI</td>
                    <td>Unavailable</td>
                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                  </tr>
                  <tr>
                    <th>105</th>
                    <td>WXYZ</td>
                    <td>Available</td>
                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                  </tr>
                </tbody>
              </table>
         
            </div>
          

            <div id='bookedroom' style={{ display: 'none' }}>
              <br/>
              <h3 style={{ fontSize:21,marginLeft: 10, marginTop:-14}}>Booked Rooms</h3> <hr/>
              <table id='bookedtable' class="table table-hover table-striped table-bordered mynewBookedtable" cellSpacing={0} >
                <thead className='newtable'>
                  <tr>
                    <th>Room no.</th>
                    <th>Wing</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Fees</th>
                    <th>Dues</th>
                    <th>From</th>
                    <th>Till</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className='newtable1'>
                <tr>
                    <th>101</th>
                    <td>BCDEFGH</td>
                    <td>986532</td>
                    <th>Chaitra</th>
                    <td>10000</td>
                    <td>-----</td>
                    <td>08-03-2022</td>
                    <td>08-05-2022</td>
                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                    <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                  </tr>
                <tr>
                    <th>102</th>
                    <td>ABCD</td>
                    <td>192198</td>
                    <th>Vishal</th>
                    <td>10000</td>
                    <td>4000</td>
                    <td>08-03-2022</td>
                    <td>08-04-2022</td>
                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                    <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                  </tr>
                <tr>
                    <th>103</th>
                    <td>ABCD</td>
                    <td>789654</td>
                    <th>Vikas</th>
                    <td>10000</td>
                    <td>5000</td>
                    <td>10-03-2022</td>
                    <td>10-04-2022</td>
                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                    <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                  </tr>
                <tr>
                    <th>104</th>
                    <td>ABCD</td>
                    <td>192198</td>
                    <th>Vishwesh</th>
                    <td>10000</td>
                    <td>500</td>
                    <td>15-03-2022</td>
                    <td>08-04-2022</td>
                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                    <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                  </tr>
                <tr>
                    <th>105</th>
                    <td>ABCD</td>
                    <td>192198</td>
                    <th>Prabhat</th>
                    <td>10000</td>
                    <td>10000</td>
                    <td>08-03-2022</td>
                    <td>31-12-2023</td>
                    <td><button class="btn"><i class="fa-solid fa-user-pen"></i></button></td>
                    <td><button class="btn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
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