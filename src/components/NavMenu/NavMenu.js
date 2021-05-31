import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./NavMenuStyle.module.css";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            to="/"
            activeClassName={styles.active}
            exact
            className={styles.menu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName={styles.active}
            exact
            className={styles.menu}
          >
            About us
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName={styles.active}
            exact
            className={styles.menu}
          >
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavMenu;
