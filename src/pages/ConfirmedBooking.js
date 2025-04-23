import { Link } from 'react-router-dom';
import './ConfirmedBooking.css'
import { useNavigate } from 'react-router-dom';

function ConfirmedBooking(){
     const navigator = useNavigate();

     const handleBack = (e) => {
          e.preventDefault();
          navigator("/");
     }

     return (
          <section className='confirm-container'>
               <h1>🎉 Booking Confirmed!</h1>
               <p>Thank you for your reservation at Little Lemon. We look forward to serving you!</p>
               <Link><p className='add-to-calendar'>Add to Calendar</p></Link>
               <button className='confirmed-button modify-but'>Modify Reservation</button>
               <button className='confirmed-button cancel-but'>Cancel Reservation</button>
               <button onClick={handleBack} className="back-button-confirm">Back to Home</button>
          </section>
     )
}


export default ConfirmedBooking;
