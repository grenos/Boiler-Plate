import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

//! reactstrap
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

//! fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGooglePlus
} from '@fortawesome/free-brands-svg-icons';

const MyNavbar = () => {
  return (
    <div>
      <Navbar className="navbar" fixed="top">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="logo-brand"
            className="navbar__logo"
          />
        </Link>

        <Nav className="ml-auto">
          <NavItem>
            <a href="#" className="navbar__icon--style">
              <FontAwesomeIcon
                className="navbar__icon--size"
                icon={faFacebookF}
              />
            </a>
          </NavItem>

          <NavItem>
            <a href="#" className="navbar__icon--style">
              <FontAwesomeIcon
                className="navbar__icon--size"
                icon={faTwitter}
              />
            </a>
          </NavItem>

          <NavItem>
            <a href="#" className="navbar__icon--style">
              <FontAwesomeIcon
                className="navbar__icon--size"
                icon={faGooglePlus}
              />
            </a>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
