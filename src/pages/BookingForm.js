import { useState } from "react";
import "./BookingForm.css"
import { Link } from "react-router-dom";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
//   const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const handleDateChange = (e) => {
     const newDate = e.target.value;
     setDate(newDate);
     props.dispatch({type: 'change_date', date: new Date(newDate)})
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, guests, occasion });

    setTimeout(() => {
     setDate("");
     setTime("");
     setGuests(1);
     setOccasion("Birthday")
    }, 5000);
  };



  return (
    <form onSubmit={handleSubmit}>
     <h1>Reserve Your Table</h1>
      {/* ===== */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        name="res-date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />
      {/* ===== */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {props.availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      {/* ====== */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        placeholder="1"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      {/* ====== */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {/* <input type="submit" value="Make Your reservation"/> */}
      <Link to='/comfirm'>
          <button type="submit" className="form-button">Make Your reservation</button>
      </Link>
    </form>
  );
}

export default BookingForm;
