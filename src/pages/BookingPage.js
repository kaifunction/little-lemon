import { useState } from "react";
import "./BookingPage.css";
import BookingForm from "./BookingForm";
import CustomerInfo from "./CustomerInfo";

function BookingPage(props) {
  const [bookingData, setBookingData] = useState({});
  // 定义 state 来保存数据

  // const handleBookingSubmit = (data) => {
  //   setBookingData(data); // 保存 BookingForm 的表单数据
  // };
  return (
    <section className="booking-page">
      {/* <h1>Reserve Your Table</h1> */}
      <BookingForm
          availableTimes={props.availableTimes}
          dispatch={props.dispatch}
          submitForm={props.submitForm}
          bookingData={bookingData}
          setBookingData={setBookingData}
        />
      {/* <CustomerInfo bookingData={bookingData} setBookingData={setBookingData} /> */}
    </section>
  );
}

export default BookingPage;
