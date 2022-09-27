import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./GuestRoom.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

export default function StudentRoom() {
  const navigate = useNavigate();
  const gotoadminstu = () => {
    navigate("/adminstudent");
  };

  const [malebookeddata, setMaleBookedData] = useState([]);
  const [malestuavailablerooms, setMaleStuAvailRoom] = useState([]);
  const [femalestuavaliablerooms, setFemaleStuAvailRoom] = useState([]);
  const [femalebookeddata, setFemaleBookedData] = useState([]);

  //////////////////////////////////////////////

  const [getfromstutable, setGetFromStuTable] = useState([]);

  const [editFormData, setEditFormData] = useState({
    wing: "",
    room_no: "",
    bed_no: "",
    srid: "",
    student_name: "",

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
      wing: editFormData.wing,
      room_no: editFormData.room_no,
      srid: editContactId,
      student_name: editFormData.student_name,
      fees: editFormData.fees,
      dues: editFormData.dues,
      feepaid: editFormData.feepaid,
    };

    const newContacts = [...mergedbooked];

    const index = mergedbooked.findIndex(
      (contact) => contact.student.srid === editContactId
    );

    newContacts[index].wing = editedContact.wing;
    newContacts[index].room_no = editedContact.room_no;
    newContacts[index].srid = editedContact.srid;
    newContacts[index].student_name = editedContact.student_name;
    newContacts[index].fees = editedContact.fees;
    newContacts[index].dues = editedContact.dues;
    newContacts[index].feepaid = editedContact.feepaid;
    newContacts[index].student.srid = editedContact.srid;
    newContacts[index].student.student_full_name = editedContact.student_name;

    // console.log(newContacts)
    // let stu_id = newContacts[index].srid
    // console.log(stu_id);

    var result = newContacts.find(
      (item) => item.student.srid === editContactId
    );
    let bed_no = result.bed_no;
    let room_no = result.room_no;
    let wing = result.wing;
    let gender = result.student.gender;
    if (gender === "Male") {
      await axios
        .post(
          "http://localhost:8080/api/roomalloc/update/" +
            room_no +
            "/" +
            bed_no +
            "/" +
            wing,
          result,
          { mode: "no-cors" }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      displayBookedDataMale();
      displayFemaleBookedData();
    }
    if (gender === "Female") {
      await axios
        .post(
          "http://localhost:8080/api/roomalloc/fupdate/" +
            room_no +
            "/" +
            bed_no +
            "/" +
            wing,
          result,
          { mode: "no-cors" }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      displayBookedDataMale();
      displayFemaleBookedData();
    }

    console.log(result);

    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.student.srid);

    const formValues = {
      wing: contact.wing,
      room_no: contact.room_no,
      bed_no: contact.bed_no,
      srid: contact.student.srid,
      student_name: contact.student_name,
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
      (contact) => contact.student.srid === contactId
    );

    console.log(result);
    let bed_no = result.bed_no;
    let room_no = result.room_no;
    let wing = result.wing;
    let gender = result.student.gender;

    if (gender === "Male") {
      await axios
        .get(
          "http://localhost:8080/api/roomalloc/deleteone/" +
            room_no +
            "/" +
            bed_no +
            "/" +
            wing,
          result,
          { mode: "no-cors" }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      displayBookedDataMale();
      displayFemaleBookedData();
    }
    if (gender === "Female") {
      await axios
        .get(
          "http://localhost:8080/api/roomalloc/fdeleteone/" +
            room_no +
            "/" +
            bed_no +
            "/" +
            wing,
          result,
          { mode: "no-cors" }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      displayBookedDataMale();
      displayFemaleBookedData();
    }
  };

  const gotoadminsturoomalloc = () => {
    navigate("/adminsturoomupdate");
  };

  const mergedavail = [...malestuavailablerooms, ...femalestuavaliablerooms];
  const mergedbooked = [...malebookeddata, ...femalebookeddata];

  const showAvailableRoom = () => {
    document.getElementById("avilroom").style.display = "block";
    document.getElementById("bookedroom").style.display = "none";
  };
  const showBookedRoom = () => {
    document.getElementById("avilroom").style.display = "none";
    document.getElementById("bookedroom").style.display = "block";
  };

  function displayStuMaleAvailable() {
    let room_status = false;
    axios
      .get("http://localhost:8080/api/room/allstumalerooms/" + room_status, {
        mode: "no-cors",
      })
      .then((response) => {
        setMaleStuAvailRoom(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function displayBookedDataMale() {
    axios
      .get("http://localhost:8080/api/roomalloc/getallmalestu", {
        mode: "no-cors",
      })
      .then((response) => {
        setMaleBookedData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function displayFemaleAvailable() {
    let room_status = false;
    axios
      .get("http://localhost:8080/api/room/allstufemalerooms/" + room_status, {
        mode: "no-cors",
      })
      .then((response) => {
        setFemaleStuAvailRoom(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const displayFemaleBookedData = () => {
    axios
      .get("http://localhost:8080/api/roomalloc/getallfemalestualloc", {
        mode: "no-cors",
      })
      .then((response) => {
        setFemaleBookedData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    displayBookedDataMale();
    displayFemaleBookedData();
    displayStuMaleAvailable();
    displayFemaleAvailable();
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
                            <th>Bed</th>
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
                                <td>{item.bed_no}</td>
                                <td style={{ position: "relative", left: 80 }}>
                                  <button
                                    type="submit"
                                    class="btn btn-warning"
                                    onClick={gotoadminstu}
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
                              <th>Wing</th>
                              <th>Room no.</th>
                              <th>Bed no.</th>
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
                                {editContactId === contact.student.srid ? (
                                  <EditableRow
                                    editFormData={editFormData}
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancelClick={handleCancelClick}
                                  />
                                ) : (
                                  <ReadOnlyRow
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
