import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useFirebase from "../hooks/useFirebase";
import logo from "../images/logo3.png";
const NavigationBar = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand  className="logo text-white" href="#home">
          <img className="  p-1" src={logo} alt="logo" />WavingWaterPark
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
             
          </Nav> */}
          <Nav className="ms-auto d-flex align-items-center">
            <Link className="link" to="/">
              Home
            </Link> 
            {user.displayName && (
              <div>
                <Link className="link" to="/myorders">
                  My Bookings
                </Link>
                <Link className="link" to="/manageOrder">
                  Manage Booking
                </Link>
                <Link className="link" to="/addPackage">
                  Add Package
                </Link>
              </div>
            )}
            {/* <span className="me-3">{user.displayName}</span> */}
            {user.displayName ? (
              <button id="accent-btn"  onClick={logOut}>
                Logout
              </button>
            ) : (
              <Link to="/login">
                <Button className="main-btn">Login</Button>{" "}
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
