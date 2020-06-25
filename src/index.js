import * as React from "react";
import ReactDOM from "react-dom";
import regeneratorRuntime from "regenerator-runtime";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
