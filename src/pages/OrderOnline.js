import './OrderOnline.css';
import orderImg from '../images/about-us-pic2.jpg';

function OrderOnline() {
  return (
    <section className="order-online-container">
      <div className="order-online-content">
        <div className="order-online-text">
          <h2 className="order-title">Order Online</h2>
          <p className="order-description">
            Enjoy your favorite dishes from the comfort of your home. Fresh, delicious, and delivered fast!
          </p>
          <a href="/order" className="order-button">Start Your Order</a>
        </div>
        <div className="order-online-image-wrapper">
          <img src={orderImg} alt="Order your favorite dish online" className="order-online-image" />
        </div>
      </div>
    </section>
  );
}

export default OrderOnline;
