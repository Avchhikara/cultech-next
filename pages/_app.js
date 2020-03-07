// Bootstrap CSS file
import "bootstrap/dist/css/bootstrap.min.css";

import "./../components/Events/event.css";

function App({ Component, pageProps }) {
  return (
    <div>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default App;
