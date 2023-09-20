import React from "react";
import ReactDOM from "react-dom";

import App from "./App/index.js";
import ContextProvider from "./App/ContextProvider.jsx";
import "./theme.css";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
