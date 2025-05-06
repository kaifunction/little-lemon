import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderOnline.css";

function OrderOnline() {
  const navigate = useNavigate();
  const menu = {
    appetizers: [
      { name: "Bruschetta", price: 12.5 },
      { name: "Stuffed Grape Leaves", price: 16.55 },
      { name: "Hummus Platter", price: 11.5 },
      { name: "Fried Calamari", price: 10.95 },
      { name: "Spinach and Feta Pie", price: 14.5 },
      { name: "Mezze Platter", price: 14.0 },
      { name: "Falafel", price: 13.95 },
    ],
    salads: [
      { name: "Greek Salad", price: 10.5 },
      { name: "Caesar Salad", price: 11.0 },
      { name: "Quinoa Salad", price: 12.0 },
      { name: "Chickpea Salad", price: 9.5 },
      { name: "Roasted Beet Salad", price: 10.75 },
    ],
    mains: [
      { name: "Lemon Herb Chicken", price: 20.0 },
      { name: "Grilled Salmon", price: 22.0 },
      { name: "Vegetable Stir-Fry", price: 18.0 },
      { name: "Beef Kofta", price: 19.5 },
      { name: "Eggplant Parmesan", price: 17.0 },
      { name: "Shrimp Scampi", price: 21.0 },
      { name: "Stuffed Peppers", price: 16.5 },
    ],
    desserts: [
      { name: "Lemon Tart", price: 7.5 },
      { name: "Baklava", price: 6.5 },
      { name: "Chocolate Mousse", price: 8.0 },
      { name: "Fruit Salad", price: 5.5 },
      { name: "Cheesecake", price: 7.0 },
    ],
    drinks: [
      { name: "Fresh Lemonade", price: 4.5 },
      { name: "Red Wine", price: 8.0 },
      { name: "White Wine", price: 8.0 },
      { name: "Craft Beer", price: 6.0 },
      { name: "Mocktails", price: 5.0 },
      { name: "Specialty Coffees", price: 4.0 },
    ],
  };

  const [selectedDishes, setSelectedDishes] = useState({
    appetizers: "",
    salads: "",
    mains: "",
    desserts: "",
    drinks: "",
  });

  const [quantities, setQuantities] = useState({
    appetizers: 1,
    salads: 1,
    mains: 1,
    desserts: 1,
    drinks: 1,
  });

  const [order, setOrder] = useState([]);

  const handleSelectChange = (category, value) => {
    setSelectedDishes({ ...selectedDishes, [category]: value });
  };

  const handleQuantityChange = (category, value) => {
    setQuantities({ ...quantities, [category]: parseInt(value) });
  };

  const handleAddToOrder = () => {
    const updatedOrder = [...order];

    Object.keys(selectedDishes).forEach((category) => {
      const dishStr = selectedDishes[category];
      const quantity = quantities[category];

      if (dishStr && quantity > 0) {
        const dish = JSON.parse(dishStr); // 把字符串转为对象
        const existing = updatedOrder.find(
          (item) => item.dish.name === dish.name
        );

        if (existing) {
          existing.quantity += quantity;
        } else {
          updatedOrder.push({ dish, quantity });
        }
      }
    });

    setOrder(updatedOrder);

    setSelectedDishes({
      appetizers: "",
      salads: "",
      mains: "",
      desserts: "",
      drinks: "",
    });
    setQuantities({
      appetizers: 1,
      salads: 1,
      mains: 1,
      desserts: 1,
      drinks: 1,
    });
  };

  const handleReset = () => {
    setSelectedDishes({
      appetizers: "",
      salads: "",
      mains: "",
      desserts: "",
      drinks: "",
    });
    setQuantities({
      appetizers: 1,
      salads: 1,
      mains: 1,
      desserts: 1,
      drinks: 1,
    });
    setOrder([]);
  }

  const handleSubmit = () => {
    navigate('/orderconfirmed', {
      state: {
        order: order,
      }
    })
  }

  return (
    <section className="order-online-form-section">
      <h2 className="order-title">Order Online</h2>
      <p className="order-subtext">
        Select dishes from each category and place your order.
      </p>

      <div className="order-form-grid">
        {Object.entries(menu).map(([category, items]) => (
          <div className="order-form" key={category}>
            <label className="order-label">{category.toUpperCase()}</label>
            <select
              value={selectedDishes[category]}
              onChange={(e) => handleSelectChange(category, e.target.value)}
              className="order-select"
            >
              <option value="">-- Select a {category} --</option>
              {items.map((item, index) => (
                <option value={JSON.stringify(item)} key={index}>
                  {item.name} ---- ${item.price.toFixed(2)}
                </option>
              ))}
            </select>

            <input
              type="number"
              min="1"
              max="10"
              value={quantities[category]}
              onChange={(e) => handleQuantityChange(category, e.target.value)}
              className="order-quantity"
            />
          </div>
        ))}
        <div>
        <label className="order-label-special">SPECIAL REQUESTS</label>
        <textarea
          className="order-special-requests"
          placeholder="Special requests or dietary restrictions"
          rows="4"
          cols="50"
        ></textarea>
        </div>
      </div>

      <button onClick={handleAddToOrder} className="order-button">
        Add to Order
      </button>

      {order.length > 0 && (
        <div className="order-summary">
          <h2>🧾 Your Order</h2>
          <ul>
            {order.map((item, index) => (
              <li key={index}>
                {item.dish.name} × {item.quantity} = $
                {(item.dish.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <h3 className="order-total">
            <span className="order-total-text">Total: $</span>
            {order
              .reduce(
                (total, item) => total + item.dish.price * item.quantity,
                0
              )
              .toFixed(2)}
          </h3>
          <button className='reset-button' onClick={handleReset}>Reset</button>
          <button className="order-submit-button" onClick={handleSubmit}>Submit Order</button>
        </div>
      )}
    </section>
  );
}

export default OrderOnline;
