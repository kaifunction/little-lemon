/* global fetchAPI */
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import About from "../pages/About";
import ConfirmedBooking from "../pages/ConfirmedBooking";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../api/api"
import Menu from "../pages/Menu";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";
// 初始化时间
function initializeTimes() {
  return fetchAvailableTimes(new Date());
}

// 模拟根据日期返回时间段
function fetchAvailableTimes(date) {
     return fetchAPI(date);
   }

// reducer
function updateTimes(state, action) {
  if (action.type === "change_date") {
    return fetchAvailableTimes(action.date);
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate()

  const submitForm = (formData) => {
     const isSuccess = submitAPI(formData);
     if(isSuccess){
          navigate('/confirm')
     }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/confirm" element={<ConfirmedBooking />} />
        <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<OrderOnline />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </main>
  );
}

export default Main;
export {initializeTimes, updateTimes}
