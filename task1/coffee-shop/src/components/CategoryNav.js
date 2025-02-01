import React, { useState } from "react";

const CategoryNav = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("Coffee");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCategory(category);
  };

  return (
    <div className="category-nav">
      {["Coffee", "Non Coffee", "Food", "Snack", "Dessert"].map((category) => (
        <button
          key={category}
          className={activeCategory === category ? "active" : ""}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;
