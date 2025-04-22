// components/Main.js
import { Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import About from "../pages/About";

function Main() {
  return (
    <main>
     <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/about" element={<About />} />
     </Routes>
    </main>
  );
}

export default Main;
