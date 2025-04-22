import { Link } from "react-router-dom";
import mainPic from "../images/restauranfood.jpg";
import salad from "../images/greek salad.jpg";
import bruchetta from "../images/Bruchetta.jpg";
import lemonDessert from "../images/lemon dessert.jpg";
import infoPic from "../images/Mario and Adrian A.jpg";
import infoPicb from "../images/Mario and Adrian b.jpg";
import "./HomePage.css";

function HomePage() {
  return (
    <main>
      {/* reserve table button */}
      <section className="top-container">
        <div className="top-left">
          <h1 className="little-lemon-h1">Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/booking">
            <button type="button">Reserve a Table</button>
          </Link>
        </div>
        <img src={mainPic} alt="" width="250px" height="320px" />
      </section>
      {/* specials */}
      <section className="bottom-container">
        <div className="bottom-top">
          <h1 className="second-h1">This weeks specials!</h1>
          <button>Online Menu</button>
        </div>
        <article>
          <div>
            <img src={salad} alt="" width="270px" height="170px" />
            <div className="background-same">
              <span className="dish-name">Greek salad</span>
              <span className="dish-price">$12.99</span>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic.{" "}
              </p>
              <h5>Order a delivery</h5>
            </div>
          </div>
          <div>
            <img src={bruchetta} alt="" width="270px" height="170px" />
            <div className="background-same">
              <span className="dish-name">Bruchetta</span>
              <span className="dish-price">$ 5.99</span>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.{" "}
              </p>
              <h5>Order a delivery</h5>
            </div>
          </div>
          <div>
            <img src={lemonDessert} alt="" width="270px" height="170px" />
            <div className="background-same">
              <span className="dish-name">Lemon Dessert</span>
              <span className="dish-price">$ 5.00</span>
              <p>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <h5>Order a delivery</h5>
            </div>
          </div>
        </article>
      </section>
      {/* testimonials */}
      <section className="testmonials-container">
        <h1>Testimonials</h1>
        <div>
          <article>
            <h3 className="test-h3">Rating:</h3>
            <p className="test-name">Name: Sophie T.</p>
            <p className="test-rating">
              “Absolutely loved the Lemon Herb Chicken! Great atmosphere and
              staff.”
            </p>
          </article>
          <article>
            <h3 className="test-h3">Rating:</h3>
            <p className="test-name">Name: Daniel M.</p>
            <p className="test-rating">
              “Really flavorful dishes, especially the shrimp linguine. Will
              come again!”
            </p>
          </article>
          <article>
            <h3 className="test-h3">Rating:</h3>
            <p className="test-name">Name: Rachel B.</p>
            <p className="test-rating">
              “Really flavorful dishes, especially the shrimp linguine. Will
              come again!”
            </p>
          </article>
          <article>
            <h3 className="test-h3">Rating:</h3>
            <p className="test-name">Name: Kai F.</p>
            <p className="test-rating">
              “Really flavorful dishes, especially the shrimp linguine. Will
              come again!”
            </p>
          </article>
        </div>
      </section>
      {/* info */}
      <section className="info">
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.{" "}
          </p>
        </div>
        <div className="info-images-overlap">
          <img className="top-img" src={infoPic} width="300px" />
          <img className="bottom-img" src={infoPicb} width="300px" />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
