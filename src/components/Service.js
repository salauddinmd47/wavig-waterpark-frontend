import React from "react";
import { Card, Col } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, des, icon, bgColor, img } = service;
  return (
    <Col>
      <div className="service-container">
        <img src={img} alt="" />
        <div className="service-details">
          <h2 className="mt-5 pt-5">{name}</h2>
          <p className="mt-4">{des}</p> 
        </div>
        <div className="lernmore-btn">
        <a href="/">Learn More</a>
        </div>
      </div> 
    </Col>
  );
};

export default Service;
