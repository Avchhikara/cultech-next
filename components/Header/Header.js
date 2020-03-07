import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import Link from "next/link";

import { app_url } from "./../../utils/constants";

const Header = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="mb-2">
      <Navbar color="light" light expand="md">
        <NavbarBrand className="mr-auto">
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
            <NavItem>
              <NavLink>
                <a
                  href={app_url + "/login"}
                  role="button"
                  className="btn btn-outline-success btn-sm"
                >
                  Login
                </a>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <a
                  href={app_url + "/login"}
                  role="button"
                  className="btn btn-success btn-sm"
                >
                  Register
                </a>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
