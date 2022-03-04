import React from "react"; 
import { Container, Row } from "react-bootstrap";
import Service from "./Service";
import Title from "./Title";
import { services } from "../servicesData";
const Services = () => {
  return (
    <div className="mt-5">
      <Title heading=" category" subtitle="our featured category" />
      <Container className="my-5">
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
