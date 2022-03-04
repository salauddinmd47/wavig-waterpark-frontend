import React from "react";
import AboutBanner from "../components/AboutBanner";
import Banner from "../components/Banner";
import Childcare from "../components/Childcare";
import Footer from "../components/Footer";

import Packages from "../components/Packages";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner bannerStyle="main-banner">
        <div className="banner-heading p-3 ">
          <h2 className=" my0 p-3">
            family place to feel <br /> happy and safe
          </h2>
          <p>
            All the waterslides are proved to safe <br /> our lifegaurd is
            always ready to save{" "}
          </p>
        </div>
      </Banner>
      <Packages />
      <AboutBanner />
      <Services></Services> 
      <Childcare />
      <Testimonials/>
    </div>
  );
};

export default Home;
