import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import Title from "../components/Title";
import useAuth from "../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [myBookings, setMyBookings] = useState([]);
  console.log(myBookings);
  useEffect(() => {
    fetch(`https://peaceful-taiga-96201.herokuapp.com/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyBookings(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to Cancel your Bookig");
    if (proceed) {
      fetch(`https://peaceful-taiga-96201.herokuapp.com/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            let myRestBookings = myBookings.filter(
              (booking) => booking._id !== id
            );
            setMyBookings(myRestBookings);
          }
        });
    }
  };
  return (
    <div  style={{ minHeight:'60vh' }} className="mt-3 mh-100">
      <Title heading="Package you booked With us" />
      <Container>
        <Table style={{ backgroundColor:'#f4f9fd' }} className="  text-secondary" responsive>
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Name</th>
              <th>Package Name</th>
              <th>Booking Date</th>
              <th>Email</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {myBookings.map((booking, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{booking.userName}</td>
                <td>{booking.ticketPackage}</td>
                <td>{booking.date}</td>
                <td>{booking.email}</td>
                <td>
                  {" "}
                  <Button
                    onClick={() => handleDelete(booking._id)}
                    variant="danger"
                  >
                    Cancel Booking
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MyOrders;
