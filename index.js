import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Import custom styles if needed
import App from "./App"; // Main component
import reportWebVitals from "./reportWebVitals";

// Render the root component into the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Matches the `div` with `id="root"` in index.html
);

// Measure app performance (optional)
reportWebVitals();
