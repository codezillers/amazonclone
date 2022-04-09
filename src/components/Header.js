import React from "react";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="header">
      <div className="top">
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

        <div className="top-right">
          <div className="items">
            <p>Hello, Ashrof</p>
            <p>Account & Lists</p>
          </div>

          <div className="items">
            <p>Returns</p>
            <p>& Orders</p>
          </div>

          <div
            className="items"
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <span className="basket-count">0</span>
            <ShoppingCartIcon style={{ height: "30" }} />
            <p className="basket-text">Basket</p>
          </div>
        </div>
      </div>

      <div></div>
    </header>
  );
};

export default Header;
