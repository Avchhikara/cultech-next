import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";

import { isLogged } from "./../utils/auth";

// Bootstrap CSS file
import "bootstrap/dist/css/bootstrap.min.css";

import "./../style.css";

function App({ Component, pageProps }) {
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

// App.getInitialProps = ctx => {
//   const out = isLogged(ctx);

//   return { isLogged: !!out };
// };

export default App;
