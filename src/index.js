import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./Components/Header";
import ButonsRow from "./Components/ButonsRow";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <ButonsRow />
  </React.StrictMode>
);

reportWebVitals();
