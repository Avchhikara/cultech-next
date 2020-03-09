import React from "react";

import Link from "next/link";
import { NavItem, NavLink, Button } from "reactstrap";

const LoggedIn = props => {
  return (
    <>
      <NavItem>
        <NavLink>
          <Link href="/dashboard">
            <span>Dashboard</span>
          </Link>
        </NavLink>
      </NavItem>
      {
        //   <NavItem>
        //   <NavLink>
        //     <Link href="/profile">
        //       <span>Profile</span>
        //     </Link>
        //   </NavLink>
        // </NavItem>
      }
      <NavItem>
        <NavLink>
          <Link href="/logout">
            <Button size="sm" color="success">
              Logout
            </Button>
          </Link>
        </NavLink>
      </NavItem>
    </>
  );
};

export default LoggedIn;
