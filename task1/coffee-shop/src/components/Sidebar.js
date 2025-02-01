import React from "react";
import { FaHome, FaListUl, FaClock, FaHandshake, FaCog, FaSignOutAlt, FaHeart } from "react-icons/fa";
import { BsBox } from "react-icons/bs"; // My Orders Icon
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">
        <span className="highlight">Purr'</span>Coffee
      </h2>
      <ul className="nav-list">
        <li className="active">
          <FaHome className="icon" /> Home page
        </li>
        <li>
          <FaListUl className="icon" /> Menu
        </li>
        <li className="orders">
          <BsBox className="icon" /> My orders <span className="order-count">13</span>
        </li>
        <li>
          <FaClock className="icon" /> History
        </li>
        <li>
          <FaHandshake className="icon" /> Partners
        </li>
        <li>
          <FaCog className="icon" /> Settings
        </li>
        <li className="donate">
          <FaHeart className="donateicon" /> Donate to shelter
        </li>
      </ul>
      <div className="space">  </div>
      <div className="logout">
        <FaSignOutAlt className="icon" /> Log out
      </div>
    </div>
  );
};

export default Sidebar;
