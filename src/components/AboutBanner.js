import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <div className="about-banner">
      <Container className="about-message w-75">
        <div className=" mx-auto text-white">
          <h2>
            We have everything you want and need to make your waterpark
            experience safe & comfortable!
          </h2>
          <p>
            ll the waterslides are guaranteed to be safe, and our lifeguards are 
            <br /> always ready to help in case of any danger or emergency.
          </p>
          <Link to="/about">
            <Button className="main-btn border-0">MORE ABOUT US</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AboutBanner;
