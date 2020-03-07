import React from "react";

import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
// Bootstrap CSS file
import "bootstrap/dist/css/bootstrap.min.css";

import "./../style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "70vh" }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
