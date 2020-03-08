import React from "react";

import Router from "next/router";
import Cookies from "js-cookie";

class Logout extends React.Component {
  componentDidMount() {
    Cookies.remove("token");
    setTimeout(() => {
      Router.push("/login");
    }, 100);
  }

  render() {
    return <div>You are successfully logged out!</div>;
  }
}

export default Logout;
