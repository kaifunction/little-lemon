// import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './pages/HomePage';
import Footer from './components/Footer';
// import BookingPage from "./pages/BookingPage";
import './App.css';


function App() {
  return (
    <div className='app-container'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
