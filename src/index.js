import React from "react";
import ReactDom from "react-dom/client";

class App extends React.Component {
  render() {
    return <h2>Webpack</h2>;
  }
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
