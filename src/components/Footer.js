import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaBeer, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" pb-3 footer-component pt-3">
      <Container>
        <Row>
          <Col className="text-start " md={3} xs={6}>
            <h4>Links</h4>
            <div className="  d-flex flex-column footer-link  footer-link ">
              <a href="/#">Pricing</a>
              <a href="/#">Shop</a>
              <a href="/#">About us</a>
            </div>
          </Col>
          <Col className="text-start " md={3} xs={6}>
            <h4>Services</h4>
            <div className=" d-flex flex-column footer-link ">
              <a href="/#">Pools</a>
              <a href="/#">Waterslides</a>
              <a href="/#">River rides</a>
              <a href="/#">Lazy Riders</a>
              <a href="/#">Kids play Zone</a>
              <a href="/#">Relaxing Lounge pool</a>
            </div>
          </Col>
          <Col className="text-start " md={3} xs={6}>
            <h4>About us</h4>
            <div className=" d-flex flex-column footer-link ">
              <a href="/#">General Info</a>
              <a href="/#">services</a>
              <a href="/#">FAQS</a>
              <a href="/#">News</a>
            </div>
          </Col>
          <Col className="text-start " md={3} xs={6}>
            <h4>Resources</h4>
            <div className=" d-flex flex-column footer-link ">
              <a href="/#">Book Appointments</a>
              <a href="/#">FAQS</a>
              <a href="/#">Contacts</a>
              <a href="/#">Privacy policy</a>
            </div>
          </Col>
        </Row>
      </Container>
      <hr  className="text-secondary"/>
      <Container>
        <Row>
          <Col className="" md={6}>
            <p className="text-start copywright">
              Waving Water Park © 2022 all rights reserved.
            </p>
          </Col>
          <Col md={6} className="">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
