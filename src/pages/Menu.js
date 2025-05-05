import menupic1 from "../images/menu-pic1.jpg";
import "./Menu.css";

function Menu() {
  const appetizers = [
    {
      name: "Bruschetta",
      description:
        "Grilled bread topped with fresh tomatoes, basil, and balsamic glaze.",
      price: "$12.50",
    },
    {
      name: "Stuffed Grape Leaves",
      description: "Grape leaves stuffed with rice, pine nuts, and herbs.",
      price: "$16.55",
    },
    {
      name: "Hummus Platter",
      description:
        "Classic hummus served with pita bread and assorted vegetables.",
      price: "$11.50",
    },
    {
      name: "Fried Calamari",
      description: "Crispy fried calamari served with marinara sauce.",
      price: "$10.95",
    },
    {
      name: "Spinach and Feta Pie",
      description: "Phyllo pastry filled with spinach, feta cheese, and herbs.",
      price: "$14.50",
    },
    {
      name: "Mezze Platter",
      description: "Assorted dips and spreads served with pita bread.",
      price: "$14.00",
    },
    {
      name: "Falafel",
      description: "Deep-fried chickpea balls served with tahini sauce.",
      price: "$13.95",
    },
  ];

  const salads = [
    {
      name: "Greek Salad",
      description:
        "Crisp lettuce, tomatoes, cucumbers, olives, and feta cheese.",
      price: "$10.50",
    },
    {
      name: "Caesar Salad",
      description:
        "Romaine lettuce, croutons, and Caesar dressing topped with parmesan.",
      price: "$11.00",
    },
    {
      name: "Quinoa Salad",
      description: "Quinoa, black beans, corn, and avocado with lime dressing.",
      price: "$12.00",
    },
    {
      name: "Chickpea Salad",
      description:
        "Chickpeas, cucumbers, tomatoes, and red onion with lemon dressing.",
      price: "$10.00",
    },
    {
      name: "Roasted Beet Salad",
      description:
        "Roasted beets, goat cheese, and walnuts on a bed of arugula.",
      price: "$12.50",
    },
  ];

  const mainCourses = [
    {
      name: "Lemon Herb Chicken",
      description:
        "Grilled chicken marinated in lemon and herbs, served with vegetables.",
      price: "$18.50",
    },
    {
      name: "Salmon Fillet",
      description: "Grilled salmon with a lemon-dill sauce, served with rice.",
      price: "$22.00",
    },
    {
      name: "Vegetable Stir-Fry",
      description: "Mixed vegetables stir-fried with soy sauce and sesame oil.",
      price: "$15.00",
    },
    {
      name: "Beef Kofta",
      description: "Spiced ground beef skewers served with tzatziki sauce.",
      price: "$19.50",
    },
    {
      name: "Eggplant Parmesan",
      description:
        "Breaded eggplant slices baked with marinara sauce and cheese.",
      price: "$17.00",
    },
    {
      name: "Shrimp Scampi",
      description: "Sautéed shrimp in garlic butter sauce served over pasta.",
      price: "$20.00",
    },
    {
      name: "Stuffed Peppers",
      description: "Bell peppers stuffed with rice, beans, and spices.",
      price: "$16.50",
    },
  ];

  const desserts = [
    {
      name: "Lemon Tart",
      description:
        "Classic lemon tart with a buttery crust and fresh lemon filling.",
      price: "$7.50",
    },
    {
      name: "Baklava",
      description: "Layers of filo pastry filled with nuts and honey syrup.",
      price: "$6.50",
    },
    {
      name: "Chocolate Mousse",
      description: "Rich chocolate mousse topped with whipped cream.",
      price: "$8.00",
    },
    {
      name: "Fruit Salad",
      description: "Assorted fresh fruits served with a mint garnish.",
      price: "$5.50",
    },
    {
      name: "Cheesecake",
      description:
        "Classic cheesecake with a graham cracker crust and fruit topping.",
      price: "$7.00",
    },
  ];

  const drinks = [
    {
      name: "Fresh Lemonade",
      description: "Refreshing lemonade made with fresh lemons and mint.",
      price: "$4.00",
    },
    {
      name: "Red Wine",
      description: "Selection of red wines from local vineyards.",
      price: "$8.00",
    },
    {
      name: "White Wine",
      description: "Selection of white wines from local vineyards.",
      price: "$8.00",
    },
    {
      name: "Craft Beer",
      description: "Local craft beers on tap and in bottles.",
      price: "$6.00",
    },
    {
      name: "Mocktails",
      description: "Non-alcoholic cocktails made with fresh fruits and herbs.",
      price: "$5.00",
    },
    {
      name: "Specialty Coffees",
      description:
        "Espresso, cappuccino, and latte made with premium coffee beans.",
      price: "$4.50",
    },
  ];

  return (
    <div className="menu-container">
      <section className="menu-pic">
        <img className="menu-pic1" src={menupic1} alt="pic1" />
        <div className="menu-text">
          <h1 className="menu-h1">Menu</h1>
          <h3 className="menu-h3">
            Explore our delicious menu, crafted with fresh ingredients and a
            touch of love.
          </h3>
        </div>
      </section>
      <section className="menu-bottom">
        {/* appetizers */}
        <div className="menu-bottom-appetizers section-wrapper">
          <h2 className="menu-h2">Appetizers</h2>
          <div className="menu-bottom-appetizers-list">
            {appetizers.map((item, index) => (
              <div className="menu-bottom-appetizers-list-item" key={index}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">Price: {item.price}</p>
              </div>
            ))}
          </div>
        </div>
        {/* salads */}
        <section className="menu-fourth-section">

        <div className="menu-bottom-salads section-wrapper">
          <h2 className="menu-h2">Salads</h2>
          <div className="menu-bottom-appetizers-list">
            {salads.map((item, index) => (
              <div className="menu-bottom-appetizers-list-item" key={index}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">Price: {item.price}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Main Courses */}
        <div className="menu-bottom-main-courses section-wrapper">
          <h2 className="menu-h2">Main Courses</h2>
          <div className="menu-bottom-appetizers-list">
            {mainCourses.map((item, index) => (
              <div className="menu-bottom-appetizers-list-item" key={index}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price" >Price: {item.price}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Desserts */}
        <div className="menu-bottom-desserts section-wrapper">
          <h2 className="menu-h2">Desserts</h2>
          <div className="menu-bottom-appetizers-list">
            {desserts.map((item, index) => (
              <div className="menu-bottom-appetizers-list-item" key={index}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">Price: {item.price}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Drinks */}
        <div className="menu-bottom-drinks section-wrapper">
          <h2 className="menu-h2">Drinks</h2>
          <div className="menu-bottom-appetizers-list">
            {drinks.map((item, index) => (
              <div className="menu-bottom-appetizers-list-item" key={index}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">Price: {item.price}</p>
              </div>
            ))}
          </div>
        </div>
        </section>
      </section>
    </div>
  );
}

export default Menu;
