import React from "react";
import { useNavigate } from "react-router-dom";
export default function Guest() {
  const navigate=useNavigate();
    const gotostudent=()=>{
        navigate("/student");
    }
    const gotoroom = () => {
      navigate("/room");
    }
    const gotodashboard = () => {
      navigate("/dashboard");
    }
  return (
    
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
                <a class="nav-link pcdptr" onClick={gotodashboard}href="#0">
                  <i class="fas fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pcdptr" onClick={gotoroom}href="#0">
                  <i class="fas fa-user"></i>
                  <span>Room</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pcdptr" onClick={gotostudent}href="#0">
                  <i class="fas fa-table"></i>
                  <span>Student</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active pcdptr"href="#0">
                  <i class="far fa-user-circle"></i>
                  <span>Guest</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pcdptr" onClick={gotodashboard}href="#0">
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
                <button
                  class="btn btn-link d-md-none rounded-circle me-3"
                  id="sidebarToggleTop"
                  type="button"
                >
                  <i class="fas fa-bars"></i>
                </button>
                <h2>Guest Management</h2>
                <form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div class="input-group"></div>
                </form>
                <ul class="navbar-nav flex-nowrap ms-auto">
                  <li class="nav-item dropdown d-sm-none no-arrow">
                    <a
                      class="dropdown-toggle nav-link"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      href="#0"
                    >
                      <i class="fas fa-search"></i>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-end p-3 animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form class="me-auto navbar-search w-100">
                        <div class="input-group">
                          <input
                            class="bg-light form-control border-0 small"
                            type="text"
                            placeholder="Search for ..."
                          />
                          <div class="input-group-append">
                            <button class="btn btn-primary py-0" type="button">
                              <i class="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                  <div class="d-none d-sm-block topbar-divider"></div>
                  <li class="nav-item dropdown no-arrow">
                    <div class="nav-item dropdown no-arrow">
                      <a
                        class="dropdown-toggle nav-link"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                        href="#0"
                      >
                        <span class="d-none d-lg-inline me-2 text-gray-600 small">
                          Administrator
                        </span>
                        <i class="fa-solid fa-user-tie"></i>
                      </a>
                      <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                        <a class="dropdown-item" href="#0">
                          <i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
                          &nbsp;Profile
                        </a>
                        <a class="dropdown-item" href="#0">
                          <i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>
                          &nbsp;Settings
                        </a>
                        <a class="dropdown-item" href="#0">
                          <i class="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>
                          &nbsp;Activity log
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#0">
                          <i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                          &nbsp;Logout
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="container-fluid">
              <div>
                <h3>Add new Guest</h3>
                <button class="addstu1" type="submit">
                  Add Guest
                </button>
              </div>
              <div id="forsearch">
                <h3>Update Check-in and Check out time</h3>

                <input
                  id="forinput"
                  type="search"
                  class="form-control form-control-sm"
                  aria-controls="dataTable"
                  placeholder="Enter name"
                />
                <input
                  id="forinput1"
                  type="search"
                  class="form-control form-control-sm"
                  aria-controls="dataTable"
                  placeholder="Enter Unique Id"
                />
                <input id="forinput2" type="time" />
                <input id="forinput3" type="time" />
                <button class="pcdbtn" type="submit">
                  Submit
                </button>
              </div>
              <div class="card shadow">
                <div class="card-header py-3">
                  <p class="text-primary m-0 fw-bold">Guest Info</p>
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
                          <th>S.no</th>
                          <th>Name</th>
                          <th>Unique no.</th>
                          <th>Check-in</th>
                          <th>Check-out</th>
                          <th>Id</th>
                          <th>Room no.</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <i class="fa-solid fa-user"></i>&nbsp;&nbsp;Guest 1
                          </td>
                          <td>657856376</td>
                          <td>27th Jul 2022,09:00</td>
                          <td>2nd Aug 2022,21:00</td>
                          <td>
                            <a href="#0">Download Id</a>
                          </td>
                          <td>1 C</td>
                          <td>
                            <button type="submit" class="btn btn-warning">
                              <i class="fa-solid fa-user-pen"></i>
                            </button>
                          </td>
                          <td>
                            <button type="submit" class="btn btn-danger">
                              <i class="fa-solid fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <i class="fa-solid fa-user"></i>&nbsp;&nbsp;Guest 2
                          </td>
                          <td>464564554</td>
                          <td>1st Aug 2022,10:00</td>
                          <td>5th Aug 2022,22:00</td>
                          <td>
                            <a href="#0">Download Id</a>
                          </td>
                          <td>13 D</td>
                          <td>
                            <button type="submit" class="btn btn-warning">
                              <i class="fa-solid fa-user-pen"></i>
                            </button>
                          </td>
                          <td>
                            <button type="submit" class="btn btn-danger">
                              <i class="fa-solid fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>S.no</th>
                          <th>Name</th>
                          <th>Unique no.</th>
                          <th>Check-in</th>
                          <th>Check-out</th>
                          <th>Id</th>
                          <th>Room no.</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div class="row">
                    <div class="col-md-6 align-self-center">
                      <p
                        id="dataTable_info"
                        class="dataTables_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 1
                      </p>
                    </div>
                    <div class="col-md-6">
                      <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                        <ul class="pagination">
                          <li class="page-item disabled">
                            <a class="page-link" href="#0" aria-label="Previous">
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li class="page-item active">
                            <a class="page-link" href="#0">
                              1
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#0">
                              2
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#0">
                              3
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#0" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="bg-white sticky-footer"></footer>
          <a class="border rounded d-inline scroll-to-top" href="#page-top">
            <i class="fas fa-angle-up"></i>
          </a>
        </div>
      </div>
    </div>
  );
}