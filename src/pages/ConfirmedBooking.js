import { Link } from 'react-router-dom';
import './ConfirmedBooking.css'

function ConfirmedBooking(){
     return (
          <section className='confirm-container'>
               <h1>🎉 Booking Confirmed!</h1>
               <p>Thank you for your reservation at Little Lemon. We look forward to serving you!</p>
               <Link><p className='add-to-calendar'>Add to Calendar</p></Link>
               <button className='confirmed-button modify-but'>Modify Reservation</button>
               <button className='confirmed-button cancel-but'>Cancel Reservation</button>
          </section>
     )
}


export default ConfirmedBooking;
