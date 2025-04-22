import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Main from "./components/Main";

function App() {
  return (
    <div className='app-container'>
      <Header />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
