import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      <header>
        <h4>LAUNDRY</h4>
        <nav>
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>Carrer</li>
            <a href="/"><li className="signin-btn">Sign In</li></a>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
