// components/Main.js
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import About from "../pages/About";
import Comfirm from "../pages/Comfirm";
import { useReducer } from "react";
// 初始化时间
function initializeTimes() {
  return fetchAvailableTimes(new Date());
}

// 模拟根据日期返回时间段
function fetchAvailableTimes(date) {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
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

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/comfirm" element={<Comfirm />} />
      </Routes>
    </main>
  );
}

export default Main;
export {initializeTimes, updateTimes}
