import { useLocation, useNavigate } from "react-router-dom";
import "./OrderConfirmed.css";

function OrderConfirmed() {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order || [];

  const getTotal = () => {
    return order
      .reduce((sum, item) => sum + item.dish.price * item.quantity, 0)
      .toFixed(2);
  };
  return (
    <section className="order-confirmed-section">
      <h1 className="order-confirmed-title">Order Confirmed!</h1>
      {order.length > 0 ? (
        <>
          <p className="order-confirmed-subtext">
            Thank you for your order! We will prepare your meal shortly.
          </p>
          <ul>
            {order.map((item, index) => (
              <li key={index} className="order-confirmed-item">
                {item.dish.name} × {item.quantity} = $
                {(item.dish.price * item.quantity).toFixed(2)}
              </li>
            ))}
            <li className="order-confirmed-total">
              <strong>Total: ${getTotal()}</strong>
            </li>
          </ul>
        </>
      ) : (
        <></>
      )}
    </section>
  );
}
export default OrderConfirmed;
