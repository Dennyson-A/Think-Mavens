import React from "react";
import { FaFilter, FaSearch } from "react-icons/fa";

const SearchFilter = () => {
  return (
    <div className="search-filter">
        <div className="search">
            <div className="search-icon">
                <FaSearch/>
            </div>
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="filter-button">
                <FaFilter/> Filter
            </button>
      </div>
    </div>
  );
};

export default SearchFilter;
