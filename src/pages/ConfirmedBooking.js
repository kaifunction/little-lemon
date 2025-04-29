import { Link } from "react-router-dom";
import "./ConfirmedBooking.css";
import { useNavigate, useLocation } from "react-router-dom";

function ConfirmedBooking() {
  const navigator = useNavigate();
  const location = useLocation();
  const { bookingData, customerData } = location.state || {};

  const handleBack = (e) => {
    e.preventDefault();
    navigator("/");
  };

  return (
    <section className="confirm-container">
      <h1>🎉 Booking Confirmed!</h1>
      <p
        style={{ fontSize: "1.1rem", marginTop: "-10px", marginBottom: "5rem" }}
      >
        Thank you for your reservation at Little Lemon. We look forward to
        serving you!
      </p>

      <div className="confirm-booking-details">
        <h2>Booking Details: </h2>
        <section className="confirm-details">
          <p>
            <span className="details">Date:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{bookingData?.date}</span>
          </p>
          <p>
            <span className="details">Time:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{bookingData?.time}</span>
          </p>
          <p>
            <span className="details">Guests:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{bookingData?.guests}</span>
          </p>
          <p>
            <span className="details">
              Occasion:
            </span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{bookingData?.occasion}</span>
          </p>
          <p>
            <span className="details">
              First Name:
            </span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{customerData?.firstName}</span>
          </p>
          <p>
            <span className="details">
              Last Name:
            </span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{customerData?.lastName}</span>
          </p>
          <p>
            <span className="details">Email:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{customerData?.email}</span>
          </p>
          <p>
            <span className="details">Phone: </span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{customerData?.phone}</span>
          </p>
          <p className="full-row">
            <span className="details">
              Special Requests:
            </span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{customerData?.specialRequests}</span>
          </p>
        </section>
      </div>
      {/* <div className="confirm-customer-info">
          <h2>Customer Information</h2>
          <section className="confirm-details">
          </section>
        </div> */}
      <p className="add-to-calendar" style={{ cursor: "pointer" }}>
        Add to Calendar
      </p>
      <button className="confirmed-button modify-but">
        Modify Reservation
      </button>
      <button className="confirmed-button cancel-but">
        Cancel Reservation
      </button>
      <button onClick={handleBack} className="back-button-confirm">
        Back to Home
      </button>
    </section>
  );
}

export default ConfirmedBooking;
