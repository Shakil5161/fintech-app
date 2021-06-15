import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCoffee } from "@fortawesome/free-solid-svg-icons";
import LoginUser from "../../../img/AbirVi.jfif";
import Country from "../../../img/bd.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container-fluid text-white border-bottom border-secondary pb-3">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container pt-5">
          <a className="navbar-brand pe-5 text-white" href="#">
            <h3>Fintech App</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item  pe-3">
                <a className="nav-link text-white nav-hover" aria-current="page" href="#">
                  Wallet
                </a>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link text-white nav-hover" href="#">
                  History
                </a>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link text-white nav-hover" href="#">
                  Recipients
                </a>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link text-white nav-hover" href="#">
                  QR Codes
                </a>
              </li>
            </ul>
            {/* it's fake user data only use for design purposes data will come from API when user stay logged in */}
            <div>
              <FontAwesomeIcon className="m-auto" icon={faBell} />
              <img className="country-flag m-auto" src={Country} height="20px" alt="Country Img" srcset="" />
              <img
                className="rounded-circle"
                src={LoginUser}
                height="30px"
                alt="Log In User Img"
                srcset=""
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
