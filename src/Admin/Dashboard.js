import React from "react";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  const gotoroom = () => {
    navigate("/adminroom");
  }
  const gotostudent=()=>{
    navigate("/adminstudent");
}
const gotoguest=()=>{
    navigate("/adminguest");
}
const gotodashboard = () => {
    navigate("/dashboard");
  }
  const logout = ()=>{
    localStorage.removeItem("admin")
    navigate("/")
  }
  return (
    <div>
      <div id="wrapper">
        <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
          <div class="container-fluid d-flex flex-column p-0">
            <a
              class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
              href="#"
            >
              <div class="sidebar-brand-icon rotate-n-15">
                <i class="fa-solid fa-building-columns"></i>
              </div>
              <div class="sidebar-brand-text mx-3">
                <span>College Name</span>
              </div>
            </a>
            <hr class="sidebar-divider my-0" />
            <ul class="navbar-nav text-light" id="accordionSidebar">
              <li class="nav-item">
                <a class="nav-link active pcdptr">
                  <i class="fas fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pcdptr" onClick={gotoroom}>
                  <i class="fas fa-user"></i>
                  <span>Room</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pcdptr" onClick={gotostudent}>
                  <i class="fas fa-table"></i>
                  <span>Student</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pcdptr" onClick={gotoguest}>
                  <i class="far fa-user-circle"></i>
                  <span>Guest</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pcdptr" onClick={gotodashboard}>
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
                <h2>Dashboard</h2>
                <form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div class="input-group"></div>
                </form>
                <ul class="navbar-nav flex-nowrap ms-auto">
                  <li class="nav-item dropdown d-sm-none no-arrow">
                    <a
                      class="dropdown-toggle nav-link"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      href="#"
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
                  <li class="nav-item dropdown no-arrow mx-1"></li>
                  <li class="nav-item dropdown no-arrow mx-1">
                    <div
                      class="shadow dropdown-list dropdown-menu dropdown-menu-end"
                      aria-labelledby="alertsDropdown"
                    ></div>
                  </li>
                  <div class="d-none d-sm-block topbar-divider"></div>
                  <li class="nav-item dropdown no-arrow">
                    <div class="nav-item dropdown no-arrow">
                      <a
                        class="dropdown-toggle nav-link"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                        href="" onClick={logout}
                      >
                        <span class="d-none d-lg-inline me-2 text-gray-600 small">
                          Logout
                        </span>
                        <i class="fa-solid fa-user-tie"></i>
                      </a>
                      <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                        <a class="dropdown-item" href="#">
                          <i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
                          &nbsp;Profile
                        </a>
                        <a class="dropdown-item" href="#">
                          <i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>
                          &nbsp;Settings
                        </a>
                        <a class="dropdown-item" href="#">
                          <i class="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>
                          &nbsp;Activity log
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
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
              <div class="d-sm-flex justify-content-between align-items-center mb-4"></div>
              <div class="vvCard-group">
                <div class="vvcard">
                  <div class="vvcontainer">
                    <h4>
                      <b >Room </b>
                    </h4>
                    <div class="pccontainer2">
                      <button onClick={gotoroom} class="vvbutton">
                        <span>
                          <i class="fa-solid fa-arrow-right-to-bracket"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="vvcard">
                  <div class="vvcontainer">
                    <h4>
                      <b>Student</b>
                    </h4>
                    <div class="pccontainer2">
                      <button onClick={gotostudent} class="vvbutton">
                        <span>
                          <i class="fa-solid fa-arrow-right-to-bracket"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="vvcard">
                  <div onClick={gotoguest} class="vvcontainer">
                    <h4>
                      <b >Guest</b>
                    </h4>
                    <div class="pccontainer2">
                      <button class="vvbutton">
                        <span>
                          <i class="fa-solid fa-arrow-right-to-bracket"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <a class="border rounded d-inline scroll-to-top" href="#page-top">
          <i class="fas fa-angle-up"></i> */}
        {/* </a> */}
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/script.min.js"></script>
    </div>
  );
}
