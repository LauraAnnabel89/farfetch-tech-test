import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="Header">
      <img
        className="Header__logo"
        src="https://www.farfetch.com/static/images/logo.png"
        alt="Farfetch logo"
      />
      <h1 className="Header__title">New in this week</h1>
      <p className="Header__copy">
        Fresh like a breeze in the sauna. Welcome to our collection of new in
        this week designer pieces — enough to revitalise any wardrobe.
      </p>
    </div>
  );
}

export default Header;
