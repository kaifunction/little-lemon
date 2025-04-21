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
        <h2>Navigation</h2>

        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reserve">Reserve a Table</a>
        </li>
      </section>
      <section className="follow-us-container">
        <h2>Follow Us</h2>
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
