import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>FoodApp</h2>
          <p>
            Order delicious food online anytime,
            anywhere.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Cart</li>
            <li>Orders</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: support@foodapp.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 FoodApp. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;