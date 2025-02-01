import React, { useState } from "react";
import CategoryNav from "./../components/CategoryNav";
import MenuCard from "./../components/MenuCard";
import "./styles.css";
import Americano from "./../images/Americano.png"
import Cappuccino from "./../images/cappuccino.png"
import Latte from "./../images/Coffee Latte.png"
import V60 from "./../images/V60.png"

const CoffeeMenu = () => {
  const [category, setCategory] = useState("Coffee");
  const [cart, setCart] = useState({});

  const menuItems = [
    { id: 1, name: "Cappuccino", price: 4.98, image: Cappuccino, description: "The combination of coffee, milk, and palm sugar makes this drink delicious." },
    { id: 2, name: "Coffee Latte", price: 5.98, image: Latte, description: "This caffe latte is one of the popular types of milk coffee." },
    { id: 3, name: "Americano", price: 5.98, image: Americano, description: "Americano coffee is espresso drinks combined with hot water." },
    { id: 4, name: "V60", price: 5.98, image: V60 , description: "The V60 technique is one of the most used techniques by baristas." },
  ];

  const updateQuantity = (id, change) => {
    setCart((prev) => {
      const newQty = (prev[id] || 0) + change;
      return { ...prev, [id]: newQty < 0 ? 0 : newQty };
    });
  };

  return (
    <div className="menu">
      <CategoryNav setCategory={setCategory} />
      <h2>Coffee Menu</h2>
      <div className="menu-grid">
        {menuItems
          .filter((item) => category === "Coffee" || category !== "Coffee") // Adjust logic for filtering
          .map((item) => (
            <MenuCard key={item.id} item={item} cart={cart} updateQuantity={updateQuantity} />
          ))}
      </div>
    </div>
  );
};

export default CoffeeMenu;
