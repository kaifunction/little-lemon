import aboutuspic1 from "../images/about-us-pic1.jpg";
import aboutuspic2 from "../images/about-us-pic2.jpg";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-us-container">
      <section className="about-us-pic">
        <img className="about-us-pic1" src={aboutuspic1} alt="pic1" />
        <h1 className="about-us-h1">About Us!</h1>
        <h3 className="about-us-h3">
          Founded by two brothers, Mario and Adrian, Little Lemon was born from
          a shared love of authentic cuisine and meaningful connections. What
          started as a small passion project has grown into a beloved local
          favorite—where every dish is crafted with heart, and every guest is
          treated like family.
        </h3>
      </section>
      <section className="about-us-bottom">
        <div className="about-us-our-philosophy-container">
          <img className="about-us-pic2" src={aboutuspic2} alt="pic2" />
          <div>
            <div className="about-us-our-philosophy-text">
              <h2 className="">Our Philosophy</h2>
              <h3>
                We focus on fresh, locally sourced ingredients, traditional
                cooking methods, and seasonal menus that celebrate simplicity.
                Whether it's our zesty lemon-roasted chicken, house-made hummus,
                or crispy falafel, every bite tells a story of heritage and
                care.
              </h3>
            </div>
            <div className="about-us-our-experience">
              <h2>The Experience</h2>
              <h4>
                Our space is cozy, inviting, and full of charm—perfect for a
                casual lunch, a romantic dinner, or a special celebration. Enjoy
                a thoughtfully curated wine list, friendly service, and a menu
                that balances comfort with culinary creativity.
              </h4>
            </div>
          </div>
        </div>
        <p className="about-us-our-mission">
          We're not just serving meals—we're creating memories. At Little Lemon,
          you're always welcome at our table.
        </p>
        <h5 className="about-us-bottom-text">Come hungry. Leave happy.</h5>
      </section>
      <Link to="/booking">
        <button type="button" className="about-us-button">
          Reserve a Table
        </button>
      </Link>
    </div>
  );
}

export default About;
