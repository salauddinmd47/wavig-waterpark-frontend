import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Title from "../components/Title";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
const Booking = () => {
  const { user } = useAuth();
  const { packageId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const initialState = {
    userName: user.displayName,
    email: user.email,
    ticketPackage: selectedProduct.packageName,
    address: "",
    phone: "",
    date: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialState);
  console.log(initialState);

  useEffect(() => {
    fetch(`https://peaceful-taiga-96201.herokuapp.com/packages/${packageId}`)
      .then((res) => res.json())
      .then((data) => setSelectedProduct(data));
  }, []);
  const handleBooking = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newBookingInfo = { ...bookingInfo };
    newBookingInfo[field] = value;
    setBookingInfo(newBookingInfo);
  };
  const handleBookingSubmit = (e) => {
    const { packageName } = selectedProduct;
    e.preventDefault();
    const packageInfo = { ...bookingInfo };
    packageInfo.date = startDate.toLocaleDateString();
    packageInfo.ticketPackage = packageName;
    fetch("https://peaceful-taiga-96201.herokuapp.com/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(packageInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your booking successfully completed");
        }
      });
  };

  return (
    <div style={{ minHeight:'60vh' }}>
      <Banner bannerStyle="booking-banner ">
        <div className="booking-heading">
          <div className="herding-text">
            <h4>Welcome to Booking Page</h4>
            {/* <h2> Want to Book {slug}?</h2> */}
          </div>
        </div>
      </Banner>
      <Container className="mt-5">
        <form
          onSubmit={handleBookingSubmit}
          className="row g-3 text-start w-75 mx-auto border bg-secondary pt-0 p-5"
        >
          <h2 className="text-center text-white">Fill up booking From</h2>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="userName"
              onBlur={handleBooking}
              defaultValue={user?.displayName}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              email
            </label>
            <input
              type="email"
              name="email"
              onBlur={handleBooking}
              className="form-control"
              defaultValue={user?.email}
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Package Name
            </label>
            <input
              type="text"
              name="ticketPackage"
              onBlur={handleBooking}
              className="form-control"
              defaultValue={selectedProduct?.packageName}
              placeholder="Package Name"
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Date
            </label>
            <DatePicker
              className="form-control"
              name="date"
              onBlur={handleBooking}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress2" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              onBlur={handleBooking}
              className="form-control"
              id="inputAddress2"
              placeholder="enter your address here"
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress2" className="form-label">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              onBlur={handleBooking}
              className="form-control"
              id="inputAddress2"
              placeholder="enter your phone number"
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Book Now
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Booking;
