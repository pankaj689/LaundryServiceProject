import React from "react";
import "../styles/header.css";

const Header = (props) => {
  return (
    <>
      <header>
        <h4>LAUNDRY</h4>
        <nav>
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>Carrer</li>
            <button>Sign In</button>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
