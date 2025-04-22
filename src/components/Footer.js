import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section className="contact-container">
        <h3>Contact</h3>
        <address>Address</address>
        <p>Phone Number</p>
        <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
      </section>
      <section className="navigation-container">
        <h3>Navigation</h3>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reserve a Table</Link>
        </li>
      </section>
      <section className="follow-us-container">
        <h3>Follow Us</h3>
        <li>
          <a href="https://facebook.com/littlelemon">Facebook</a>
        </li>
        <li>
          <a href="https://instagram.com/littlelemon">Instagram</a>
        </li>
        <li>
          <a href="https://twitter.com/littlelemon">Twitter</a>
        </li>
      </section>
      <p>© 2025 Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
