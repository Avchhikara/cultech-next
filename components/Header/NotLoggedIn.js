import React from "react";

import Link from "next/link";
import { NavItem, NavLink, Button } from "reactstrap";

const NotLoggedIn = props => {
  return (
    <>
      <NavItem>
        <NavLink>
          <Link href={"/login"}>
            <Button color="success" outline size="sm">
              Login
            </Button>
          </Link>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink>
          <Link href="/register">
            <Button size="sm" color="success">
              Register
            </Button>
          </Link>
        </NavLink>
      </NavItem>
    </>
  );
};

export default NotLoggedIn;
