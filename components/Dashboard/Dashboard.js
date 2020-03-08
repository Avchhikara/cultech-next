import React from "react";
import Router from "next/router";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { token } = this.props;
    if (!token) Router.push("/login");
  }

  render() {
    return (
      <div>
        <div>This is the dashboard</div>
      </div>
    );
  }
}

export default Dashboard;
