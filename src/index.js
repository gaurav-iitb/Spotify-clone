import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DataStore from "./context/DataStore";
import reducer, { initialstate } from "./maincontent/reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataStore initialstate={initialstate} reducer={reducer}>
      <App />
    </DataStore>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
