import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./context/Context";
import App from "./App";
import "./css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
