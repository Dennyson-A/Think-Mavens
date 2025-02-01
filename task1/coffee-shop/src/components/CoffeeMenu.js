import { useState } from "react";
import "./CoffeeMenu.css";

const CoffeeMenu = () => {
  const menuItems = [
    { id: 1, name: "Cappuccino", price: 4.98, image: "./../images/cappuccino.jpg" },
    { id: 2, name: "Coffee Latte", price: 5.98, image: "la" },
    { id: 3, name: "Americano", price: 5.98, image: "americ" },
    { id: 4, name: "V60", price: 5.98, image: "" },
  ];

  const [cart, setCart] = useState({});

  const updateQuantity = (id, change) => {
    setCart((prev) => {
      const newQty = (prev[id] || 0) + change;
      return { ...prev, [id]: newQty < 0 ? 0 : newQty };
    });
  };

  return (
    <div className="menu">
      <h1>Coffee Menu</h1>
      <div className="filters">
        <button className="active">☕ Coffee</button>
        <button>🍹 Non Coffee</button>
        <button>🍽️ Food</button>
        <button>🥨 Snack</button>
        <button>🍰 Dessert</button>
      </div>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name} <span>${item.price.toFixed(2)}</span></h3>
            <p>Delicious {item.name} with premium ingredients.</p>
            <div className="quantity">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{cart[item.id] || 0}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeMenu;
