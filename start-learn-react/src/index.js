import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App locale="bn-BD">Ekhn tham Ujjal</App>
    <App locale="en-EN">Why you are stop!!kep kopa</App>
  </React.StrictMode>
);
