import "./BookingPage.css";
import BookingForm from "./BookingForm";

function BookingPage(props) {
  return (
    <section className="booking-page">
      {/* <h1>Reserve Your Table</h1> */}
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    </section>
  );
}

export default BookingPage;
