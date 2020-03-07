import React from "react";

import Header from "./../components/Header/Header";
// Bootstrap CSS file
import "bootstrap/dist/css/bootstrap.min.css";

import "./../components/Events/event.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Header />
        <div className="container">
          <Component {...pageProps} />
        </div>
      </div>
    );
  }
}

export default App;
