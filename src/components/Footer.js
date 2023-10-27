import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted">© 2023 <i>SouthSizzle</i>, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          {/* Add list items here */}
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
            {/* <a href="/about" className="nav-link text-muted">About Us</a> */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>

            {/* <a href="/contact" className="nav-link text-muted">Contact</a> */}
          </li>
        </ul>
      </footer>
    </div>
  );
}
