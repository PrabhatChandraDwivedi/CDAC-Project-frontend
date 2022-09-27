import axios from 'axios';
import React, { useEffect, useState, Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import EditableRowGuest from '../EditableRowGuest';
import ReadOnlyRowGuest from '../ReadOnlyRowGuest';
import './GuestRoom.css';

export default function GuestRoom() {
  const navigate = useNavigate();
  const [guestmalebookeddata, setGuestMaleBookedData] = useState([]);
  const [guestmaleavailablerooms, setGuestMaleAvailRoom] = useState([]);
  const [guestfemaleavaliablerooms, setGuestFemaleAvailRoom] = useState([]);
  const [guestfemalebookeddata, setGuestFemaleBookedData] = useState([]);

  const gotoadminguest = () => {
    navigate("/adminguest");
  };

  //////////////////////////////////////////////

  const [getfromstutable, setGetFromStuTable] = useState([]);

  const [editFormData, setEditFormData] = useState({
    room_no: "",
    wing: "",
    
    grid: "",
    guest_name: "",

    fees: "",
    dues: "",
    feepaid: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = {
      room_no: editFormData.room_no,
      wing: editFormData.wing,
      grid: editContactId,
      guest_name: editFormData.guest_name,
      fees: editFormData.fees,
      dues: editFormData.dues,
      feepaid: editFormData.feepaid,
    };

    const newContacts = [...mergedbooked];

    const index = mergedbooked.findIndex(
      (contact) => contact.guest.grid === editContactId
    );

    newContacts[index].room_no = editedContact.room_no;
    newContacts[index].wing = editedContact.wing;
    newContacts[index].grid = editedContact.grid;
    newContacts[index].guest_name = editedContact.guest_name;
    newContacts[index].fees = editedContact.fees;
    newContacts[index].dues = editedContact.dues;
    newContacts[index].feepaid = editedContact.feepaid;
    newContacts[index].guest.grid = editedContact.grid;
    newContacts[index].guest.guest_name = editedContact.guest_name;

    // console.log(newContacts)
    // let stu_id = newContacts[index].srid
    // console.log(stu_id);

    var result = newContacts.find(
      (item) => item.guest.grid === editContactId
    );
   
    let room_no = result.room_no;
   
    let gender = result.guest.gender;
    if (gender === "Male") {
      await axios
        .post(
          "http://localhost:8080/api/roomalloc/updateguest/" +
            room_no
            ,
          result,
          { mode: "no-cors" }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      displayGuestBookedDataMale();
      displayGuestFemaleBookedData();
    }
    if (gender === "Female") {
      await axios
        .post(
          "http://localhost:8080/api/roomalloc/fupdateguest/" +
            room_no,
          result,
          { mode: "no-cors" }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      displayGuestBookedDataMale();
      displayGuestFemaleBookedData();
    }

    console.log(result);

    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.guest.grid);

    const formValues = {
      room_no: contact.room_no,
      wing: contact.wing,
      grid: contact.guest.grid,
      
      guest_name: contact.guest_name,
      fees: contact.fees,
      dues: contact.dues,
      feepaid: contact.feepaid,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = async (contactId) => {
    const newContacts = [...mergedbooked];

    let result = newContacts.find(
      (contact) => contact.guest.grid === contactId
    );

    console.log(result);
    
    let room_no = result.room_no;
    
    let gender = result.guest.gender;

    if (gender === "Male") {
      await axios
        .get(
          "http://localhost:8080/api/roomalloc/deleteoneguest/" +
            room_no ,
          result,
          { mode: "no-cors" }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      displayGuestBookedDataMale();
      displayGuestFemaleBookedData();
    }
    if (gender === "Female") {
      await axios
        .get(
          "http://localhost:8080/api/roomalloc/fdeleteoneguest/" +
            room_no,
          result,
          { mode: "no-cors" }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      displayGuestBookedDataMale();
      displayGuestFemaleBookedData();
    }
  };

  const gotoadminsturoomalloc = () => {
    navigate("/adminsturoomupdate");
  };

  const mergedavail = [...guestmaleavailablerooms, ...guestfemaleavaliablerooms];
  const mergedbooked = [...guestmalebookeddata, ...guestfemalebookeddata];

  const showAvailableRoom = () => {
    document.getElementById("avilroom").style.display = "block";
    document.getElementById("bookedroom").style.display = "none";
  };
  const showBookedRoom = () => {
    document.getElementById("avilroom").style.display = "none";
    document.getElementById("bookedroom").style.display = "block";
  };

  function displayGuestMaleAvailable() {
    let room_status = false;
    axios
      .get("http://localhost:8080/api/room/getallmaleguestrooms/" + room_status, {
        mode: "no-cors",
      })
      .then((response) => {
        setGuestMaleAvailRoom(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function displayGuestBookedDataMale() {
    axios
      .get("http://localhost:8080/api/roomalloc/getallmaleguestalloc", {
        mode: "no-cors",
      })
      .then((response) => {
        setGuestMaleBookedData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function displayGuestFemaleAvailable() {
    let room_status = false;
    axios
      .get("http://localhost:8080/api/room/getallfemaleguestrooms/" + room_status, {
        mode: "no-cors",
      })
      .then((response) => {
        setGuestFemaleAvailRoom(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const displayGuestFemaleBookedData = () => {
    axios
      .get("http://localhost:8080/api/roomalloc/getallfemaleguestroomalloc", {
        mode: "no-cors",
      })
      .then((response) => {
        setGuestFemaleBookedData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    displayGuestBookedDataMale();
    displayGuestFemaleBookedData();
    displayGuestMaleAvailable();
    displayGuestFemaleAvailable();
  }, []);

  return (
    <div>
      <div id="wrapper">
        <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 fixed-side">
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
                <a class="nav-link pcdptr" onClick={""} href="#0">
                  <i class="fas fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pcdptr" onClick={""} href="#0">
                  <i class="fas fa-user"></i>
                  <span>Room</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active pcdptr" href="#0">
                  <i class="fas fa-table"></i>
                  <span>Student</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pcdptr" onClick={""} href="#0">
                  <i class="far fa-user-circle"></i>
                  <span>Guest</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pcdptr" onClick={""} href="#0">
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
            <nav
              class="navbar navbar-light navbar-expand bg-white shadow mb-4 fixed-top1"
              style={{ position: "fixed", top: 0 }}
            >
              <div class="container-fluid">
                <h2>Student Room</h2>
              </div>
            </nav>

            <script src="https://code.jquery.com/jquery-3.3.1.js" />
            <script src="cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css" />
            <script src="cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js" />
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
              crossorigin="anonymous"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
              crossorigin="anonymous"
            />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
            <script src="assets/js/script.min.js" />

            <div className="Guestroombigdiv">
              <div className="twobtn">
                <button className="button1" onClick={showAvailableRoom}>
                  <h3 className="hover-underline-animationx">
                    Available Rooms
                  </h3>
                </button>
                <button className="button2" onClick={showBookedRoom}>
                  {" "}
                  <h3 className="hover-underline-animationx">Booked Rooms</h3>
                </button>
              </div>

              <div id="avilroom" style={{ display: "none" }}>
                <br />
                <h3 style={{ fontSize: 21, marginLeft: 10, marginTop: -14 }}>
                  Available Rooms
                </h3>
                <hr />
                <div class="card shadow">
                  <div class="card-header py-3">
                    <p class="text-primary m-0 fw-bold">Room type: Double</p>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-nowrap">
                        <div
                          id="dataTable_length"
                          class="dataTables_length"
                          aria-controls="dataTable"
                        >
                          <label class="form-label">
                            Show&nbsp;
                            <select class="d-inline-block form-select form-select-sm">
                              <option value="10" selected="">
                                10
                              </option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>
                            &nbsp;
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div
                          class="text-md-end dataTables_filter"
                          id="dataTable_filter"
                        >
                          <label class="form-label">
                            <input
                              type="search"
                              class="form-control form-control-sm"
                              aria-controls="dataTable"
                              placeholder="Search"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      class="table-responsive table mt-2"
                      id="dataTable"
                      role="grid"
                      aria-describedby="dataTable_info"
                    >
                      <table class="table my-0" id="dataTable">
                        <thead>
                          <tr>
                            <th>Room no.</th>
                            <th>Wing</th>
                            <th>Room Status</th>
                            <th style={{ position: "relative", left: 80 }}>
                              Allocate
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {mergedavail.map(function (item) {
                            return (
                              <tr>
                                {/* <th scope="row">1</th> */}
                                <td>{item.room_no}</td>
                                <td>{item.wing}</td>
                                <td>Available</td>
                                <td style={{ position: "relative", left: 80 }}>
                                  <button
                                    type="submit"
                                    class="btn btn-warning"
                                    onClick={gotoadminguest}
                                  >
                                    <i class="fa-solid fa-user-pen"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div id="bookedroom" style={{ display: "none" }}>
                <br />
                <h3 style={{ fontSize: 21, marginLeft: 10, marginTop: -18 }}>
                  Booked Rooms
                </h3>
                <hr />

                <div class="card shadow">
                  <div class="card-header py-3">
                    <p class="text-primary m-0 fw-bold">Room type: Double</p>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-nowrap">
                        <div
                          id="dataTable_length"
                          class="dataTables_length"
                          aria-controls="dataTable"
                        >
                          <label class="form-label">
                            Show&nbsp;
                            <select class="d-inline-block form-select form-select-sm">
                              <option value="10" selected="">
                                10
                              </option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>
                            &nbsp;
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div
                          class="text-md-end dataTables_filter"
                          id="dataTable_filter"
                        >
                          <label class="form-label">
                            <input
                              type="search"
                              class="form-control form-control-sm"
                              aria-controls="dataTable"
                              placeholder="Search"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      class="table-responsive table mt-2"
                      id="dataTable"
                      role="grid"
                      aria-describedby="dataTable_info"
                    >
                      <form onSubmit={handleEditFormSubmit}>
                        <table class="table my-0" id="dataTable">
                          <thead>
                            <tr>
                              <th>Room no.</th>
                              <th>Wing</th>
                              
                              <th>Id</th>
                              <th>Name</th>

                              <th>Fees</th>
                              <th>Dues</th>
                              <th>Fee Paid</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {mergedbooked.map((contact) => (
                              <Fragment>
                                {editContactId === contact.guest.grid ? (
                                  <EditableRowGuest
                                    editFormData={editFormData}
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancelClick={handleCancelClick}
                                  />
                                ) : (
                                  <ReadOnlyRowGuest
                                    contact={contact}
                                    handleEditClick={handleEditClick}
                                    handleDeleteClick={handleDeleteClick}
                                  />
                                )}
                              </Fragment>
                            ))}
                          </tbody>
                        </table>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      <script src="assets/js/bs-init.js"></script>
      <script src="assets/js/theme.js"></script>
    </div>
  );
}