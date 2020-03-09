import App from "next/app";
import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";

import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";

// Bootstrap CSS file
import "bootstrap/dist/css/bootstrap.min.css";

import "./../style.css";

Router.events.on("routeChangeStart", url => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          <title>CulTech - Cultural and Technical fest of ECE department</title>
        </Head>
        <style jsx>{`
          a {
            margin: 0 10px 0 0;
          }
        `}</style>
        <Header />
        <div className="container" style={{ minHeight: "80vh" }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </>
    );
  }
}

export default MyApp;
