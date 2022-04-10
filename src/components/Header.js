import React from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="header">
      <div className="top-nav">
        <div className="logo">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon"
          />
        </div>

        <div className="input-wrap">
          <input className="input" type="text" />
          <SearchIcon className="search-icon" />
        </div>

        <div className="top-right flex">
          <div className="items">
            <p>Hello, Ashrof</p>
            <p>Account & Lists</p>
          </div>

          <div className="items">
            <p>Returns</p>
            <p>& Orders</p>
          </div>

          <div className="items flex relative">
            <span className="nav-cart-count absolute">0</span>
            <ShoppingCartIcon style={{ height: "30", marginTop: "12" }} />
            <p className="basket-text hidden">Cart</p>
          </div>
        </div>
      </div>

      <div className="bottom-nav">
        <p className="menu-icon flex">
          <MenuIcon style={{ height: "24px", marginRight: "4px" }} />
          All
        </p>
        <p className="link">Today's Deals</p>
        <p className="link">Browsing History</p>
        <p className="link">Buy Again</p>

        <p className="link hidden">Customer Service</p>
        <p className="link hidden">Gift Cards</p>
        <p className="link hidden">Registry</p>
        <p className="link hidden">Sell</p>
      </div>
    </header>
  );
};

export default Header;
