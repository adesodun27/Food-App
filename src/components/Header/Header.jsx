import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Order your favouite food here </h1>
        <p>
          Choose from a diverse menu featuring a deletable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
              </p>
              <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
