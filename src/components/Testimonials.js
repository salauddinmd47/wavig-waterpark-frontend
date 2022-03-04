import React, { Component } from "react";
import Title from "./Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../servicesData";
import { Col, Container, Row } from "react-bootstrap";
class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div className="mt-5" style={{ minHeight:'60vh' , }}>
       
        <Container className="rounded" style={{ backgroundColor:'#02B290', padding:'5PX 30px' }} >
         <h4 className="text-white">TESTIMONIALS</h4>
        <h2 className="text-white">WHAT OUR CLIENTS SAYS</h2>
          
          <Slider {...settings}  >
            {testimonials.map((testimonial, index) => (
              <div key={index}  > 
                 <div className="d-flex  p-2 rounded-md"> 
                  <img src={testimonial.thumbnail} width="150px" alt="" />
                 <div className="text-start mt-3   ms-2">
                 <p style={{ color:'#f4f9fd' }} className="">{testimonial.comments}</p> 
                 <p className="text-success">By <span style={{ color:'#f4f9fd' }} className="text-bold fs-4 g-0 ">{testimonial.name} </span> <br />
                 {testimonial.date} </p>
                    
                 </div>
                 </div>
                  
              </div>
            ))}
          </Slider>
       
        </Container>
      </div>
    );
  }
}

export default Testimonials;
