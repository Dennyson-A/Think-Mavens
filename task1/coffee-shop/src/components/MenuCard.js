import React from "react";

const MenuCard = ({ item, cart, updateQuantity }) => {
  return (
    <div className="menu-card">
  <table className="menu-table">
    <tbody>
      <tr>
        <td rowSpan="3" className="menu-image-cell">
          <img src={item.image} alt={item.name} className="menu-image" />
        </td>
        <td  className="menu-title" colSpan="2">
          <h3>
            {item.name} 
          </h3>
        </td>
        <td>
          <span className="price">${item.price.toFixed(2)}</span>
        </td>
      </tr>

      <tr>
        <td className="menu-description" colSpan="3">{item.description}</td>
      </tr>

      <tr>
        <td className="size-label">Size</td>
        <td className="size-btn-cell">
          <button className="size-btn">Small</button>
        </td>
        <td className="size-btn-cell">
          <button className="size-btn">Large</button>
        </td>
      </tr>

      <tr>
        <td colSpan="2" className="quantity-control">
          <button onClick={() => updateQuantity(item.id, -1)} disabled={cart[item.id] === 0}>-</button>
          <span>{cart[item.id] || 0}</span>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
        </td>
        <td colSpan="2">
          <button className={`add-to-cart ${cart[item.id] === 0 ? "disabled" : ""}`} disabled={cart[item.id] === 0}>
            Add to Cart
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  );
};

export default MenuCard;
