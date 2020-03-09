import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

import Link from "next/link";

import Cookies from "js-cookie";

import NotLoggedIn from "./NotLoggedIn";
import LoggedIn from "./LoggedIn";
import { app_url } from "./../../utils/constants";
// import {isLogged} from './../../utils/auth';

const Header = props => {
  //   console.log(props);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const isLogged = Cookies.get("token");

  return (
    <div className="mb-2">
      <Navbar color="light" light expand="md">
        <NavbarBrand className="mr-auto text-success">
          <strong>CulTech</strong>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink>
                <Link href="/">
                  <span>Home</span>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="/events">
                  <span>Events</span>
                </Link>
              </NavLink>
            </NavItem>
            {isLogged ? <LoggedIn /> : <NotLoggedIn />}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
