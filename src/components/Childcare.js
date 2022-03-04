import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import childImg from "../images/childcare.jpg";
const Childcare = () => {
  return (
    <div className=" bg-light py-5">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img className="img-fluid" src={childImg} alt="" />
          </Col>
          <Col xs={12} md={6} className="childcare-details">
            <Container className="text-start">
              <h2>
                Leave your <br /> worries behind <br /> and chill
              </h2>
              <p>
                We provide amazing experiences and create safe adventures for
                you at the same time. Active and passive leisure alternatives
                are available.
              </p>
              <Button className="main-btn border-0">Our Services</Button>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Childcare;
